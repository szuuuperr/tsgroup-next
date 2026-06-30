import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <section className={styles.introductionSection}>
      <div className={styles.introductionLeft}>
        <span className="section-subtitle" data-scroll="fade-up">
          Tentang Kami
        </span>
        <h2 className="section-title" data-scroll="fade-up">
          Kenapa Memilih Layanan Dari TS Group?
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
          href="https://wa.me/6285645733351"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-secondary"
          data-scroll="fade-up"
        >
          Hubungi Kami
        </a>
      </div>
      <div className={styles.introductionRight} data-scroll="zoom-in">
        <img src="/assets/introduction-image.png" alt="Tentang TS Group" />
      </div>
    </section>
  );
}
