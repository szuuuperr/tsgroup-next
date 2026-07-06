import Image from "next/image";
import styles from "./WhyChooseUs.module.css";
import { WHATSAPP_URL } from "@/lib/site";

const features = [
  {
    title: "Mobil selalu siap jalan",
    detail: "Kabin dan mesin dicek sebelum setiap keberangkatan.",
    // directions_car
    icon: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
  },
  {
    title: "Sopir yang paham Jogja",
    detail: "Hafal rute, spot foto, dan kuliner langganan warga.",
    // person
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  },
  {
    title: "Tanpa biaya dadakan",
    detail: "Sepakat berapa di awal, bayarnya segitu.",
    // payments
    icon: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
  },
  {
    title: "Dibalas orang, bukan bot",
    detail: "Chat WhatsApp dijawab tim kami, 07.00-21.00 WIB.",
    // chat
    icon: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z",
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
        <ul className={styles.featureList} data-scroll-parent>
          {features.map((f) => (
            <li key={f.title} className={styles.featureItem} data-scroll-child>
              <span className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d={f.icon} />
                </svg>
              </span>
              <span className={styles.featureText}>
                <strong>{f.title}</strong>
                <span>{f.detail}</span>
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
