"use client";

import { useState } from "react";
import styles from "./Kontak.module.css";
import { waLink } from "@/lib/site";

const services = [
  "Paket Wisata",
  "Rental Mobil + Sopir",
  "Rental Mobil Lepas Kunci",
  "Lainnya",
];

export default function KontakForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `Halo TS Group, saya ${name}.\nLayanan: ${service}\n\n${message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.formField}>
        <span className={styles.fieldLabel}>Nama</span>
        <input
          type="text"
          className={styles.fieldInput}
          placeholder="Nama lengkap Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className={styles.formField}>
        <span className={styles.fieldLabel}>Layanan yang Diminati</span>
        <select
          className={styles.fieldInput}
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {services.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.formField}>
        <span className={styles.fieldLabel}>Pesan</span>
        <textarea
          className={`${styles.fieldInput} ${styles.fieldTextarea}`}
          placeholder="Tulis rencana perjalanan atau pertanyaan Anda..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />
      </label>
      <button type="submit" className="btn-primary">
        Kirim via WhatsApp
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.243-1.214l-.257-.154-2.866.852.852-2.866-.168-.268A8 8 0 1 1 12 20z" />
        </svg>
      </button>
    </form>
  );
}
