"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

/**
 * Dua jalur animasi scroll:
 *
 * 1. Jalur CSS  — [data-scroll] & [data-scroll-parent]/[data-scroll-child]:
 *    IntersectionObserver menambah .is-visible, transisi diatur globals.css.
 *
 * 2. Jalur GSAP — grid kartu ber-atribut [data-scroll-gsap] dengan anak
 *    [data-scroll-child]: animasi ala Masonry (slide-up 80px + blur-to-focus,
 *    power3.out 0.6s, stagger 0.05s). Grid yang di-remount (klik filter /
 *    pagination) terdeteksi lewat MutationObserver sehingga animasi
 *    berjalan ulang.
 */

/** Animasi masuk kartu ala Masonry untuk semua anak sebuah grid. */
function animateCards(parent: Element) {
  if (parent.hasAttribute("data-gsap-done")) return;
  parent.setAttribute("data-gsap-done", "");

  const children = Array.from(
    parent.querySelectorAll<HTMLElement>("[data-scroll-child]")
  );
  if (!children.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(children, { opacity: 1 });
    return;
  }

  // Matikan transition CSS (hover) selama GSAP memegang transform,
  // supaya keduanya tidak saling tarik-menarik.
  children.forEach((el) => {
    el.style.transition = "none";
  });

  gsap.fromTo(
    children,
    { opacity: 0, y: 80, filter: "blur(10px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05,
      overwrite: "auto",
      onComplete: () => {
        // Kembalikan kontrol transform & transition ke CSS (efek hover).
        gsap.set(children, { clearProps: "transform,filter,transition" });
      },
    }
  );
}

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // ── Jalur CSS ─────────────────────────────────────────────
    const cssEls = document.querySelectorAll(
      "[data-scroll], [data-scroll-parent]"
    );
    const cssObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    cssEls.forEach((el) => cssObserver.observe(el));

    // ── Jalur GSAP ────────────────────────────────────────────
    const gsapObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCards(entry.target);
            gsapObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document
      .querySelectorAll("[data-scroll-gsap]:not([data-gsap-done])")
      .forEach((el) => gsapObserver.observe(el));

    // Grid yang di-remount (klik filter / pagination) muncul sebagai node
    // baru: animasikan langsung bila sudah terlihat, selain itu tunggu scroll.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          const grids = node.matches("[data-scroll-gsap]")
            ? [node]
            : Array.from(node.querySelectorAll("[data-scroll-gsap]"));
          grids.forEach((grid) => {
            if (grid.hasAttribute("data-gsap-done")) return;
            if (grid.getBoundingClientRect().top < window.innerHeight) {
              animateCards(grid);
            } else {
              gsapObserver.observe(grid);
            }
          });
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    window.scrollTo(0, 0);

    return () => {
      cssObserver.disconnect();
      gsapObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
