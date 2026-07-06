export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readingTime: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tips-liburan-hemat-yogyakarta",
    title: "5 Tips Liburan Hemat di Yogyakarta untuk Keluarga",
    excerpt:
      "Yogyakarta selalu menjadi destinasi favorit keluarga. Tapi bagaimana caranya agar liburan tetap seru tanpa menguras kantong? Simak tips berikut ini.",
    image: "/assets/prambanan-gambar.png",
    category: "Tips Liburan",
    date: "28 Jun 2026",
    readingTime: "5 menit",
    content: [
      "Liburan keluarga ke Yogyakarta tidak harus mahal. Dengan perencanaan yang tepat, Anda bisa menikmati pesona Kota Gudeg bersama keluarga tanpa membuat dompet menjerit. Berikut lima tips yang bisa Anda terapkan.",
      "Pertama, rencanakan perjalanan di luar musim liburan. Harga penginapan dan tiket wisata di Yogyakarta bisa naik hingga dua kali lipat saat libur sekolah dan hari raya. Memilih tanggal di hari kerja atau di luar peak season akan menghemat banyak biaya.",
      "Kedua, sewa mobil beserta sopir untuk rombongan keluarga. Dibandingkan naik taksi online berkali-kali, menyewa satu mobil untuk seharian jauh lebih hemat dan fleksibel. Sopir lokal juga tahu rute tercepat dan tempat makan yang enak namun murah.",
      "Ketiga, manfaatkan wisata gratis dan murah. Alun-alun Kidul, Titik Nol Kilometer, hingga menikmati suasana Malioboro di malam hari tidak memerlukan tiket masuk. Untuk destinasi berbayar, pilih paket terusan yang biasanya lebih ekonomis.",
      "Keempat, makan di angkringan dan warung lokal. Kuliner khas Jogja seperti gudeg, sate klathak, dan nasi kucing dijual dengan harga sangat terjangkau. Selain hemat, Anda juga merasakan pengalaman kuliner yang otentik.",
      "Kelima, gunakan jasa paket wisata terpercaya seperti TS Group. Paket wisata yang sudah termasuk mobil, sopir, dan BBM membuat pengeluaran lebih terukur sejak awal, tanpa biaya tak terduga di tengah perjalanan.",
    ],
  },
  {
    slug: "sejarah-kraton-yogyakarta",
    title: "Mengenal Sejarah Kraton Yogyakarta Lebih Dekat",
    excerpt:
      "Kraton Yogyakarta bukan sekadar tempat tinggal sultan, melainkan pusat kebudayaan Jawa yang menyimpan banyak cerita sejarah yang patut kita pelajari.",
    image: "/assets/kraton-yogyakarta.webp",
    category: "Budaya",
    date: "14 Jun 2026",
    readingTime: "6 menit",
    content: [
      "Kraton Ngayogyakarta Hadiningrat berdiri sejak tahun 1755 sebagai hasil Perjanjian Giyanti yang membagi Kerajaan Mataram menjadi dua. Sri Sultan Hamengku Buwono I kemudian membangun istana ini di antara Sungai Winongo dan Sungai Code.",
      "Arsitektur kraton sarat dengan filosofi Jawa. Tata letaknya membentuk sumbu imajiner yang menghubungkan Gunung Merapi, Tugu, Kraton, Panggung Krapyak, hingga Pantai Selatan — sebuah simbol perjalanan hidup manusia dari lahir hingga kembali kepada Sang Pencipta.",
      "Hingga kini, kraton masih berfungsi sebagai tempat tinggal sultan beserta keluarganya, sekaligus pusat kegiatan budaya. Berbagai upacara adat seperti Sekaten, Grebeg, dan Labuhan masih rutin diselenggarakan dan terbuka untuk disaksikan wisatawan.",
      "Saat berkunjung, Anda dapat menjelajahi museum di dalam kompleks kraton yang menyimpan koleksi batik, gamelan, kereta kencana, hingga benda-benda pusaka. Setiap pagi juga ada pertunjukan seni tradisional seperti wayang kulit, tari klasik, dan macapat.",
      "Kraton buka untuk umum setiap hari mulai pukul 08.30 hingga 14.00 WIB, kecuali saat ada acara adat tertentu. Kenakan pakaian sopan dan ikuti aturan yang berlaku sebagai bentuk penghormatan terhadap tradisi yang masih hidup ini.",
    ],
  },
  {
    slug: "rekomendasi-kuliner-malam-malioboro",
    title: "Rekomendasi Kuliner Malam di Sepanjang Jalan Malioboro",
    excerpt:
      "Jalan-jalan di Malioboro kurang lengkap rasanya jika belum mencoba kuliner malamnya. Dari angkringan hingga kopi joss, ini rekomendasinya.",
    image: "/assets/tugu-jogja.jpg",
    category: "Kuliner",
    date: "30 Mei 2026",
    readingTime: "4 menit",
    content: [
      "Malioboro di malam hari berubah menjadi surga kuliner. Lampu-lampu kota, alunan musik pengamen jalanan, dan aroma masakan dari lesehan di sepanjang trotoar menciptakan suasana khas yang tidak ditemukan di kota lain.",
      "Mulailah dari gudeg pertigaan yang legendaris. Gudeg dengan krecek pedas dan ayam kampung menjadi menu wajib. Beberapa penjual gudeg di kawasan ini bahkan sudah berjualan turun-temurun sejak puluhan tahun lalu.",
      "Lanjutkan dengan angkringan kopi joss di utara Stasiun Tugu. Kopi panas yang dicelup arang membara ini menjadi ikon kuliner malam Jogja. Ditemani nasi kucing, sate usus, dan gorengan, nongkrong di angkringan terasa sangat merakyat.",
      "Jangan lewatkan pula lesehan di sepanjang Malioboro yang menyajikan ayam goreng, burung dara, hingga seafood. Pastikan menanyakan harga terlebih dahulu agar sesuai dengan budget Anda.",
      "Tips dari kami: datanglah setelah pukul 21.00 saat toko-toko mulai tutup dan lesehan mulai ramai. Jika Anda menggunakan layanan mobil TS Group, sopir kami dengan senang hati mengantarkan ke spot kuliner favorit warga lokal.",
    ],
  },
  {
    slug: "keindahan-sunset-candi-borobudur",
    title: "Keindahan Sunset di Candi Borobudur yang Menakjubkan",
    excerpt:
      "Menyaksikan matahari terbit dan terbenam di kawasan Candi Borobudur adalah pengalaman spiritual dan visual yang tidak boleh Anda lewatkan.",
    image: "/assets/candi-borobudur.jpeg",
    category: "Destinasi",
    date: "12 Mei 2026",
    readingTime: "5 menit",
    content: [
      "Candi Borobudur, mahakarya abad ke-9 yang menjadi candi Buddha terbesar di dunia, menawarkan pengalaman berbeda di setiap waktunya. Namun momen sunrise dan sunset adalah dua waktu paling magis untuk mengunjunginya.",
      "Saat matahari terbenam, siluet stupa-stupa Borobudur berpadu dengan langit jingga dan latar Pegunungan Menoreh. Kabut tipis yang mulai turun menambah kesan dramatis yang membuat banyak fotografer rela menunggu berjam-jam.",
      "Untuk menikmati sunset terbaik, Anda bisa memilih spot di sekitar kawasan candi seperti Punthuk Setumbu atau Gereja Ayam Bukit Rhema yang berjarak hanya beberapa menit berkendara. Dari ketinggian ini, Borobudur tampak megah di tengah hamparan hijau.",
      "Waktu terbaik berkunjung adalah musim kemarau antara April hingga Oktober, saat langit cenderung cerah. Datanglah satu jam sebelum matahari terbenam agar mendapat posisi terbaik.",
      "TS Group menyediakan paket wisata Borobudur sunset dan sunrise yang sudah termasuk transportasi dan sopir berpengalaman. Anda tinggal duduk nyaman, kami yang mengatur perjalanannya.",
    ],
  },
  {
    slug: "panduan-sewa-mobil-lepas-kunci",
    title: "Panduan Sewa Mobil Lepas Kunci di Yogyakarta",
    excerpt:
      "Ingin liburan lebih fleksibel? Menyewa mobil lepas kunci bisa jadi pilihan tepat. Pahami syarat dan tipsnya sebelum Anda memutuskan untuk menyewa.",
    image: "/assets/inova.png",
    category: "Panduan",
    date: "25 Apr 2026",
    readingTime: "6 menit",
    content: [
      "Sewa mobil lepas kunci — menyewa mobil tanpa sopir — semakin diminati wisatawan yang ingin kebebasan penuh mengatur itinerary. Sebelum menyewa, ada beberapa hal penting yang perlu Anda pahami.",
      "Pertama, siapkan dokumen yang dibutuhkan. Umumnya penyedia rental meminta KTP, SIM A yang masih berlaku, dan dokumen pendukung lain sebagai jaminan. Beberapa rental juga mensyaratkan penyewa sudah berusia minimal 21 tahun.",
      "Kedua, periksa kondisi mobil sebelum berangkat. Cek fisik bodi, lampu, rem, AC, dan bahan bakar bersama petugas rental, lalu dokumentasikan dengan foto. Ini melindungi Anda dari klaim kerusakan yang bukan tanggung jawab Anda.",
      "Ketiga, pahami aturan sewa: batas waktu pemakaian, area pemakaian (dalam atau luar kota), kebijakan overtime, serta apa saja yang ditanggung asuransi. Jangan ragu bertanya detail agar tidak ada kesalahpahaman.",
      "Keempat, kenali medan Yogyakarta. Beberapa rute wisata seperti kawasan Gunungkidul dan Kaliurang menanjak dan berkelok. Pastikan Anda percaya diri mengemudi di medan tersebut, atau pilih armada yang sesuai.",
      "TS Group menyediakan layanan sewa lepas kunci maupun dengan sopir untuk berbagai armada, mulai dari city car hingga Hiace. Semua unit terawat rutin dan siap menemani perjalanan Anda keliling Jogja.",
    ],
  },
  {
    slug: "pesona-pantai-parangtritis",
    title: "Pesona Pantai Parangtritis di Kala Senja",
    excerpt:
      "Pantai Parangtritis selalu punya daya magis tersendiri, terutama saat senja tiba. Ketahui waktu terbaik untuk berkunjung ke mari.",
    image: "/assets/parangtritis-gambar.png",
    category: "Destinasi",
    date: "08 Apr 2026",
    readingTime: "4 menit",
    content: [
      "Terletak sekitar 27 kilometer di selatan pusat kota Yogyakarta, Pantai Parangtritis adalah pantai paling ikonik di Jogja. Pasir hitam vulkanik, deburan ombak Laut Selatan, dan legenda Nyi Roro Kidul membuatnya begitu istimewa.",
      "Senja adalah waktu terbaik menikmati Parangtritis. Saat matahari mulai turun ke cakrawala, langit berubah keemasan dan bayangan para pengunjung memanjang di atas pasir basah — pemandangan yang selalu berhasil membuat siapa pun terdiam sejenak.",
      "Ada banyak aktivitas seru di sini: menyusuri pantai dengan bendi (kereta kuda), memacu ATV di atas pasir, atau menyaksikan para pemain paralayang lepas landas dari Bukit Parangndog di sisi timur pantai.",
      "Jangan lupa mencicipi jagung bakar dan kelapa muda dari warung-warung di tepi pantai sambil menunggu matahari terbenam. Harganya ramah di kantong dan suasananya sulit dilupakan.",
      "Perlu diingat, ombak Laut Selatan sangat kuat — patuhi rambu larangan berenang demi keselamatan. Untuk kunjungan yang nyaman, gunakan layanan mobil dan sopir TS Group; kami tahu waktu dan spot terbaik untuk menikmati senja di Parangtritis.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
