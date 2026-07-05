import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Profil.module.css";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Profil",
  description:
    "Kenali TS Group Tour & Travel lebih dekat - penyedia layanan rental mobil dan paket wisata terpercaya di Yogyakarta sejak 2010.",
};

const stats = [
  { value: "14+", label: "Tahun Pengalaman" },
  { value: "5.000+", label: "Pelanggan Puas" },
  { value: "8+", label: "Pilihan Armada" },
  { value: "30+", label: "Destinasi Wisata" },
];

const values = [
  {
    title: "Amanah & Terpercaya",
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
    description:
      "Kepercayaan pelanggan adalah prioritas utama. Setiap perjalanan kami tangani dengan penuh tanggung jawab, dari awal hingga Anda kembali dengan selamat.",
  },
  {
    title: "Armada Terawat",
    icon: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
    description:
      "Seluruh kendaraan dirawat secara rutin dan selalu dalam kondisi prima. Kebersihan kabin dan kenyamanan penumpang selalu kami periksa sebelum berangkat.",
  },
  {
    title: "Sopir Berpengalaman",
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    description:
      "Sopir kami ramah, memahami rute terbaik di Yogyakarta dan sekitarnya, serta siap menjadi teman perjalanan yang menyenangkan bagi keluarga Anda.",
  },
  {
    title: "Harga Transparan",
    icon: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
    description:
      "Tidak ada biaya tersembunyi. Harga yang kami tawarkan sudah jelas sejak awal, sehingga Anda bisa merencanakan anggaran liburan dengan tenang.",
  },
];

const services = [
  {
    title: "Paket Wisata",
    href: "/paket-wisata",
    image: "/assets/paket-1.png",
    description:
      "Beragam paket tour Jogja yang sudah termasuk mobil, sopir, dan BBM. Tinggal berangkat, semua kami atur.",
  },
  {
    title: "Rental Mobil",
    href: "/rental-mobil",
    image: "/assets/gambar-mobil.jpg",
    description:
      "Sewa mobil dengan sopir maupun lepas kunci. Tersedia city car hingga Hiace untuk rombongan besar.",
  },
  {
    title: "Destinasi Wisata",
    href: "/destinasi-wisata",
    image: "/assets/borobudur-gambar.png",
    description:
      "Rekomendasi destinasi terbaik di Yogyakarta dan sekitarnya, lengkap dengan peta dan tips berwisata.",
  },
];

export default function ProfilPage() {
  return (
    <main>
      {/* Tentang Kami */}
      <section className={styles.aboutSection} id="profil">
        <div className={styles.aboutLeft} data-scroll="zoom-in">
          <Image
            src="/assets/introduction-image.png"
            alt="Tim TS Group Tour & Travel"
            width={720}
            height={720}
            className={styles.aboutImage}
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        </div>
        <div className={styles.aboutRight}>
          <span className="section-subtitle" data-scroll="fade-up">
            Tentang Kami
          </span>
          <h1 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            TS Group Tour &amp; Travel
          </h1>
          <div className={styles.aboutDescription} data-scroll="fade-up" data-scroll-delay="200">
            <p>
              TS Group Tour &amp; Travel adalah penyedia layanan rental mobil
              dan paket wisata yang berbasis di Sleman, Yogyakarta. Berawal dari
              usaha rental kecil pada tahun 2010, kini kami telah melayani
              ribuan wisatawan yang ingin menjelajahi pesona Jogja dan
              sekitarnya.
            </p>
            <p>
              Dengan komitmen memberikan kepuasan kepada pelanggan, kami
              menghadirkan beragam paket wisata menarik serta layanan penyewaan
              mobil lepas kunci maupun dengan sopir. Armada yang terawat dan
              sopir yang berpengalaman siap menjadikan setiap perjalanan Anda
              pengalaman yang luar biasa.
            </p>
          </div>
          <div className={styles.statsGrid} data-scroll-parent>
            {stats.map((stat) => (
              <div className={styles.statItem} data-scroll-child key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="content-section" id="visi-misi">
        <div className="content-container">
          <span className="section-subtitle" data-scroll="fade-up">
            Visi &amp; Misi
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Arah &amp; Tujuan Kami
          </h2>
          <div className={styles.visiMisiGrid} data-scroll-parent>
            <div className={styles.visiMisiCard} data-scroll-child>
              <h3 className={styles.visiMisiTitle}>Visi</h3>
              <p className={styles.visiMisiText}>
                Menjadi perusahaan tour &amp; travel terpercaya di Yogyakarta
                yang menghadirkan pengalaman perjalanan berkesan, aman, dan
                terjangkau bagi setiap pelanggan.
              </p>
            </div>
            <div className={styles.visiMisiCard} data-scroll-child>
              <h3 className={styles.visiMisiTitle}>Misi</h3>
              <ul className={styles.visiMisiList}>
                <li>Memberikan pelayanan yang ramah, cepat, dan profesional.</li>
                <li>Menyediakan armada yang bersih, nyaman, dan terawat.</li>
                <li>Menawarkan harga kompetitif tanpa mengurangi kualitas.</li>
                <li>Mengangkat potensi wisata Yogyakarta dan sekitarnya.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Kami */}
      <section className="content-section" id="nilai-kami">
        <div className="content-container">
          <span className="section-subtitle" data-scroll="fade-up">
            Nilai Kami
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Yang Kami Pegang Teguh
          </h2>
          <div className={styles.valuesGrid} data-scroll-parent>
            {values.map((value) => (
              <div className={styles.valueCard} data-scroll-child key={value.title}>
                <div className={styles.valueIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d={value.icon} />
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan Kami */}
      <section className="content-section" id="layanan">
        <div className="content-container">
          <span className="section-subtitle" data-scroll="fade-up">
            Layanan Kami
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Apa yang Kami Tawarkan
          </h2>
          <div className={styles.servicesGrid} data-scroll-parent>
            {services.map((service) => (
              <Link
                href={service.href}
                className={styles.serviceCard}
                data-scroll-child
                key={service.title}
              >
                <div className={styles.serviceImage}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  <span className={styles.serviceLink}>
                    Selengkapnya
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
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
