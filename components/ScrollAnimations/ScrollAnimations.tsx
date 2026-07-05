"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mengaktifkan animasi scroll berbasis IntersectionObserver untuk elemen
 * ber-atribut [data-scroll] / [data-scroll-parent], dan mengembalikan posisi
 * scroll ke atas setiap kali route berganti.
 */
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollElements = document.querySelectorAll(
      "[data-scroll], [data-scroll-parent]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    scrollElements.forEach((el) => observer.observe(el));

    window.scrollTo(0, 0);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
