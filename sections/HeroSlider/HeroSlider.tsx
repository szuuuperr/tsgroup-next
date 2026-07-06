"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./HeroSlider.module.css";

/** Satu sumber durasi autoplay: interval JS & progress bar dot. */
const AUTOPLAY_MS = 6000;

const slides = [
  { src: "/assets/candi-borobudur.jpeg", alt: "Candi Borobudur" },
  { src: "/assets/kraton-yogyakarta.webp", alt: "Kraton Yogyakarta" },
  { src: "/assets/tugu-jogja.jpg", alt: "Tugu Jogja" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  // Entrance ala Masonry (slide-up + blur-to-focus) — signature animasi situs.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = "[data-hero-reveal]";
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { opacity: 1 });
        return;
      }
      gsap.fromTo(
        targets,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.2,
          clearProps: "filter",
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const changeSlide = (direction: number) => {
    let newIndex = currentSlide + direction;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    setCurrentSlide(newIndex);
    startAutoPlay(); // reset timer saat navigasi manual
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoPlay();
  };

  return (
    <section className={styles.heroSection} id="hero" ref={sectionRef}>
      <div
        className={styles.heroSlider}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ""}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
        <div className={styles.heroOverlay} aria-hidden="true"></div>

        {/* Konten utama */}
        <div className={styles.heroContent}>
          <span
            className={`${styles.heroSubtitle} ${styles.heroReveal}`}
            data-hero-reveal
          >
            TS Group Tour &amp; Travel
          </span>
          <h1
            className={`${styles.heroTitle} ${styles.heroReveal}`}
            data-hero-reveal
          >
            Liburan ke Jogja,
            <br />
            Serahkan Saja ke Kami
          </h1>
          <p
            className={`${styles.heroDescription} ${styles.heroReveal}`}
            data-hero-reveal
          >
            Sejak 2010 kami menemani ribuan tamu keliling Yogyakarta.
            Mau sewa mobil saja, atau sekalian paket dengan sopir dan BBM,
            tinggal pilih.
          </p>
          <div
            className={`${styles.heroActions} ${styles.heroReveal}`}
            data-hero-reveal
          >
            <Link href="/paket-wisata" className="btn-primary">
              Lihat Paket Wisata
            </Link>
            <Link href="/rental-mobil" className="btn-outline-white">
              Sewa Mobil
            </Link>
          </div>
        </div>

        {/* Dots progres autoplay */}
        <div className={styles.heroDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.heroDot} ${index === currentSlide ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : undefined}
            >
              {index === currentSlide && (
                <span
                  key={currentSlide}
                  className={styles.heroDotFill}
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Klaster kanan-bawah: chip lokasi + panah navigasi,
            sejajar dengan dots di kiri sehingga tidak menutupi teks. */}
        <div className={styles.heroControls}>
          <span className={styles.heroLocation} key={`loc-${currentSlide}`}>
            {String(currentSlide + 1).padStart(2, "0")}
            <span className={styles.heroLocationDot} aria-hidden="true" />
            {slides[currentSlide].alt}
          </span>
          <button
            className={styles.heroArrow}
            onClick={() => changeSlide(-1)}
            aria-label="Slide sebelumnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className={styles.heroArrow}
            onClick={() => changeSlide(1)}
            aria-label="Slide berikutnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
