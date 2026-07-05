import type { Metadata } from "next";
import PaketWisata from "@/sections/PaketWisata/PaketWisata";

export const metadata: Metadata = {
  title: "Paket Wisata",
  description:
    "Pilihan paket wisata Jogja dari TS Group - sudah termasuk mobil, sopir, dan BBM. Nikmati liburan tanpa ribet di Yogyakarta dan sekitarnya.",
};

export default function PaketWisataPage() {
  return (
    <main>
      <PaketWisata />
    </main>
  );
}
