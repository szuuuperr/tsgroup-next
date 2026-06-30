"use client";

import styles from "./Review.module.css";

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
    <section id="review" style={{ width: "100%", overflow: "hidden" }}>
      <div className={styles.customersReviewSection}>
        <div className={styles.reviewContainer}>
          <span className="section-subtitle" data-scroll="fade-up">
            Ulasan Pelanggan
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
            Tersedia layanan rental mobil dengan beragam pilihan armada yang
            lengkap dan nyaman, didukung harga yang kompetitif untuk memenuhi
            kebutuhan perjalanan Anda.
          </p>

          <div className={styles.reviewHeader} data-scroll="fade-up" data-scroll-delay="200">
            <div className={styles.reviewHeaderLeft}>
              <div className={styles.googleLogo}>
                <span style={{ color: "#4285F4", fontWeight: 700, fontSize: "22px" }}>G</span>
                <span style={{ color: "#EA4335", fontWeight: 700, fontSize: "22px" }}>o</span>
                <span style={{ color: "#FBBC05", fontWeight: 700, fontSize: "22px" }}>o</span>
                <span style={{ color: "#4285F4", fontWeight: 700, fontSize: "22px" }}>g</span>
                <span style={{ color: "#34A853", fontWeight: 700, fontSize: "22px" }}>l</span>
                <span style={{ color: "#EA4335", fontWeight: 700, fontSize: "22px" }}>e</span>
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
              href="https://www.google.com/search?client=firefox-b-d&hs=KeCV&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVYOXmp-r9QP1AyO_Xe1u3dDtIjBR4hCEDmwsTm6kZPL8L9S7-1n2GIZMVgpzGINkti0pl24_ZDSMcS6ZbBz53ceAU-b94gmLcd7r59OK4OcVRoCuw%3D%3D&q=TS+GROUP+TOUR+N+TRAVEL+Ulasan&sa=X#lrd=0x2e7a59775406a531:0xe5e692e3e23ede8f,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnReviewGoogle}
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
                  <div className="card-line"></div>
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
