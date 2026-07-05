import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
  SITE,
  SOCIAL_LINKS,
  WHATSAPP_ICON_640,
  WHATSAPP_URL,
} from "@/lib/site";

const galleryThumbs = [
  { src: "/assets/goapindul-gambar.png", alt: "Goa Pindul" },
  { src: "/assets/parangtritis-gambar.png", alt: "Pantai Parangtritis" },
  { src: "/assets/prambanan-gambar.png", alt: "Candi Prambanan" },
  { src: "/assets/merapilava-gambar.png", alt: "Merapi Lava Tour" },
  { src: "/assets/borobudur-gambar.png", alt: "Candi Borobudur" },
  { src: "/assets/heha-gambar.png", alt: "HeHa Ocean View" },
  { src: "/assets/tugu-jogja.jpg", alt: "Tugu Yogyakarta" },
  { src: "/assets/kraton-yogyakarta.webp", alt: "Keraton Yogyakarta" },
];

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <div className={styles.footerLogo}>
              <Image
                src="/assets/footer-logo-tsgroup.svg"
                alt="TS Group Logo"
                width={203}
                height={49}
                unoptimized
              />
            </div>
            <p className={styles.footerDesc}>
              Dengan komitmen untuk memberikan kepuasan kepada pelanggan, TS
              Group turut menghadirkan beragam paket wisata menarik yang
              memungkinkan Anda menikmati keindahan Jogja dan sekitarnya.
            </p>
            <p className={styles.footerSocialTitle}>Sosial Media Kami</p>
            <div className={styles.footerSocialIcons}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d={WHATSAPP_ICON_640} />
                </svg>
              </a>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={social.label}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.footerTopRight}>
            <div className={styles.footerContact}>
              <p className={styles.footerSectionTitle}>Kontak Kami</p>
              <p className={styles.contactLabel}>Alamat</p>
              <p className={styles.contactValue}>{SITE.address}</p>
              <div className={styles.footerContactTelp}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactGroup}
                >
                  <span className={styles.socialIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                      <path d={WHATSAPP_ICON_640} />
                    </svg>
                  </span>
                  <span className={styles.contactNumber}>{SITE.phone}</span>
                </a>
                <a href={`tel:+62${SITE.phone.slice(1)}`} className={styles.contactGroup}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className={styles.contactNumber}>{SITE.phone}</span>
                </a>
              </div>
              <p className={styles.contactLabel}>Email</p>
              <p className={styles.contactValue}>{SITE.email}</p>
            </div>
            <div className={styles.footerGallery}>
              <p className={styles.footerSectionTitle}>Galeri Terbaru</p>
              <div className={styles.footerGalleryGrid}>
                {galleryThumbs.map((thumb) => (
                  <Link href="/galeri" className={styles.galleryThumb} key={thumb.alt}>
                    <Image src={thumb.src} alt={thumb.alt} width={150} height={150} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLine}></div>
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            Copyright © 2026 TS Group. All rights reserved. Developed with ❤️ by ModernWeb.
          </p>
        </div>
      </footer>
    </div>
  );
}
