"use client";

import dynamic from "next/dynamic";

// Leaflet hanya jalan di browser; muat tanpa SSR seperti di MapSection.
const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false });

/** Peta lokasi kantor TS Group untuk halaman kontak,
 *  memakai komponen Map (Leaflet) yang sama dengan peta wisata. */
export default function KontakMap() {
  return <Map variant="kantor" />;
}
