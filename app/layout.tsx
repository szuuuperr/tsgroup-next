import type { Metadata } from "next";
import { Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import ScrollAnimations from "@/components/ScrollAnimations/ScrollAnimations";
import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import FAB from "@/components/FAB/FAB";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
  display: "swap",
});

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
    <html lang="id" className={`${inter.variable} ${kaushan.variable}`}>
      <body>
        <ScrollAnimations />
        <div className="grid-wrap">
          <div className="grid-bg"></div>
        </div>
        <Navbar />
        <div className="wrapper">
          {children}
          <CTA />
        </div>
        <FAB />
        <Footer />
      </body>
    </html>
  );
}
