import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    // Inisialisasi peta dengan zoom yang lebih kecil
    const map = L.map("map", {
      center: [-6.1753924, 106.8271528],
      zoom: 10, // Misalnya zoom 10 untuk membuat peta lebih kecil
    });

    // Tambahkan layer peta dasar
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Tambahkan marker pada lokasi
    L.marker([-6.1753924, 106.8271528])
      .addTo(map)
      .bindPopup("Lokasi Apotek Barito")
      .openPopup();
    
    // Bersihkan peta saat komponen di-unmount
    return () => {
      map.remove();
    };
  }, []); // Hanya dijalankan sekali saat komponen dimount pertama kali

  return <div id="map" className="w-[100%] h-[300px] mt-8"></div>; 
};

export default Map;
