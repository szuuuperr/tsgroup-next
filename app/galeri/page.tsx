"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Galeri.module.css";

const Masonry = dynamic(() => import("@/components/Masonry/Masonry"), {
  ssr: false,
});

type GaleriCategory = "semua" | "destinasi" | "budaya" | "perjalanan";

interface GaleriItem {
  id: string;
  img: string;
  url: string;
  height: number;
  category: Exclude<GaleriCategory, "semua">;
}

const galleryItems: GaleriItem[] = [
  { id: "heha", img: "/assets/heha-gambar.png", url: "/destinasi-wisata", height: 400, category: "destinasi" },
  { id: "borobudur", img: "/assets/borobudur-gambar.png", url: "/destinasi-wisata", height: 300, category: "budaya" },
  { id: "merapi", img: "/assets/merapilava-gambar.png", url: "/destinasi-wisata", height: 500, category: "destinasi" },
  { id: "prambanan", img: "/assets/prambanan-gambar.png", url: "/destinasi-wisata", height: 350, category: "budaya" },
  { id: "parangtritis", img: "/assets/parangtritis-gambar.png", url: "/destinasi-wisata", height: 450, category: "destinasi" },
  { id: "goapindul", img: "/assets/goapindul-gambar.png", url: "/destinasi-wisata", height: 400, category: "destinasi" },
  { id: "tugu", img: "/assets/tugu-jogja.jpg", url: "/destinasi-wisata", height: 500, category: "budaya" },
  { id: "candi-borobudur", img: "/assets/candi-borobudur.jpeg", url: "/destinasi-wisata", height: 350, category: "budaya" },
  { id: "kraton", img: "/assets/kraton-yogyakarta.webp", url: "/destinasi-wisata", height: 400, category: "budaya" },
  { id: "perjalanan", img: "/assets/introduction-image.png", url: "/destinasi-wisata", height: 450, category: "perjalanan" },
  { id: "paket-1", img: "/assets/paket-1.png", url: "/paket-wisata", height: 350, category: "perjalanan" },
  { id: "paket-2", img: "/assets/paket-2.png", url: "/paket-wisata", height: 400, category: "perjalanan" },
];

const categories: { key: GaleriCategory; label: string }[] = [
  { key: "semua", label: "Semua Foto" },
  { key: "destinasi", label: "Destinasi" },
  { key: "budaya", label: "Budaya & Sejarah" },
  { key: "perjalanan", label: "Perjalanan Kami" },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState<GaleriCategory>("semua");

  const filteredItems = useMemo(
    () =>
      activeCategory === "semua"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <main>
      <section className="content-section" id="galeri">
        <div className="content-container">
          <span className="section-subtitle" data-scroll="fade-up">
            Galeri Kami
          </span>
          <h1 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Dokumentasi Perjalanan
          </h1>
          <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
            Kumpulan momen terbaik dari berbagai perjalanan wisata bersama TS
            Group. Setiap foto menyimpan cerita dan pengalaman tak terlupakan di
            Yogyakarta dan sekitarnya.
          </p>

          <div className={styles.filterTabs} data-scroll="fade-up" data-scroll-delay="300">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.filterTab} ${activeCategory === cat.key ? styles.active : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <Masonry
            items={filteredItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </section>
    </main>
  );
}
