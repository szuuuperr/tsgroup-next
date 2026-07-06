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
    image: "/assets/Candi-Borobudur-Cover-261807757.webp",
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
    image: "/assets/destination/candi-prambanan-3.webp",
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
    image: "/assets/destination/gunung-merapi-2.webp",
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
    image: "/assets/destination/pantai-parangtritis.webp",
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
    image: "/assets/destination/heha-ocean-view.webp",
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
    image: "/assets/destination/goa-pindul.webp",
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
    image: "/assets/destination/malioboro.webp",
    category: ["kekinian", "budaya"],
    location: "Kota Yogyakarta",
    description:
      "Jalan paling terkenal di Yogyakarta yang menjadi pusat perbelanjaan dan kuliner. Temukan beragam batik, kerajinan tangan, dan jajanan khas Jogja sepanjang jalan ini.",
    highlight: "Pusat Kuliner & Belanja",
    rating: 4.6,
    reviewCount: 11200,
  },
  // ── Destinasi Baru ──────────────────────────────────────────
  {
    id: "tamansari",
    name: "Taman Sari",
    image: "/assets/destination/taman-sari.webp",
    category: ["budaya"],
    location: "Kota Yogyakarta",
    description:
      "Bekas taman kerajaan Kesultanan Yogyakarta yang dibangun pada abad ke-18. Kompleks ini memiliki kolam pemandian, lorong bawah tanah, dan arsitektur perpaduan Jawa dan Eropa yang memukau.",
    highlight: "Taman Kerajaan Bersejarah",
    rating: 4.5,
    reviewCount: 7600,
  },
  {
    id: "indrayanti",
    name: "Pantai Indrayanti",
    image: "/assets/destination/pantai-indrayanti.webp",
    category: ["pantai"],
    location: "Gunungkidul, Yogyakarta",
    description:
      "Pantai berpasir putih yang bersih dengan air laut biru jernih. Dilengkapi kafe-kafe tepi pantai yang nyaman untuk bersantai sambil menikmati pemandangan laut selatan yang menakjubkan.",
    highlight: "Pasir Putih & Kafe Tepi Pantai",
    rating: 4.6,
    reviewCount: 8900,
  },
  {
    id: "hutanpinus",
    name: "Hutan Pinus Mangunan",
    image: "/assets/destination/hutan-pinus-mangunan.webp",
    category: ["alam"],
    location: "Bantul, Yogyakarta",
    description:
      "Hutan pinus yang asri dengan udara sejuk di perbukitan Mangunan. Spot foto ikonik dengan ayunan di antara pepohonan pinus dan pemandangan perbukitan yang memanjakan mata.",
    highlight: "Spot Foto Ayunan Pinus",
    rating: 4.4,
    reviewCount: 6500,
  },
  {
    id: "ratuboko",
    name: "Candi Ratu Boko",
    image: "/assets/destination/candi-ratu-boko.webp",
    category: ["budaya"],
    location: "Sleman, Yogyakarta",
    description:
      "Situs arkeologi berupa reruntuhan istana di atas bukit dengan pemandangan sunset yang spektakuler. Terletak di dekat Candi Prambanan, tempat ini menawarkan panorama alam yang luar biasa.",
    highlight: "Sunset di Atas Bukit",
    rating: 4.5,
    reviewCount: 5800,
  },
  {
    id: "timang",
    name: "Pantai Timang",
    image: "/assets/destination/pantai-timang.webp",
    category: ["pantai"],
    location: "Gunungkidul, Yogyakarta",
    description:
      "Pantai eksotis dengan gondola tradisional yang menghubungkan daratan ke pulau karang. Sensasi menyeberangi lautan dengan gondola kayu menjadi pengalaman yang tak terlupakan.",
    highlight: "Gondola Tradisional",
    rating: 4.3,
    reviewCount: 4700,
  },
  {
    id: "kalibiru",
    name: "Kalibiru",
    image: "/assets/destination/kalibiru.webp",
    category: ["alam", "kekinian"],
    location: "Kulon Progo, Yogyakarta",
    description:
      "Wisata alam di perbukitan Menoreh dengan spot foto di atas pohon menghadap Waduk Sermo. Pemandangan perbukitan hijau dan waduk biru menjadi latar belakang foto yang menakjubkan.",
    highlight: "Foto di Atas Pohon",
    rating: 4.4,
    reviewCount: 5100,
  },
  {
    id: "goajomblang",
    name: "Goa Jomblang",
    image: "/assets/destination/goa-jomblang.webp",
    category: ["alam"],
    location: "Gunungkidul, Yogyakarta",
    description:
      "Goa vertikal dengan fenomena cahaya surga (heavenly light) yang menerobos masuk menyinari dasar goa. Petualangan menuruni goa sedalam 60 meter menjadi pengalaman yang mendebarkan.",
    highlight: "Cahaya Surga",
    rating: 4.7,
    reviewCount: 6200,
  },
  {
    id: "hehaskyview",
    name: "HeHa Sky View",
    image: "/assets/destination/heha-sky-view.webp",
    category: ["kekinian"],
    location: "Sleman, Yogyakarta",
    description:
      "Destinasi kekinian di dataran tinggi dengan konsep modern dan pemandangan kota Yogyakarta dari ketinggian. Spot foto unik, area kuliner, dan suasana romantis saat malam hari.",
    highlight: "City View dari Ketinggian",
    rating: 4.3,
    reviewCount: 5500,
  },
  {
    id: "tebingbreksi",
    name: "Tebing Breksi",
    image: "/assets/destination/tebing-breksi.webp",
    category: ["alam", "kekinian"],
    location: "Sleman, Yogyakarta",
    description:
      "Bekas tambang batu breksi yang disulap menjadi destinasi wisata dengan ukiran relief di dinding tebing. Lokasi yang sempurna untuk menikmati sunset dengan panorama kota Yogyakarta.",
    highlight: "Bekas Tambang Eksotis",
    rating: 4.4,
    reviewCount: 7300,
  },
  {
    id: "vredeburg",
    name: "Museum Benteng Vredeburg",
    image: "/assets/destination/museum-benteng-vredeburg.webp",
    category: ["budaya"],
    location: "Kota Yogyakarta",
    description:
      "Benteng peninggalan Belanda yang kini menjadi museum perjuangan kemerdekaan Indonesia. Koleksi diorama sejarah yang lengkap menjadikannya tempat edukasi sejarah yang menarik.",
    highlight: "Museum Perjuangan",
    rating: 4.3,
    reviewCount: 4200,
  },
  {
    id: "poktunggal",
    name: "Pantai Pok Tunggal",
    image: "/assets/destination/pantai-pok-tunggal.webp",
    category: ["pantai"],
    location: "Gunungkidul, Yogyakarta",
    description:
      "Pantai tersembunyi dengan pasir putih lembut dan tebing karang yang menjulang. Pohon duras tunggal yang ikonik menjadi ciri khas pantai ini serta spot camping yang populer.",
    highlight: "Pantai Tersembunyi",
    rating: 4.5,
    reviewCount: 4900,
  },
  {
    id: "nglanggeran",
    name: "Embung Nglanggeran",
    image: "/assets/destination/embung-nglanggeran.webp",
    category: ["alam"],
    location: "Gunungkidul, Yogyakarta",
    description:
      "Embung (waduk kecil) di puncak gunung api purba Nglanggeran dengan pemandangan sunset yang luar biasa. Perpaduan gunung batu purba dan waduk hijau menciptakan panorama yang unik.",
    highlight: "Sunset Gunung Api Purba",
    rating: 4.6,
    reviewCount: 5300,
  },
];

export const destinasiCategories: { key: DestinasiCategory; label: string; icon: string }[] = [
  {
    key: "semua",
    label: "Semua",
    // grid_view: semua kategori
    icon: "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z",
  },
  {
    key: "alam",
    label: "Wisata Alam",
    // terrain: pegunungan
    icon: "M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z",
  },
  {
    key: "budaya",
    label: "Wisata Budaya",
    // account_balance: bangunan bersejarah/candi
    icon: "M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z",
  },
  {
    key: "pantai",
    label: "Wisata Pantai",
    // beach_access: payung pantai
    icon: "M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z",
  },
  {
    key: "kekinian",
    label: "Wisata Kekinian",
    // auto_awesome: kilau/trending
    icon: "M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",
  },
];
