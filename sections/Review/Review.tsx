import styles from "./Review.module.css";
import { SITE } from "@/lib/site";

const googleLetters = [
  { letter: "G", color: "#4285F4" },
  { letter: "o", color: "#EA4335" },
  { letter: "o", color: "#FBBC05" },
  { letter: "g", color: "#4285F4" },
  { letter: "l", color: "#34A853" },
  { letter: "e", color: "#EA4335" },
];

const reviews = [
  {
    name: "Ahmad Fauzi",
    initial: "A",
    color: "#4285F4", // Google Blue
    date: "2 minggu lalu",
    text: "Pelayanan sangat memuaskan! Driver ramah dan berpengalaman, mobilnya bersih dan nyaman. Paket wisata Borobudur sunrise yang kami ambil sangat worth it. Pasti akan pakai TS Group lagi untuk trip berikutnya ke Jogja.",
  },
  {
    name: "Rina Wulandari",
    initial: "R",
    color: "#EA4335", // Google Red
    date: "1 bulan lalu",
    text: "Sewa Innova Reborn untuk liburan keluarga 3 hari di Jogja. Mobil dalam kondisi prima, AC dingin, dan bersih banget. Mas driver-nya juga tau banyak spot foto bagus. Harga sangat bersaing. Recommended banget!",
  },
  {
    name: "Dimas Prasetyo",
    initial: "D",
    color: "#34A853", // Google Green
    date: "1 bulan lalu",
    text: "Sudah 3 kali pakai jasa TS Group setiap ke Jogja. Selalu konsisten pelayanannya. Booking via WhatsApp fast response, armada terawat, dan yang paling penting driver-nya on time. Mantap!",
  },
  {
    name: "Siti Nurhaliza",
    initial: "S",
    color: "#FBBC05", // Google Yellow
    date: "2 bulan lalu",
    text: "Ambil paket tour Prambanan + Ratu Boko sunset. Pengalaman yang luar biasa! Driver sangat informatif dan sabar. Harga paket sudah termasuk tiket masuk, sangat praktis. Terima kasih TS Group!",
  },
];

export default function Review() {
  return (
    <section id="review" className={styles.reviewOuter}>
      <div className={styles.customersReviewSection}>
        <div className={styles.reviewContainer}>
          <span className="section-subtitle" data-scroll="fade-up">
            Ulasan Pelanggan
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
            Kepercayaan pelanggan adalah aset terbesar kami. Berikut cerita
            asli dari mereka yang sudah berlibur bersama TS Group, mulai dari
            liburan keluarga, rombongan kantor, hingga pelanggan setia yang
            kembali setiap kali ke Jogja.
          </p>

          <div className={styles.reviewHeader} data-scroll="fade-up" data-scroll-delay="200">
            <div className={styles.reviewHeaderLeft}>
              <div className={styles.googleLogo}>
                {googleLetters.map((item, index) => (
                  <span
                    key={index}
                    className={styles.googleLetter}
                    style={{ color: item.color }}
                  >
                    {item.letter}
                  </span>
                ))}
                <span className={styles.reviewLabel}>Reviews</span>
              </div>
              <div className={styles.reviewRatingRow}>
                <span className={styles.reviewScore}>4.8</span>
                <div className={styles.reviewStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg viewBox="0 0 24 24" key={i}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className={styles.reviewCount}>(128 ulasan)</span>
              </div>
            </div>
            <a
              href={SITE.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-outline-primary ${styles.btnReviewGoogle}`}
            >
              Tulis Ulasan di Google
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <div className={styles.reviewCards} data-scroll-parent>
            {reviews.map((review, index) => (
              <div className={styles.reviewCard} data-scroll-child key={index}>
                <div className={styles.reviewCardBody}>
                  <div className={styles.reviewCardHeader}>
                    <div className={styles.reviewAvatar} style={{ background: review.color }}>
                      {review.initial}
                    </div>
                    <div className={styles.reviewUserInfo}>
                      <div className={styles.reviewUserName}>
                        {review.name}
                        <svg className={styles.verifiedBadge} viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className={styles.reviewDate}>{review.date}</span>
                    </div>
                  </div>
                  <div className={styles.reviewStarsSmall}>
                    {[...Array(5)].map((_, i) => (
                      <svg viewBox="0 0 24 24" key={i}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className={styles.cardLine}></div>
                  <p className={styles.reviewText}>{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
