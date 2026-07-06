import Link from "next/link";
import styles from "./Destination.module.css";
import CircularGallery from "../../components/CircularGallery/CircularGallery";

export default function Destination() {
  return (
    <section className={styles.destinationSection} id="destination">
      <div className={styles.destinationContainer}>
        <span className="section-subtitle" data-scroll="fade-up">
          Pilihan Destinasi
        </span>
        <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
          Destinasi Wisata Pilihan
        </h2>
        <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
          Yogyakarta menyimpan kekayaan destinasi wisata yang sayang untuk
          dilewatkan, mulai dari pesona alam yang memukau, warisan situs
          bersejarah, hingga tempat-tempat wisata kekinian yang selalu ramai
          dikunjungi.
        </p>

        <div className={styles.galleryWrapper}>
          <CircularGallery
            items={[
              { image: "/assets/heha-gambar.png", text: "HeHa Ocean View" },
              {
                image: "/assets/borobudur-gambar.png",
                text: "Candi Borobudur",
              },
              {
                image: "/assets/merapilava-gambar.png",
                text: "Merapi Lava Tour",
              },
              {
                image: "/assets/prambanan-gambar.png",
                text: "Candi Prambanan",
              },
              {
                image: "/assets/parangtritis-gambar.png",
                text: "Pantai Parangtritis",
              },
              { image: "/assets/goapindul-gambar.png", text: "Goa Pindul" },
            ]}
            bend={1.2}
            textColor="#110b66"
            borderRadius={0.08}
            font="bold 30px var(--font-inter)"
          />
        </div>

        <Link
          href="/destinasi-wisata"
          className={`btn-outline-secondary ${styles.moreLink}`}
          data-scroll="fade-up"
        >
          Lihat Semua Destinasi
        </Link>
      </div>
    </section>
  );
}
