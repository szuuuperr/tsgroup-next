"use client";

import dynamic from "next/dynamic";

const Masonry = dynamic(() => import("../../components/Masonry/Masonry"), {
  ssr: false,
});

export default function GaleriPage() {
  const items = [
    {
      id: "1",
      img: "/assets/heha-gambar.png",
      url: "/destinasi-wisata",
      height: 400,
    },
    {
      id: "2",
      img: "/assets/borobudur-gambar.png",
      url: "/destinasi-wisata",
      height: 300,
    },
    {
      id: "3",
      img: "/assets/merapilava-gambar.png",
      url: "/destinasi-wisata",
      height: 500,
    },
    {
      id: "4",
      img: "/assets/prambanan-gambar.png",
      url: "/destinasi-wisata",
      height: 350,
    },
    {
      id: "5",
      img: "/assets/parangtritis-gambar.png",
      url: "/destinasi-wisata",
      height: 450,
    },
    {
      id: "6",
      img: "/assets/goapindul-gambar.png",
      url: "/destinasi-wisata",
      height: 400,
    },
    {
      id: "7",
      img: "/assets/tugu-jogja.jpg",
      url: "/destinasi-wisata",
      height: 500,
    },
    {
      id: "8",
      img: "/assets/candi-borobudur.jpeg",
      url: "/destinasi-wisata",
      height: 350,
    },
    {
      id: "9",
      img: "/assets/kraton-yogyakarta.webp",
      url: "/destinasi-wisata",
      height: 400,
    },
    {
      id: "10",
      img: "/assets/introduction-image.png",
      url: "/destinasi-wisata",
      height: 450,
    },
    {
      id: "11",
      img: "/assets/paket-1.png",
      url: "/paket-wisata",
      height: 350,
    },
    {
      id: "12",
      img: "/assets/paket-2.png",
      url: "/paket-wisata",
      height: 400,
    },
  ];

  return (
    <>
      <section className="content-section" id="galeri">
        <div className="content-container">
          <span className="section-subtitle" data-scroll="fade-up">
            Galeri Kami
          </span>
          <h2
            className="section-title"
            data-scroll="fade-up"
            data-scroll-delay="100"
          >
            Dokumentasi Perjalanan
          </h2>
          <p
            className="section-description"
            data-scroll="fade-up"
            data-scroll-delay="200"
          >
            Kumpulan momen terbaik dari berbagai perjalanan wisata bersama TS
            Group. Setiap foto menyimpan cerita dan pengalaman tak terlupakan di
            Yogyakarta dan sekitarnya.
          </p>
          <Masonry
            items={items}
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
    </>
  );
}
