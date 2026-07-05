import type { Metadata } from "next";
import styles from "./Kontak.module.css";
import KontakForm from "./KontakForm";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi TS Group Tour & Travel untuk pemesanan rental mobil dan paket wisata di Yogyakarta. Kami siap membantu merencanakan perjalanan Anda.",
};

const contactItems = [
  {
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: WHATSAPP_URL,
    note: "Respon cepat, setiap hari 07.00-21.00 WIB",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z",
  },
  {
    label: "Telepon",
    value: SITE.phoneDisplay,
    href: `tel:+62${SITE.phone.slice(1)}`,
    note: "Untuk pemesanan dan informasi layanan",
    icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Untuk kerja sama dan pertanyaan umum",
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
  {
    label: "Alamat",
    value: "Tridadi, Sleman, Yogyakarta",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`,
    note: SITE.address,
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  },
];

export default function KontakPage() {
  return (
    <main>
      <section className="content-section" id="kontak">
        <div className="content-container">
          <span className="section-subtitle" data-scroll="fade-up">
            Hubungi Kami
          </span>
          <h1 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Kami Siap Membantu Anda
          </h1>
          <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
            Punya pertanyaan seputar paket wisata atau rental mobil? Hubungi
            kami melalui salah satu kanal di bawah ini, atau kirim pesan
            langsung melalui formulir - tim kami akan segera merespons.
          </p>

          <div className={styles.contactGrid} data-scroll-parent>
            {contactItems.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
                data-scroll-child
                key={item.label}
              >
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d={item.icon} />
                  </svg>
                </div>
                <span className={styles.contactLabel}>{item.label}</span>
                <span className={styles.contactValue}>{item.value}</span>
                <span className={styles.contactNote}>{item.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formSection} id="form-kontak">
        <div className={styles.formWrapper} data-scroll="fade-right">
          <h2 className={styles.formTitle}>Kirim Pesan</h2>
          <p className={styles.formSubtitle}>
            Isi formulir berikut dan pesan Anda akan kami terima melalui
            WhatsApp.
          </p>
          <KontakForm />
        </div>
        <div className={styles.mapWrapper} data-scroll="fade-left">
          <h2 className={styles.formTitle}>Lokasi Kami</h2>
          <p className={styles.formSubtitle}>{SITE.address}</p>
          <iframe
            title="Lokasi TS Group Tour & Travel"
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
            className={styles.mapFrame}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
