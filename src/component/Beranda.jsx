import { useState, useEffect } from "react";
import Barito1 from "../assets/Barito1.png";
import Barito2 from "../assets/Barito2.png";
import Barito3 from "../assets/Barito3.png";
import Barito4 from "../assets/Barito4.png";
import Barito5 from "../assets/Barito5.png";
import Map from "./Map"; // Import komponen Map yang telah dibuat sebelumnya

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
    <>
    <section id="home">
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
          <div className="relative">
            <img
              src={slides[currentSlide].image}
              alt="Barito"
              className="w-full sm:w-auto md:max-w-[1000px] max-h-[450px]  mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h1 className="text-black text-3xl font-bold justify-center text-center relative">Kata Sambutan</h1>
      </div>
      <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 flex flex-col-reverse sm:flex-row sm:gap-4 gap-8 relative mt-10">
        <div className="relative sm:col-span-6 bottom-32">
          <div className="relative">
            <img
              src="src/assets/Apooteker.png"
              alt="Apoteker"
              className="w-full sm:w-auto md:max-w-[1000px]  mx-auto rounded-full justify-center relative"
            />
            <h1 className="text-2xl font-bold text-black justify-center text-center relative">Sela Puzi Dina</h1>
          </div>
        </div>
        <div className="sm:col-span-6">
          <div className="text-gray-600 mt-8">
            <p>
            Dengan komitmen penuh dari diri saya sendiri, saya berjanji untuk memberikan pelayanan yang tak hanya ramah, tetapi juga profesional dan informatif kepada Anda. Dengan adanya Apotek Barito, saya bersedia menjadi mitra terpercaya Anda dalam menjaga kesehatan dan kecantikan. Mari cerdas gunakan obat! Bersama-sama, kita akan mendapatkan informasi seputar obat di Apotek Barito untuk memastikan Anda selalu membuat keputusan yang dan bijak dan sesuai dengan kesehatan Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
    <div>
        <h1 className="text-black text-3xl font-bold justify-center text-center relative">Produk Obat</h1>
      </div>
      <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 sm:gap-4 gap-8 relative mt-10">
        <div className="relative sm:col-span-6 bottom-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="gambar_obat_1.jpg" alt="Obat 1" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black mb-2">Nama Obat 1</h3>
              <p className="text-gray-600">Harga: Rp. 50.000</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="gambar_obat_2.jpg" alt="Obat 2" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black mb-2">Nama Obat 2</h3>
              <p className="text-gray-600">Harga: Rp. 75.000</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="gambar_obat_3.jpg" alt="Obat 3" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black mb-2">Nama Obat 3</h3>
              <p className="text-gray-600">Harga: Rp. 60.000</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="gambar_obat_4.jpg" alt="Obat 4" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black mb-2">Nama Obat 4</h3>
              <p className="text-gray-600">Harga: Rp. 80.000</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section>
    <section>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">
    <h2 className="text-black text-3xl font-bold justify-center text-center relative">Layanan</h2>
    <div className="grid grid-cols-1 gap-6 mt-8">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="gambar_obat_1.jpg" alt="Obat 1" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-black mb-2">Nama Obat 1</h3>
          <p className="text-gray-600">Harga: Rp. 50.000</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="gambar_obat_2.jpg" alt="Obat 2" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-black mb-2">Nama Obat 2</h3>
          <p className="text-gray-600">Harga: Rp. 75.000</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="gambar_obat_3.jpg" alt="Obat 3" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-black mb-2">Nama Obat 3</h3>
          <p className="text-gray-600">Harga: Rp. 60.000</p>
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="gambar_obat_4.jpg" alt="Obat 4" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-black mb-2">Nama Obat 4</h3>
          <p className="text-gray-600">Harga: Rp. 80.000</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </section>
    <section>
      <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 flex flex-col-reverse sm:flex-row sm:gap-4 gap-8 relative justify-center text-center">
        <div className="relative sm:col-span-6">
          
    <div>
        <h1 className="text-black text-3xl font-bold relative">Lokasi</h1>
      </div>
        </div>
      </div>
      <Map />
    </section>
    </>
  );
}
