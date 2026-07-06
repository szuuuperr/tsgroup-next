import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Profil.module.css";
import blogStyles from "../blog/Blog.module.css";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Profil",
  description:
    "Kenali TS Group Tour & Travel lebih dekat - penyedia layanan rental mobil dan paket wisata terpercaya di Yogyakarta sejak 2010.",
};

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const stats = [
  { value: "14+", label: "Tahun Pengalaman" },
  { value: "5.000+", label: "Pelanggan Puas" },
  { value: "8+", label: "Pilihan Armada" },
  { value: "30+", label: "Destinasi Wisata" },
];

const values = [
  {
    title: "Amanah & Terpercaya",
    description:
      "Setiap perjalanan kami tangani dengan penuh tanggung jawab, dari awal hingga Anda kembali dengan selamat.",
  },
  {
    title: "Armada Terawat",
    description:
      "Kendaraan dirawat rutin dan selalu dalam kondisi prima. Kebersihan kabin diperiksa sebelum berangkat.",
  },
  {
    title: "Sopir Berpengalaman",
    description:
      "Ramah, memahami rute terbaik di Yogyakarta, dan siap menjadi teman perjalanan yang menyenangkan.",
  },
  {
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Harga jelas sejak awal sehingga anggaran liburan bisa direncanakan dengan tenang.",
  },
];

const services = [
  {
    title: "Paket Wisata",
    href: "/paket-wisata",
    image: "/assets/destination/candi-prambanan.webp",
    description:
      "Beragam paket tour Jogja yang sudah termasuk mobil, sopir, dan BBM. Tinggal berangkat, semua kami atur.",
  },
  {
    title: "Rental Mobil",
    href: "/rental-mobil",
    image: "/assets/destination/gunung-merapi.webp",
    description:
      "Sewa mobil dengan sopir maupun lepas kunci. Tersedia city car hingga Hiace untuk rombongan besar.",
  },
  {
    title: "Destinasi Wisata",
    href: "/destinasi-wisata",
    image: "/assets/destination/wisata-jogja.webp",
    description:
      "Rekomendasi destinasi terbaik di Yogyakarta dan sekitarnya, lengkap dengan peta dan tips berwisata.",
  },
];

export default function ProfilPage() {
  return (
    <main>
      {/* Pembuka: header + banner foto + deretan angka */}
      <section className="content-section" id="profil">
        <div className="content-container">
          <span className="section-subtitle" data-scroll="fade-up">
            Tentang Kami
          </span>
          <h1 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            TS Group Tour &amp; Travel
          </h1>
          <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
            Penyedia layanan rental mobil dan paket wisata yang berbasis di
            Sleman, Yogyakarta. Berawal dari usaha rental kecil pada tahun
            2010, kini kami menemani ribuan wisatawan menjelajahi Jogja setiap
            tahunnya.
          </p>

          <div className={styles.banner} data-scroll="zoom-in">
            <Image
              src="/assets/destination/tugu-jogja.webp"
              alt="Tim TS Group Tour & Travel"
              fill
              sizes="100vw"
              priority
            />
            <span className={styles.bannerPill}>Sleman, Yogyakarta</span>
          </div>

          <div className={styles.statsBand} data-scroll-parent>
            {stats.map((stat) => (
              <div className={styles.stat} data-scroll-child key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cerita, visi, misi, nilai: baris editorial label kiri + isi kanan */}
      <section className="content-section" id="cerita">
        <div className={styles.rows}>
          <div className={styles.row} data-scroll="fade-up">
            <span className={styles.rowLabel}>Cerita Kami</span>
            <div className={styles.rowBody}>
              <p>
                TS Group berdiri dari garasi kecil di Sleman dengan satu mobil
                dan keyakinan sederhana: tamu yang dilayani dengan tulus akan
                kembali lagi. Dari mulut ke mulut, satu mobil bertambah menjadi
                delapan, dan rental kecil itu tumbuh menjadi biro perjalanan.
              </p>
              <p>
                Sampai hari ini cara kerja kami tidak berubah. Nomor WhatsApp
                dijawab orang yang sama yang menyiapkan mobil Anda, dan sopir
                kami adalah orang-orang yang benar-benar tinggal dan besar di
                Jogja.
              </p>
            </div>
          </div>

          <div className={styles.row} id="visi-misi" data-scroll="fade-up">
            <span className={styles.rowLabel}>Visi</span>
            <div className={styles.rowBody}>
              <p>
                Menjadi perusahaan tour &amp; travel terpercaya di Yogyakarta
                yang menghadirkan pengalaman perjalanan berkesan, aman, dan
                terjangkau bagi setiap pelanggan.
              </p>
            </div>
          </div>

          <div className={styles.row} data-scroll="fade-up">
            <span className={styles.rowLabel}>Misi</span>
            <div className={styles.rowBody}>
              <ul className={styles.misiList}>
                <li>Memberikan pelayanan yang ramah, cepat, dan profesional.</li>
                <li>Menyediakan armada yang bersih, nyaman, dan terawat.</li>
                <li>Menawarkan harga kompetitif tanpa mengurangi kualitas.</li>
                <li>Mengangkat potensi wisata Yogyakarta dan sekitarnya.</li>
              </ul>
            </div>
          </div>

          <div className={styles.row} id="nilai-kami" data-scroll="fade-up">
            <span className={styles.rowLabel}>Nilai Kami</span>
            <div className={`${styles.rowBody} ${styles.valuesGrid}`}>
              {values.map((value, index) => (
                <div className={styles.valueItem} key={value.title}>
                  <span className={styles.valueNum}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={styles.valueTitle}>{value.title}</h3>
                    <p className={styles.valueDesc}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="content-section" id="layanan">
        <div className="content-container">
          <span className="section-subtitle" data-scroll="fade-up">
            Layanan Kami
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Apa yang Kami Tawarkan
          </h2>
          <div className={blogStyles.blogGrid} data-scroll-parent>
            {services.map((service) => (
              <article
                className={blogStyles.blogCard}
                data-scroll-child
                key={service.title}
              >
                <Link href={service.href} className={blogStyles.blogImage}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
                <div className={blogStyles.blogBody}>
                  <Link href={service.href}>
                    <h3 className={blogStyles.blogTitle}>{service.title}</h3>
                  </Link>
                  <p className={blogStyles.blogExcerpt}>{service.description}</p>
                  <div className={blogStyles.blogCardFooter}>
                    <Link href={service.href} className={blogStyles.blogReadMore}>
                      Selengkapnya
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a
            href={waLink(`Halo ${SITE.shortName}, saya ingin bertanya tentang layanan Anda`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-secondary"
            data-scroll="fade-up"
          >
            Konsultasi Gratis
          </a>
        </div>
      </section>
    </main>
  );
}
