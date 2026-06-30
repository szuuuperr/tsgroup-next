"use client";

import Link from "next/link";
import styles from "./Blog.module.css";

const blogPosts = [
  {
    title: "5 Tips Liburan Hemat di Yogyakarta untuk Keluarga",
    excerpt: "Yogyakarta selalu menjadi destinasi favorit keluarga. Tapi bagaimana caranya agar liburan tetap seru tanpa menguras kantong? Simak tips berikut ini.",
    image: "/assets/candi-prambanan.jpeg",
    category: "Tips Liburan",
    date: "12 Okt 2023",
    slug: "tips-liburan-hemat-yogyakarta"
  },
  {
    title: "Mengenal Sejarah Kraton Yogyakarta Lebih Dekat",
    excerpt: "Kraton Yogyakarta bukan sekadar tempat tinggal sultan, melainkan pusat kebudayaan Jawa yang menyimpan banyak cerita sejarah yang patut kita pelajari.",
    image: "/assets/kraton-yogyakarta.webp",
    category: "Budaya",
    date: "28 Sep 2023",
    slug: "sejarah-kraton-yogyakarta"
  },
  {
    title: "Rekomendasi Kuliner Malam di Sepanjang Jalan Malioboro",
    excerpt: "Jalan-jalan di Malioboro kurang lengkap rasanya jika belum mencoba kuliner malamnya. Dari angkringan hingga kopi joss, ini rekomendasinya.",
    image: "/assets/malioboro.webp",
    category: "Kuliner",
    date: "15 Sep 2023",
    slug: "rekomendasi-kuliner-malam-malioboro"
  },
  {
    title: "Keindahan Sunset di Candi Borobudur yang Menakjubkan",
    excerpt: "Menyaksikan matahari terbit dan terbenam di kawasan Candi Borobudur adalah pengalaman spiritual dan visual yang tidak boleh Anda lewatkan.",
    image: "/assets/candi-borobudur.jpeg",
    category: "Destinasi",
    date: "05 Sep 2023",
    slug: "keindahan-sunset-candi-borobudur"
  },
  {
    title: "Panduan Sewa Mobil Lepas Kunci di Yogyakarta",
    excerpt: "Ingin liburan lebih fleksibel? Menyewa mobil lepas kunci bisa jadi pilihan tepat. Pahami syarat dan tipsnya sebelum Anda memutuskan untuk menyewa.",
    image: "/assets/innova.png",
    category: "Panduan",
    date: "22 Agu 2023",
    slug: "panduan-sewa-mobil-lepas-kunci"
  },
  {
    title: "Pesona Pantai Parangtritis di Kala Senja",
    excerpt: "Pantai Parangtritis selalu punya daya magis tersendiri, terutama saat senja tiba. Ketahui waktu terbaik untuk berkunjung ke mari.",
    image: "/assets/pantai-parangtritis.webp",
    category: "Destinasi",
    date: "10 Agu 2023",
    slug: "pesona-pantai-parangtritis"
  }
];

export default function BlogPage() {
  return (
    <main>
      <section className={styles.blogHero}>
        <span className="section-subtitle" data-scroll="fade-up">
          Artikel &amp; Berita
        </span>
        <h1 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
          Blog TS Group Tour &amp; Travel
        </h1>
        <p
          className="section-description"
          data-scroll="fade-up"
          data-scroll-delay="200"
        >
          Temukan berbagai tips perjalanan, rekomendasi destinasi wisata terbaru, 
          hingga informasi menarik seputar liburan di Yogyakarta dan sekitarnya.
        </p>
      </section>

      <section className={styles.blogContainer}>
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <article className={styles.blogCard} key={index} data-scroll="fade-up" data-scroll-delay={index * 100}>
              <Link href={`/blog/${post.slug}`} className={styles.blogImage}>
                <img src={post.image} alt={post.title} />
              </Link>
              <div className={styles.blogBody}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogCategory}>{post.category}</span>
                  <span className={styles.blogDate}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                    </svg>
                    {post.date}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                </Link>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.blogReadMore}>
                  Baca Selengkapnya
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
