"use client";

import "./globals.css";
import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import TopBar from ".././components/TopBar/TopBar";
import Navbar from ".././components/Navbar/Navbar";
import CTA from ".././components/CTA/CTA";
import Footer from ".././components/Footer/Footer";
import FAB from ".././components/FAB/FAB";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll animations (IntersectionObserver)
    const scrollElements = document.querySelectorAll(
      "[data-scroll], [data-scroll-parent]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    scrollElements.forEach((el) => observer.observe(el));

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="TS Group Tour & Travel - Layanan rental mobil dan paket wisata terbaik di Yogyakarta. Armada nyaman, harga terjangkau, sopir berpengalaman."
        />
        <title>TS Group Tour &amp; Travel - Rental Mobil &amp; Paket Wisata Jogja</title>
      </head>
      <body>
        <div className="grid-wrap">
          <div className="grid-bg"></div>
        </div>
        <TopBar />
        <Navbar />
        <Script src="https://unpkg.com/lenis@1.3.23/dist/lenis.min.js" />
        {children}
        <CTA />
        <FAB />
        <Footer />
      </body>
    </html>
  );
}
