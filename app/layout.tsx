import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";
import ScrollAnimations from "@/components/ScrollAnimations/ScrollAnimations";
import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import FAB from "@/components/FAB/FAB";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} - Rental Mobil & Paket Wisata Jogja`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <ScrollAnimations />
        <div className="grid-wrap">
          <div className="grid-bg"></div>
        </div>
        <TopBar />
        <Navbar />
        {children}
        <CTA />
        <FAB />
        <Footer />
      </body>
    </html>
  );
}
