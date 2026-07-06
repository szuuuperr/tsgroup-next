"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

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

const categories: { key: GaleriCategory; label: string; icon: string }[] = [
  {
    key: "semua",
    label: "Semua Foto",
    // photo_library
    icon: "M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z",
  },
  {
    key: "destinasi",
    label: "Destinasi",
    // place: pin lokasi
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  },
  {
    key: "budaya",
    label: "Budaya & Sejarah",
    // account_balance: bangunan bersejarah/candi
    icon: "M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z",
  },
  {
    key: "perjalanan",
    label: "Perjalanan Kami",
    // directions_car: perjalanan bersama TS Group
    icon: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
  },
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

          <div className="filter-tabs" data-scroll="fade-up" data-scroll-delay="300">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-tab ${activeCategory === cat.key ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d={cat.icon} />
                </svg>
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
