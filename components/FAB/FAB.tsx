"use client";

import { useState, useEffect } from "react";
import styles from "./FAB.module.css";
import { WHATSAPP_ICON_640, WHATSAPP_URL } from "@/lib/site";

export default function FAB() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fabWhatsapp}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d={WHATSAPP_ICON_640} />
        </svg>
        <span>Hubungi via WhatsApp</span>
      </a>
      <button
        className={styles.fabScrollTop}
        onClick={handleScrollTopClick}
        aria-label="Scroll to top"
        style={{
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </svg>
      </button>
    </>
  );
}
