import { useState, useEffect } from "react";
import Barito1 from "../assets/Barito1.png";
import Barito2 from "../assets/Barito2.png";
import Barito3 from "../assets/Barito3.png";
import Barito4 from "../assets/Barito4.png";
import Barito5 from "../assets/Barito5.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: Barito1,
    },
    {
      image: Barito2,
    },
    {
      image: Barito3,
    },
    {
      image: Barito4,
    },
    {
      image: Barito5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="sm:mt-8 mt-12">
      <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 flex flex-col-reverse sm:flex-row sm:gap-4 gap-8 relative">
        <div className="sm:col-span-6">
          <h1 className="font-bold text-5xl text-black">Apotek Barito</h1>
          <div className="text-gray-600 mt-8">
            <ul>
              <li>
                Selamat datang di Apotek Barito, tempat terbaik untuk semua
                kebutuhan kesehatan dan kecantikan Anda. Kami menawarkan beragam
                produk obat-obatan, alat kesehatan, dan kosmetika, serta layanan
                konseling profesional. Selain itu, Anda juga dapat memanfaatkan
                layanan pemeriksaan kesehatan tambahan seperti cek tekanan
                darah, asam urat, gula darah, Hb, dan kolesterol.
              </li>
              <li>
                <br></br>
              </li>
              <li>Jalan Barito RT 8A/002, Kuala Kapuas, Kalimantan Tengah</li>
              <li>No. Telp: 0882-1131-9646</li>
            </ul>
          </div>
          <div>
      <button className="button1 bg-transparent rounded-3xl font-semibold py-4 px-12 border border-green-500 hover:border-transparent rounded transition-colors duration-500 mt-5 text-xl">
        Cari Obat!
      </button>
    </div>
        </div>
        <div className="relative sm:col-span-6 bottom-16">
          {" "}
          <div className="relative">
            <img
              src={slides[currentSlide].image}
              alt="Victory"
              className="w-full sm:w-auto h-auto md:max-w-[1000px] max-h-[450px]  mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
