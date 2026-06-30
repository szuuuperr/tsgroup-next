"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef, useEffect } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
import L, { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";
import "./Map.css";
import { wisataJogja, kategoriConfig } from "../../app/data/wisata-jogja";

export default function Map() {
  const tsGroupRef = useRef<L.Marker>(null);

  useEffect(() => {
    setTimeout(() => {
      if (tsGroupRef.current) {
        tsGroupRef.current?.openPopup();
      }
    }, 500);
  }, []);

  const createCustomIconCluster = (cluster: L.MarkerCluster): L.DivIcon => {
    return L.divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-cluster-marker",
      iconSize: [32, 32],
    });
  };

  const renderStars = (rating: number): string => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    const starFull = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
    const starHalf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;
    const starEmpty = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;
    return (
      starFull.repeat(full) + starHalf.repeat(half) + starEmpty.repeat(empty)
    );
  };

  const markers = wisataJogja.map((w) => ({
    geocode: [w.koordinat.lat, w.koordinat.lng] as [number, number],
    popUp: `<div class="map-popup">
      <div class="map-popup-header">
        <h3 class="map-popup-name">${w.nama}</h3>
        <div class="map-popup-meta">
          <span class="map-popup-badge" style="--badge-color:${kategoriConfig[w.kategori].color}">${kategoriConfig[w.kategori].icon} ${kategoriConfig[w.kategori].label}</span>
          <span class="map-popup-score"><span class="map-popup-star">★</span> ${w.rating}</span>
        </div>
      </div>
      <div class="map-popup-info">
        <div class="map-popup-info-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>${w.alamat}</span>
        </div>
        <div class="map-popup-info-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          <span>${w.jamBuka}</span>
          <span class="map-popup-divider">•</span>
          <span>${w.hargaTiket}</span>
        </div>
      </div>
      <p class="map-popup-desc">${w.deskripsi}</p>
      <a class="map-popup-cta" href="https://wa.me/6285645733351?text=Halo%20TS%20Group%2C%20saya%20tertarik%20mengunjungi%20${encodeURIComponent(w.nama)}" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.243-1.214l-.257-.154-2.866.852.852-2.866-.168-.268A8 8 0 1 1 12 20z"/></svg>
        Tanya via WhatsApp
      </a>
    </div>`,
    icon: new Icon({
      iconUrl: w.iconUrl,
      iconSize: [80, 80] as [number, number],
      iconAnchor: [16, 16] as [number, number],
      popupAnchor: [0, -16] as [number, number],
    }),
  }));

  return (
    <MapContainer center={[-7.71286655407907, 110.34528000945151]} zoom={12}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomIconCluster}
      >
        {markers.map((marker, idx) => (
          <Marker
            key={`wisata-${idx}`}
            position={marker.geocode}
            icon={marker.icon}
            ref={wisataJogja[idx].id === 46 ? tsGroupRef : undefined}
          >
            <Popup>
              <div dangerouslySetInnerHTML={{ __html: marker.popUp }} />
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
