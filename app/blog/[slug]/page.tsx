export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="introduction-section" id="blog-post">
      <div className="introduction-left">
        <span className="section-subtitle">Blog</span>
        <h1 className="section-title">{slug}</h1>
        <div className="description">
          <p>
            Halaman ini sedang dalam pengembangan. Silakan kembali lagi nanti.
          </p>
        </div>
      </div>
    </section>
  );
}
