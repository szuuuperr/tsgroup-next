import Image from "next/image";
import Link from "next/link";
import styles from "./Vehicle.module.css";
import { waLink } from "@/lib/site";

const vehicles = [
  {
    name: "New Raize",
    image: "/assets/raize.png",
    capacity: "4 Penumpang",
    driverPrice: "Rp. 500.000/Hari",
    fullPrice: "Rp. 650.000/Hari",
  },
  {
    name: "Heice Primo",
    image: "/assets/primo.png",
    capacity: "15 Penumpang",
    driverPrice: "Rp. 800.000/Hari",
    fullPrice: "Rp. 950.000/Hari",
  },
  {
    name: "Inova Reborn",
    image: "/assets/inova.png",
    capacity: "6 Penumpang",
    driverPrice: "Rp. 600.000/Hari",
    fullPrice: "Rp. 750.000/Hari",
  },
  {
    name: "New Fortuner",
    image: "/assets/fortuner.png",
    capacity: "6 Penumpang",
    driverPrice: "Rp. 650.000/Hari",
    fullPrice: "Rp. 800.000/Hari",
  },
  {
    name: "Heice Commuter",
    image: "/assets/commuter.png",
    capacity: "15 Penumpang",
    driverPrice: "Rp. 800.000/Hari",
    fullPrice: "Rp. 950.000/Hari",
  },
  {
    name: "New Calya",
    image: "/assets/calya.png",
    capacity: "6 Penumpang",
    driverPrice: "Rp. 500.000/Hari",
    fullPrice: "Rp. 650.000/Hari",
  },
  {
    name: "Avanza FWD",
    image: "/assets/avanza.png",
    capacity: "6 Penumpang",
    driverPrice: "Rp. 500.000/Hari",
    fullPrice: "Rp. 650.000/Hari",
  },
  {
    name: "New Atlas",
    image: "/assets/atlas.png",
    capacity: "4 Penumpang",
    driverPrice: "Rp. 500.000/Hari",
    fullPrice: "Rp. 650.000/Hari",
  },
];

type VehicleProps = {
  /** "home": kartu berlatar bermotif di beranda; "page": tampilan polos halaman rental. */
  variant?: "home" | "page";
};

export default function Vehicle({ variant = "page" }: VehicleProps) {
  const sectionClass = variant === "home" ? styles.vehicleSection : styles.vehiclePage;

  return (
    <section id="vehicle" className={styles.vehicleOuter}>
      <div className={sectionClass}>
        <div className={styles.dividerVehicleTop}></div>
        <div className={styles.vehicleContainer}>
          <span className="section-subtitle" data-scroll="fade-up">
            Armada Kami
          </span>
          <h2 className="section-title" data-scroll="fade-up" data-scroll-delay="100">
            Pilihan Armada Terbaik
          </h2>
          <p className="section-description" data-scroll="fade-up" data-scroll-delay="200">
            Kami menyediakan berbagai pilihan kendaraan yang nyaman, bersih, dan
            terawat untuk memenuhi kebutuhan perjalanan Anda selama di
            Yogyakarta.
          </p>

          <div className={styles.vehicleGrid} data-scroll-gsap>
            {vehicles.map((vehicle, index) => (
              <div className={styles.cardVehicle} data-scroll-child key={index}>
                <div className={styles.cardImage}>
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={320}
                    height={267}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className={styles.cardVehicleBody}>
                  <div className={styles.cardVehicleHeader}>
                    <h3 className={styles.cardName}>{vehicle.name}</h3>
                    <span className={styles.cardCapacity}>{vehicle.capacity}</span>
                  </div>
                  <div className={styles.cardLine}></div>
                  <div className={styles.cardPricing}>
                    <div className={styles.cardPackage}>
                      <span className={styles.packageLabel}>Mobil + Driver</span>
                      <span className={styles.packagePrice}>{vehicle.driverPrice}</span>
                    </div>
                    <div className={styles.cardPackage}>
                      <span className={styles.packageLabel}>Mobil + Driver + BBM</span>
                      <span className={styles.packagePrice}>{vehicle.fullPrice}</span>
                    </div>
                  </div>
                  <div className={styles.cardBtnContainer}>
                    <a
                      className="btn-primary btn-block"
                      href={waLink(`Halo TS Group, saya tertarik dengan sewa mobil ${vehicle.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pesan Sekarang
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.243-1.214l-.257-.154-2.866.852.852-2.866-.168-.268A8 8 0 1 1 12 20z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.btnMoreVehicle}>
            <Link href="/rental-mobil" className="btn-outline-primary" data-scroll="fade-up">
              Lihat Semua Armada
            </Link>
          </div>
        </div>
        <div className={styles.dividerVehicleBottom}></div>
      </div>
    </section>
  );
}
