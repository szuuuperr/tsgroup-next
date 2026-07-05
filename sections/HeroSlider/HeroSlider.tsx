"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HeroSlider.module.css";

const slides = [
  { src: "/assets/candi-borobudur.jpeg", alt: "Candi Borobudur" },
  { src: "/assets/kraton-yogyakarta.webp", alt: "Kraton Yogyakarta" },
  { src: "/assets/tugu-jogja.jpg", alt: "Tugu Jogja" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    };
  }, []);

  const changeSlide = (direction: number) => {
    let newIndex = currentSlide + direction;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    setCurrentSlide(newIndex);
    startAutoPlay(); // Reset timer on manual action
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoPlay(); // Reset timer on manual action
  };

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.heroSlider}>
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
      </div>
      <div className={styles.heroNav}>
        <button className={styles.heroPrev} onClick={() => changeSlide(-1)}>
          &#10094;
        </button>
        <button className={styles.heroNext} onClick={() => changeSlide(1)}>
          &#10095;
        </button>
      </div>
      <div className={styles.heroDots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.heroDot} ${index === currentSlide ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
