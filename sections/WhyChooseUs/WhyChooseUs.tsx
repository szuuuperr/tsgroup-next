import Image from "next/image";
import styles from "./WhyChooseUs.module.css";
import { WHATSAPP_URL } from "@/lib/site";

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
            Dengan komitmen untuk memberikan kepuasan kepada pelanggan, TS
            Group turut menghadirkan beragam paket wisata menarik yang
            memungkinkan Anda menikmati keindahan Jogja dan sekitarnya tanpa
            ribet. Tidak hanya itu, kami juga memahami kebutuhan Anda yang
            mungkin menginginkan fleksibilitas lebih dalam menjelajahi Jogja,
            itulah sebabnya kami menyediakan layanan penyewaan mobil lepas
            kunci.
          </p>
          <p>
            Dengan armada kendaraan yang terawat dengan baik dan sopir yang
            berpengalaman, kami siap membantu setiap perjalanan Anda menjadi
            pengalaman yang luar biasa.
          </p>
        </div>
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
