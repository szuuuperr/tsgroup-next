import Image from "next/image";
import styles from "./WhyChooseUs.module.css";
import { WHATSAPP_URL } from "@/lib/site";

const CHECK_ICON =
  "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";

const features = [
  {
    title: "Armada selalu prima",
    detail: "kebersihan dan kondisi mesin diperiksa sebelum setiap keberangkatan.",
  },
  {
    title: "Sopir sekaligus teman perjalanan",
    detail: "hafal rute terbaik, spot foto tersembunyi, dan kuliner enak di Jogja.",
  },
  {
    title: "Harga transparan tanpa biaya tersembunyi",
    detail: "kesepakatan di awal adalah harga final yang Anda bayar.",
  },
  {
    title: "Respon cepat via WhatsApp",
    detail: "konsultasi rute dan jadwal dibalas setiap hari pukul 07.00-21.00 WIB.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.whyChooseUsLeft} data-scroll="zoom-in">
        <Image
          src="/assets/why-choose-us-image.png"
          alt="Kenapa Memilih Kami"
          width={1080}
          height={1080}
          sizes="(max-width: 1024px) 100vw, 40rem"
        />
      </div>
      <div className={styles.whyChooseUsRight}>
        <span className="section-subtitle" data-scroll="fade-up">
          Keunggulan Kami
        </span>
        <h2 className="section-title" data-scroll="fade-up">
          Kenapa Anda Harus Memilih Layanan Kami?
        </h2>
        <div className={`${styles.description} description`} data-scroll="fade-up">
          <p>
            Lebih dari 14 tahun kami menemani ribuan wisatawan menjelajah
            Yogyakarta. Bukan sekadar mengantar sampai tujuan, kami memastikan
            setiap perjalanan terasa aman, nyaman, dan menyenangkan sejak
            penjemputan hingga kembali.
          </p>
        </div>
        <ul className={styles.featureList} data-scroll="fade-up">
          {features.map((f) => (
            <li key={f.title}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d={CHECK_ICON} />
              </svg>
              <span>
                <strong>{f.title}</strong>: {f.detail}
              </span>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-secondary"
          data-scroll="fade-up"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}
