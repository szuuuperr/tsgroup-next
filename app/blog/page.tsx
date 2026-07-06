import type { Metadata } from "next";
import styles from "./Blog.module.css";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips perjalanan, rekomendasi destinasi wisata, dan informasi menarik seputar liburan di Yogyakarta dari TS Group Tour & Travel.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="content-section" id="blog-section">
        <div className={styles.blogContainer}>
          <div className={styles.blogHero}>
            <span className="section-subtitle" data-scroll="fade-up">
              Artikel &amp; Berita
            </span>
            <h1 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
              Blog TS Group Tour &amp; Travel
            </h1>
            <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
              Temukan berbagai tips perjalanan, rekomendasi destinasi wisata terbaru,
              hingga informasi menarik seputar liburan di Yogyakarta dan sekitarnya.
            </p>
          </div>
          <BlogList />
        </div>
      </section>
    </main>
  );
}
