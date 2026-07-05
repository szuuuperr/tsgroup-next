import Image from "next/image";
import styles from "./CTA.module.css";
import { WHATSAPP_URL } from "@/lib/site";

export default function CTA() {
  return (
    <section className={styles.ctaSection} id="cta">
      <div className={styles.ctaContainer} data-scroll="zoom-in">
        <div className={styles.ctaLeft}>
          <h2 className={styles.ctaTitle}>Siap Liburan ke Jogja?</h2>
          <p className={styles.ctaDescription}>
            Tersedia layanan rental mobil dengan beragam pilihan armada yang lengkap dan nyaman, didukung harga yang kompetitif untuk memenuhi kebutuhan perjalanan Anda.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            Hubungi Kami
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </a>
        </div>
        <div className={styles.ctaRight}>
          <Image
            src="/assets/cta-gambar.png"
            alt="Liburan bersama TS Group"
            width={951}
            height={587}
            sizes="(max-width: 1024px) 100vw, 35rem"
          />
        </div>
      </div>
    </section>
  );
}
