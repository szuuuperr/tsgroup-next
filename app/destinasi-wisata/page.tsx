"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./DestinasiWisata.module.css";
import MapSection from "@/sections/MapSection/MapSection";
import { waLink } from "@/lib/site";
import {
  destinations,
  destinasiCategories,
  type DestinasiCategory,
} from "@/app/data/destinasi";

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.243-1.214l-.257-.154-2.866.852.852-2.866-.168-.268A8 8 0 1 1 12 20z" />
  </svg>
);

const tips = [
  {
    title: "Waktu Terbaik",
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    description:
      "Kunjungi Jogja saat musim kemarau (April-Oktober) untuk pengalaman terbaik. Hindari akhir pekan dan libur nasional untuk menghindari keramaian.",
  },
  {
    title: "Sewa Mobil",
    icon: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
    description:
      "Gunakan jasa rental mobil TS Group untuk mobilitas yang nyaman. Tersedia berbagai pilihan armada dengan sopir berpengalaman yang ramah.",
  },
  {
    title: "Rute Efisien",
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    description:
      "Kelompokkan destinasi berdasarkan area untuk menghemat waktu. Sopir kami memahami rute terbaik dan bisa memberikan rekomendasi.",
  },
  {
    title: "Budaya Lokal",
    icon: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z",
    description:
      "Hormati adat dan budaya setempat. Kenakan pakaian sopan saat mengunjungi tempat ibadah dan situs bersejarah di Yogyakarta.",
  },
];

export default function DestinasiWisataPage() {
  const [activeCategory, setActiveCategory] = useState<DestinasiCategory>("semua");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredDestinations =
    activeCategory === "semua"
      ? destinations
      : destinations.filter((d) => d.category.includes(activeCategory));

  return (
    <main>
      <section className={styles.pageHeader} id="destination">
        <span className="section-subtitle" data-scroll="fade-up">
          Pilihan Destinasi
        </span>
        <h1 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
          Destinasi Wisata Populer
        </h1>
        <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
          Yogyakarta menyimpan kekayaan destinasi wisata yang sayang untuk
          dilewatkan, mulai dari pesona alam yang memukau, warisan situs
          bersejarah, hingga tempat-tempat wisata kekinian yang selalu ramai
          dikunjungi.
        </p>
      </section>

      <section className={styles.listSection} id="destinasi-list">
        <div className={styles.contentContainer}>
          <div className={styles.filterTabs} data-scroll="fade-up" data-scroll-delay="300">
            {destinasiCategories.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.filterTab} ${activeCategory === cat.key ? styles.active : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d={cat.icon} />
                </svg>
                {cat.label}
              </button>
            ))}
          </div>

          <div className={styles.cardsGrid} data-scroll-parent>
            {filteredDestinations.map((dest) => (
              <article
                key={dest.id}
                className={`${styles.destinasiCard} ${expandedId === dest.id ? styles.expanded : ""}`}
                data-scroll-child
              >
                <div className={styles.cardImage}>
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={styles.cardBadge}>{dest.highlight}</div>
                  <div className={styles.cardRating}>
                    <StarIcon />
                    <span>{dest.rating}</span>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardName}>{dest.name}</h2>
                    <div className={styles.cardLocation}>
                      <LocationIcon />
                      <span>{dest.location}</span>
                    </div>
                  </div>
                  <p className={styles.cardDesc}>{dest.description}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.cardReviews}>
                      <div className={styles.reviewStarsRow}>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                      <span>{dest.reviewCount.toLocaleString("id-ID")} ulasan</span>
                    </div>
                    <button
                      className={styles.btnDetail}
                      onClick={() => setExpandedId(expandedId === dest.id ? null : dest.id)}
                    >
                      {expandedId === dest.id ? "Tutup" : "Lihat Detail"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={expandedId === dest.id ? styles.chevronOpen : styles.chevron}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>
                  <div className={`${styles.cardDetail} ${expandedId === dest.id ? styles.open : ""}`}>
                    <div className={styles.cardLine}></div>
                    <div className={styles.detailInfoGrid}>
                      <div className={styles.detailInfoItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                        <div>
                          <span className={styles.detailLabel}>Jam Buka</span>
                          <span className={styles.detailValue}>06:00 - 17:00 WIB</span>
                        </div>
                      </div>
                      <div className={styles.detailInfoItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                        </svg>
                        <div>
                          <span className={styles.detailLabel}>Tiket Masuk</span>
                          <span className={styles.detailValue}>Mulai Rp 25.000</span>
                        </div>
                      </div>
                      <div className={styles.detailInfoItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                        </svg>
                        <div>
                          <span className={styles.detailLabel}>Transportasi</span>
                          <span className={styles.detailValue}>Tersedia via TS Group</span>
                        </div>
                      </div>
                    </div>
                    <a
                      className={styles.btnPesan}
                      href={waLink(`Halo TS Group, saya tertarik untuk mengunjungi ${dest.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pesan Perjalanan ke {dest.name}
                      <WhatsAppIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MapSection />

      <section className="content-section" id="tips-wisata">
        <div className={styles.contentContainer}>
          <span className="section-subtitle" data-scroll="fade-up">
            Tips Berwisata
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Tips Liburan ke Jogja
          </h2>
          <p
            className={`section-description ${styles.tipsDescription}`}
            data-scroll="fade-up"
            data-scroll-delay="200"
          >
            Beberapa tips penting agar liburan Anda di Yogyakarta berjalan lancar dan menyenangkan.
          </p>
          <div className={styles.tipsGrid} data-scroll-parent>
            {tips.map((tip) => (
              <div className={styles.tipCard} data-scroll-child key={tip.title}>
                <div className={styles.tipIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d={tip.icon} />
                  </svg>
                </div>
                <h3 className={styles.tipTitle}>{tip.title}</h3>
                <p className={styles.tipDesc}>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
