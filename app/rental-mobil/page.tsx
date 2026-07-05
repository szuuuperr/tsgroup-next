import type { Metadata } from "next";
import Vehicle from "@/sections/Vehicle/Vehicle";

export const metadata: Metadata = {
  title: "Rental Mobil",
  description:
    "Sewa mobil di Yogyakarta bersama TS Group - tersedia dengan sopir maupun lepas kunci. Armada lengkap, terawat, dan harga bersaing.",
};

export default function RentalMobilPage() {
  return (
    <main>
      <Vehicle variant="page" />
    </main>
  );
}
