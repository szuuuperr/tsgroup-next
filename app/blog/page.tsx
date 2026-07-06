import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";
import { blogPosts } from "@/app/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips perjalanan, rekomendasi destinasi wisata, dan informasi menarik seputar liburan di Yogyakarta dari TS Group Tour & Travel.",
};

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

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
        {/* Artikel Unggulan */}
        <article className={styles.featuredCard} data-scroll="zoom-in">
          <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredImage}>
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
            <span className={styles.featuredBadge}>Artikel Unggulan</span>
          </Link>
          <div className={styles.featuredBody}>
            <div className={styles.blogMeta}>
              <span className={styles.blogCategory}>{featuredPost.category}</span>
              <span className={styles.blogDate}>
                <CalendarIcon />
                {featuredPost.date}
              </span>
            </div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
            </Link>
            <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
            <Link href={`/blog/${featuredPost.slug}`} className={styles.blogReadMore}>
              Baca Selengkapnya
              <ArrowIcon />
            </Link>
          </div>
        </article>

        <div className={styles.blogGrid}>
          {otherPosts.map((post, index) => (
            <article
              className={styles.blogCard}
              key={post.slug}
              data-scroll="fade-up"
              data-scroll-delay={(index % 3) * 100 + 100}
            >
              <Link href={`/blog/${post.slug}`} className={styles.blogImage}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>
              <div className={styles.blogBody}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogCategory}>{post.category}</span>
                  <span className={styles.blogDate}>
                    <CalendarIcon />
                    {post.date}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                </Link>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.blogReadMore}>
                  Baca Selengkapnya
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>
    </main>
  );
}
