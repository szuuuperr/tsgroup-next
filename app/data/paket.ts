/** Data paket wisata: satu sumber untuk beranda & halaman /paket-wisata.
 *  Harga per mobil (bukan per orang), durasi ±10-12 jam. */
export interface PaketWisataItem {
  title: string;
  price: string;
  description: string;
  image: string;
  includes: string[];
  destinations: string[];
  whatsappText: string;
}

export const pakets: PaketWisataItem[] = [
  {
    title: "Paket Borobudur Sunrise",
    price: "Rp 450.000",
    description:
      "Berburu matahari terbit dari Punthuk Setumbu, lalu menjelajahi kemegahan candi Buddha terbesar di dunia. Durasi ±12 jam, dijemput dini hari.",
    image: "/assets/paket-1.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Punthuk Setumbu", "Candi Borobudur", "Svargabumi", "Gereja Ayam Bukit Rhema"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Borobudur Sunrise",
  },
  {
    title: "Paket Merapi Lava Tour",
    price: "Rp 425.000",
    description:
      "Petualangan jeep menyusuri jalur erupsi Merapi, ditutup wisata budaya di museum Jawa terbaik Indonesia. Cocok untuk keluarga.",
    image: "/assets/paket-2.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Lava Tour Jeep Merapi", "Bunker Kaliadem", "Museum Sisa Hartaku", "Museum Ullen Sentalu"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Merapi Lava Tour",
  },
  {
    title: "Paket Pantai Gunungkidul",
    price: "Rp 450.000",
    description:
      "Deretan pantai pasir putih terbaik di selatan Jogja dalam satu hari, ditutup sunset romantis dari atas tebing HeHa Ocean View.",
    image: "/assets/paket-3.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Pantai Indrayanti", "Pantai Pok Tunggal", "Pantai Timang", "HeHa Ocean View"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Pantai Gunungkidul",
  },
  {
    title: "Paket City Heritage",
    price: "Rp 350.000",
    description:
      "Menyusuri jantung budaya Jogja: keraton, pemandian raja, museum, hingga belanja oleh-oleh di Malioboro. Santai dan kaya cerita.",
    image: "/assets/paket-4.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Keraton Yogyakarta", "Taman Sari", "Museum Sonobudoyo", "Malioboro & Titik Nol"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket City Heritage",
  },
  {
    title: "Paket Prambanan Sunset",
    price: "Rp 375.000",
    description:
      "Kompleks candi Hindu terindah di Indonesia, tebing kapur artistik, dan sunset legendaris dari puncak Ratu Boko dalam satu rangkaian.",
    image: "/assets/paket-5.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Candi Prambanan", "Tebing Breksi", "Candi Ijo", "Ratu Boko (Sunset)"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Prambanan Sunset",
  },
  {
    title: "Paket Goa & Air Terjun",
    price: "Rp 475.000",
    description:
      "Cave tubing menyusuri sungai bawah tanah Goa Pindul, main air di Sri Gethuk, lalu menikmati sejuknya hutan pinus Mangunan.",
    image: "/assets/paket-6.png",
    includes: ["Mobil", "Driver", "BBM"],
    destinations: ["Goa Pindul", "Air Terjun Sri Gethuk", "Hutan Pinus Mangunan", "Jurang Tembelan"],
    whatsappText: "Halo TS Group, saya tertarik dengan Paket Goa & Air Terjun",
  },
];
