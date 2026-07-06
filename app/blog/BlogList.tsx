"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";
import { blogPosts } from "@/app/data/blog";

const ITEMS_PER_PAGE = 3;

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
      fill="none"
    />
  </svg>
);

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef<HTMLDivElement>(null);

  const [featuredPost, ...otherPosts] = blogPosts;
  const latestPosts = otherPosts.slice(0, 4);

  const totalPages = Math.ceil(otherPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = otherPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      {/* Featured + Artikel Terbaru (layout mengikuti referensi) */}
      <div className={styles.topArea}>
        <Link
          href={`/blog/${featuredPost.slug}`}
          className={styles.featuredCard}
          data-scroll="zoom-in"
        >
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          {/* Overlay gradasi (bukan blur) agar teks terbaca */}
          <div className={styles.featuredOverlay} aria-hidden="true" />
          <div className={styles.featuredContent}>
            <span className={styles.categoryPill}>{featuredPost.category}</span>
            <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
            <div className={styles.featuredMeta}>
              <span className={styles.metaItem}>
                <CalendarIcon />
                {featuredPost.date}
              </span>
              <span className={styles.metaDot} aria-hidden="true" />
              <span className={styles.metaItem}>{featuredPost.readingTime} baca</span>
            </div>
          </div>
        </Link>

        <aside className={styles.latestAside} data-scroll="fade-left">
          <h2 className={styles.asideTitle}>Artikel Terbaru</h2>
          <div className={styles.latestList}>
            {latestPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                className={styles.latestItem}
                key={post.slug}
              >
                <div className={styles.latestThumb}>
                  <Image src={post.image} alt={post.title} fill sizes="90px" />
                </div>
                <div className={styles.latestInfo}>
                  <span className={styles.latestTitle}>{post.title}</span>
                  <span className={styles.latestMeta}>
                    {post.date} &nbsp;•&nbsp; {post.readingTime} baca
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      {/* Semua artikel + pagination (pola sama dengan destinasi wisata) */}
      <div className={styles.gridHeading} ref={gridTopRef}>
        <h2>Semua Artikel</h2>
      </div>

      <div className={styles.blogGrid} data-scroll-gsap key={currentPage}>
        {paginatedPosts.map((post) => (
          <article className={styles.blogCard} key={post.slug} data-scroll-child>
            <Link href={`/blog/${post.slug}`} className={styles.blogImage}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Link>
            <div className={styles.blogBody}>
              <span className={`${styles.categoryPill} ${styles.categoryPillOutline}`}>
                {post.category}
              </span>
              <Link href={`/blog/${post.slug}`}>
                <h3 className={styles.blogTitle}>{post.title}</h3>
              </Link>
              <p className={styles.blogExcerpt}>{post.excerpt}</p>
              <div className={styles.blogCardFooter}>
                <div className={styles.featuredMeta}>
                  <span className={styles.metaItem}>
                    <CalendarIcon />
                    {post.date}
                  </span>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span className={styles.metaItem}>{post.readingTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className={styles.blogReadMore}>
                  Baca Selengkapnya
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="pagination" aria-label="Navigasi halaman blog">
          <button
            className="page-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Halaman sebelumnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-btn ${page === currentPage ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
              aria-label={`Halaman ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ))}
          <button
            className="page-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Halaman berikutnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </nav>
      )}
    </>
  );
}
