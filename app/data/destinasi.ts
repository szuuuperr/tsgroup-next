export type DestinasiCategory = "semua" | "alam" | "budaya" | "pantai" | "kekinian";

export interface Destinasi {
  id: string;
  name: string;
  image: string;
  category: DestinasiCategory[];
  location: string;
  description: string;
  highlight: string;
  rating: number;
  reviewCount: number;
}

export const destinations: Destinasi[] = [
  {
    id: "borobudur",
    name: "Candi Borobudur",
    image: "/assets/borobudur-gambar.png",
    category: ["budaya"],
    location: "Magelang, Jawa Tengah",
    description:
      "Candi Buddha terbesar di dunia yang merupakan Warisan Dunia UNESCO. Nikmati keindahan sunrise yang memukau dari puncak candi dengan pemandangan Gunung Merapi dan Merbabu.",
    highlight: "Warisan Dunia UNESCO",
    rating: 4.8,
    reviewCount: 12500,
  },
  {
    id: "prambanan",
    name: "Candi Prambanan",
    image: "/assets/prambanan-gambar.png",
    category: ["budaya"],
    location: "Sleman, Yogyakarta",
    description:
      "Kompleks candi Hindu terbesar di Indonesia, didedikasikan untuk Trimurti. Saksikan pertunjukan Ramayana Ballet yang spektakuler pada malam hari dengan candi sebagai latar belakang.",
    highlight: "Ramayana Ballet",
    rating: 4.7,
    reviewCount: 9800,
  },
  {
    id: "merapi",
    name: "Merapi Lava Tour",
    image: "/assets/merapilava-gambar.png",
    category: ["alam"],
    location: "Sleman, Yogyakarta",
    description:
      "Petualangan menegangkan menyusuri jalur lava Gunung Merapi dengan jeep. Kunjungi sisa-sisa erupsi, museum mini, dan nikmati pemandangan gunung berapi paling aktif di Indonesia.",
    highlight: "Jeep Adventure",
    rating: 4.6,
    reviewCount: 7200,
  },
  {
    id: "parangtritis",
    name: "Pantai Parangtritis",
    image: "/assets/parangtritis-gambar.png",
    category: ["pantai"],
    location: "Bantul, Yogyakarta",
    description:
      "Pantai legendaris di selatan Yogyakarta dengan pasir hitam dan ombak yang kuat. Nikmati sunset yang spektakuler, naik ATV di sepanjang pantai, atau bermain paralayang.",
    highlight: "Sunset Spektakuler",
    rating: 4.5,
    reviewCount: 8300,
  },
  {
    id: "heha",
    name: "HeHa Ocean View",
    image: "/assets/heha-gambar.png",
    category: ["kekinian"],
    location: "Gunungkidul, Yogyakarta",
    description:
      "Destinasi kekinian dengan spot foto instagramable dan pemandangan laut selatan yang menakjubkan. Dilengkapi berbagai fasilitas kuliner dan area selfie yang unik.",
    highlight: "Spot Foto Instagramable",
    rating: 4.4,
    reviewCount: 6100,
  },
  {
    id: "goapindul",
    name: "Goa Pindul",
    image: "/assets/goapindul-gambar.png",
    category: ["alam"],
    location: "Gunungkidul, Yogyakarta",
    description:
      "Cave tubing di goa alam dengan stalaktit dan stalagmit yang indah. Nikmati sensasi menyusuri sungai bawah tanah dengan ban karet sambil menikmati keindahan formasi batu.",
    highlight: "Cave Tubing",
    rating: 4.6,
    reviewCount: 5400,
  },
  {
    id: "kraton",
    name: "Keraton Yogyakarta",
    image: "/assets/kraton-yogyakarta.webp",
    category: ["budaya"],
    location: "Kota Yogyakarta",
    description:
      "Istana resmi Kesultanan Ngayogyakarta Hadiningrat yang masih berfungsi hingga saat ini. Jelajahi arsitektur Jawa klasik, koleksi pusaka, dan saksikan pertunjukan budaya tradisional.",
    highlight: "Istana Bersejarah",
    rating: 4.5,
    reviewCount: 6800,
  },
  {
    id: "tugu",
    name: "Tugu Yogyakarta",
    image: "/assets/tugu-jogja.jpg",
    category: ["budaya"],
    location: "Kota Yogyakarta",
    description:
      "Landmark ikonik Yogyakarta yang menjadi simbol perjuangan rakyat. Berdiri megah di persimpangan jalan utama, Tugu ini menyimpan sejarah dan filosofi mendalam tentang kota Jogja.",
    highlight: "Landmark Ikonik",
    rating: 4.3,
    reviewCount: 5200,
  },
  {
    id: "malioboro",
    name: "Jalan Malioboro",
    image: "/assets/candi-borobudur.jpeg",
    category: ["kekinian", "budaya"],
    location: "Kota Yogyakarta",
    description:
      "Jalan paling terkenal di Yogyakarta yang menjadi pusat perbelanjaan dan kuliner. Temukan beragam batik, kerajinan tangan, dan jajanan khas Jogja sepanjang jalan ini.",
    highlight: "Pusat Kuliner & Belanja",
    rating: 4.6,
    reviewCount: 11200,
  },
];

export const destinasiCategories: { key: DestinasiCategory; label: string; icon: string }[] = [
  {
    key: "semua",
    label: "Semua",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    key: "alam",
    label: "Wisata Alam",
    icon: "M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z",
  },
  {
    key: "budaya",
    label: "Wisata Budaya",
    icon: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
  },
  {
    key: "pantai",
    label: "Wisata Pantai",
    icon: "M21 17c-1.66 0-2.86-1-3.77-2-1.19 1-2.57 2-4.23 2-1.66 0-2.86-1-3.77-2-.91 1-2.11 2-3.77 2-1.66 0-3.04-1-3.77-2-.29.37-.62.7-1.01 1L3 17.5c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1l.37-.59zM21 12c-1.66 0-2.86-1-3.77-2-1.19 1-2.57 2-4.23 2-1.66 0-2.86-1-3.77-2-.91 1-2.11 2-3.77 2-1.66 0-3.04-1-3.77-2-.29.37-.62.7-1.01 1L3 12.5c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1l.37-.59zM21 7c-1.66 0-2.86-1-3.77-2C16.04 6 14.66 7 13 7c-1.66 0-2.86-1-3.77-2-.91 1-2.11 2-3.77 2-1.66 0-3.04-1-3.77-2-.29.37-.62.7-1.01 1L3 7.5c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1c.63-.5 1.29-1 2.31-1s1.68.5 2.31 1l.37-.59z",
  },
  {
    key: "kekinian",
    label: "Wisata Kekinian",
    icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  },
];
