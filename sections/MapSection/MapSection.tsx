"use client";

import dynamic from "next/dynamic";
import styles from "./MapSection.module.css";

const Map = dynamic(() => import("../../components/Map/Map"), { ssr: false });

export default function MapSection() {
  return (
    <section id="map-section">
      <div className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <span className="section-subtitle" data-scroll="fade-up">
            Panduan Wisata
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Peta Wisata Yogyakarta
          </h2>
          <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
            Temukan berbagai destinasi menarik hanya dalam satu peta. Dari
            pantai eksotis, pegunungan yang menawan, hingga kawasan budaya yang
            kaya akan sejarah, semua dapat Anda jelajahi dengan mudah untuk
            merencanakan perjalanan yang tak terlupakan.
          </p>
          <div
            data-scroll="zoom-in"
            data-scroll-delay="300"
            style={{ alignSelf: "stretch", width: "100%" }}
          >
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
