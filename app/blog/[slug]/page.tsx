import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./BlogPost.module.css";
import blogStyles from "../Blog.module.css";
import { blogPosts, getPostBySlug } from "@/app/data/blog";

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

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel Tidak Ditemukan" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <article className={styles.article}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="/blog">Blog</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{post.title}</span>
        </nav>

        <header className={styles.articleHeader}>
          <div className={styles.articleMeta}>
            <span className={styles.articleCategory}>{post.category}</span>
            <span className={styles.articleDate}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
              </svg>
              {post.date}
            </span>
            <span className={styles.articleDate}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              {post.readingTime} baca
            </span>
          </div>
          <h1 className={styles.articleTitle}>{post.title}</h1>
        </header>

        <div className={styles.articleImage}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55rem"
          />
        </div>

        <div className={styles.articleContent}>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* Kartu memakai kelas Blog.module.css agar identik dengan
          section "Semua Artikel" di halaman blog. */}
      <section className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>Artikel Lainnya</h2>
        <div className={blogStyles.blogGrid} data-scroll-gsap>
          {relatedPosts.map((related) => (
            <article
              className={blogStyles.blogCard}
              key={related.slug}
              data-scroll-child
            >
              <Link href={`/blog/${related.slug}`} className={blogStyles.blogImage}>
                <Image
                  src={related.image}
                  alt={related.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>
              <div className={blogStyles.blogBody}>
                <span
                  className={`${blogStyles.categoryPill} ${blogStyles.categoryPillOutline}`}
                >
                  {related.category}
                </span>
                <Link href={`/blog/${related.slug}`}>
                  <h3 className={blogStyles.blogTitle}>{related.title}</h3>
                </Link>
                <p className={blogStyles.blogExcerpt}>{related.excerpt}</p>
                <div className={blogStyles.blogCardFooter}>
                  <div className={blogStyles.featuredMeta}>
                    <span className={blogStyles.metaItem}>
                      <CalendarIcon />
                      {related.date}
                    </span>
                    <span className={blogStyles.metaDot} aria-hidden="true" />
                    <span className={blogStyles.metaItem}>{related.readingTime}</span>
                  </div>
                  <Link
                    href={`/blog/${related.slug}`}
                    className={blogStyles.blogReadMore}
                  >
                    Baca Selengkapnya
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
