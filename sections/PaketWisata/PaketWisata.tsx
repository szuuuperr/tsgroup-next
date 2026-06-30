"use client";

import styles from "./PaketWisata.module.css";
import Link from "next/link";

const pakets = [
  {
    title: "PAKET PESONA JOGJA TOUR #1",
    price: "Rp 350.000",
    description: "Nikmati keindahan sunrise di Candi Borobudur dengan pengalaman tak terlupakan",
    image: "/assets/paket-1.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Candi Borobudur", "Museum Samudraraksa", "Punthuk Setumbu", "Gardu View Borobudur"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Borobudur Sunrise"
  },
  {
    title: "PAKET PESONA JOGJA TOUR #2",
    price: "Rp 350.000",
    description: "Nikmati keindahan sunrise di Candi Borobudur dengan pengalaman tak terlupakan",
    image: "/assets/paket-2.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Candi Borobudur", "Museum Samudraraksa", "Punthuk Setumbu", "Gardu View Borobudur"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Borobudur Sunrise"
  },
  {
    title: "PAKET PESONA JOGJA TOUR #3",
    price: "Rp 350.000",
    description: "Nikmati keindahan sunrise di Candi Borobudur dengan pengalaman tak terlupakan",
    image: "/assets/paket-3.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Candi Borobudur", "Museum Samudraraksa", "Punthuk Setumbu", "Gardu View Borobudur"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Borobudur Sunrise"
  },
  {
    title: "PAKET PESONA JOGJA TOUR #4",
    price: "Rp 350.000",
    description: "Nikmati keindahan sunrise di Candi Borobudur dengan pengalaman tak terlupakan",
    image: "/assets/paket-4.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Candi Borobudur", "Museum Samudraraksa", "Punthuk Setumbu", "Gardu View Borobudur"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Borobudur Sunrise"
  },
  {
    title: "PAKET PESONA JOGJA TOUR #5",
    price: "Rp 350.000",
    description: "Nikmati keindahan sunrise di Candi Borobudur dengan pengalaman tak terlupakan",
    image: "/assets/paket-5.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Candi Borobudur", "Museum Samudraraksa", "Punthuk Setumbu", "Gardu View Borobudur"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Borobudur Sunrise"
  },
  {
    title: "PAKET PESONA JOGJA TOUR #6",
    price: "Rp 350.000",
    description: "Nikmati keindahan sunrise di Candi Borobudur dengan pengalaman tak terlupakan",
    image: "/assets/paket-6.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Candi Borobudur", "Museum Samudraraksa", "Punthuk Setumbu", "Gardu View Borobudur"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Borobudur Sunrise"
  }
];

export default function PaketWisata() {
  return (
    <section id="paket-wisata">
      <div className={styles.paketWisataSection}>
        <div className={styles.paketWisataContainer}>
          <span className="section-subtitle" data-scroll="fade-up">
            Paket Wisata
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Pilihan Paket Wisata
          </h2>
          <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
            Yogyakarta menyimpan kekayaan destinasi wisata yang sayang untuk
            dilewatkan, mulai dari pesona alam yang memukau, warisan situs
            bersejarah, hingga tempat-tempat wisata kekinian yang selalu ramai
            dikunjungi.
          </p>

          <div className={styles.paketCardContainer} data-scroll-parent>
            {pakets.map((paket, index) => (
              <div className={styles.paketCard} data-scroll-child key={index}>
                <div className={styles.cardImage}>
                  <img src={paket.image} alt={paket.title} />
                </div>
                <div className={styles.paketCardBody}>
                  <div className={styles.paketCardHeader}>
                    <h5 className={styles.cardName}>{paket.title}</h5>
                    <span className={styles.cardPrice}>{paket.price}</span>
                  </div>
                  <p className={styles.cardDescription}>{paket.description}</p>
                  <div className="card-line"></div>
                  
                  <div className={styles.paketIncludeSection}>
                    <span className={styles.paketIncludeLabel}>Termasuk:</span>
                    <div className={styles.paketInclude}>
                      {paket.includes.map((inc, i) => (
                        <div className={styles.paketIncludeItem} key={i}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                          <p>{inc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.listDestinasi}>
                    <p>Destinasi:</p>
                    {paket.destinations.map((dest, i) => (
                      <div className={styles.listDestinasiItem} key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        <p>{dest}</p>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardBtnContainer}>
                    <button
                      className={styles.btnPesan}
                      onClick={() =>
                        window.open(
                          `https://wa.me/6285645733351?text=${encodeURIComponent(paket.whatsappText)}`,
                          "_blank"
                        )
                      }
                    >
                      Pesan Sekarang
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.243-1.214l-.257-.154-2.866.852.852-2.866-.168-.268A8 8 0 1 1 12 20z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.btnMorePaket}>
            <Link href="/paket-wisata" className="btn-outline-primary" data-scroll="fade-up">
              Lihat Semua Paket
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
