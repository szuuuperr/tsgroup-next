"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import TopBar from "@/components/TopBar/TopBar";
import { WHATSAPP_URL } from "@/lib/site";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/paket-wisata", label: "PAKET WISATA" },
  { href: "/rental-mobil", label: "RENTAL MOBIL" },
  { href: "/destinasi-wisata", label: "DESTINASI WISATA" },
  { href: "/galeri", label: "GALERI" },
  { href: "/blog", label: "BLOG" },
  { href: "/profil", label: "PROFIL" },
  { href: "/kontak", label: "KONTAK" },
];

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    width="16"
    height="16"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(`${href}/`);

  return (
    
    <div
      className={`${styles.navbarWrapper} ${
        showNavbar ? styles.show : styles.hide
      }`}
    >
      <TopBar />
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href="/">
            <Image
              src="/assets/logo-tsgroup.svg"
              alt="TS Group Logo"
              width={542}
              height={136}
              unoptimized
            />
          </Link>
        </div>
        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? styles.active : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navbarCtaMobile}
            onClick={closeMenu}
          >
            Hubungi Kami
            <PhoneIcon />
          </a>
        </div>
        <div className={styles.navbarCta}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-primary"
          >
            Hubungi Kami
            <PhoneIcon />
          </a>
        </div>
      </nav>
    </div>
  );
}
