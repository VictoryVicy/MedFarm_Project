import { useState, useEffect } from "react";
import Jenis1 from "../assets/Jenis1.png";
import Jenis2 from "../assets/Jenis2.png";
import Jenis3 from "../assets/Jenis3.png";
import { Link } from "react-router-dom";

export default function Produk1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: Jenis1,
    },
    {
      image: Jenis2,
    },
    {
      image: Jenis3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section id="produk">
        <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 flex flex-col-reverse sm:flex-row sm:gap-4 gap-8 relative">
          <div className="relative">
            <img
              src={slides[currentSlide].image}
              alt=""
              className="w-full sm:w-auto md:max-w-[1200px] max-h-[450px]  mx-auto"
            />
          </div>
        </div>
      </section>
      {/* Jenis Obat 1 */}
      <section>
        <div>
          <h1 className="text-black text-3xl font-bold justify-center text-center relative">
            Produk Obat
          </h1>
        </div>
        <div className="ml-8 mt-10 text-2xl text-black font-bold">
          <h1>Obat Pereda Nyeri Ringan</h1>
        </div>
        <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 sm:gap-4 gap-8 relative mt-10">
          <div className="relative sm:col-span-6 bottom-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Cataflam.png"
                  alt="Obat 1"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Cataflam
                  </h3>
                  <p className="text-white">Rp. 4.000</p>
                  <Link to="/cataflam" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Panadol.png"
                  alt="Obat 2"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Panadol
                  </h3>
                  <p className="text-white">Rp. 6.000</p>
                  <Link to="/panadol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Ponstan.png"
                  alt="Obat 3"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Ponstan
                  </h3>
                  <p className="text-white">Rp. 2.500</p>
                  <Link to="/ponstan" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Torasic.png"
                  alt="Obat 4"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Torasic
                  </h3>
                  <p className="text-white">Rp. 5.000</p>
                  <Link to="/torasic" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Jenis Obat 2 */}
      <section>
        <div className="ml-8 mt-10 text-2xl text-black font-bold">
          <h1>Obat Batuk dan Pilek</h1>
        </div>
        <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 sm:gap-4 gap-8 relative mt-10">
          <div className="relative sm:col-span-6 bottom-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Paracetamol.png"
                  alt="Obat 1"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Paracetamol
                  </h3>
                  <p className="text-white">Rp. 4.000</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Ibuprofen.png"
                  alt="Obat 2"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Ibuprofen
                  </h3>
                  <p className="text-white">Rp. 6.000</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Loperamide.png"
                  alt="Obat 3"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Loperamide
                  </h3>
                  <p className="text-white">Rp. 2.500</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Loratadine.png"
                  alt="Obat 4"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Loratadine
                  </h3>
                  <p className="text-white">Rp. 5.000</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Jenis Obat 3 */}
      <section>
        <div className="ml-8 mt-10 text-2xl text-black font-bold">
          <h1>Obat Alergi</h1>
        </div>
        <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 sm:gap-4 gap-8 relative mt-10">
          <div className="relative sm:col-span-6 bottom-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Paracetamol.png"
                  alt="Obat 1"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Paracetamol
                  </h3>
                  <p className="text-white">Rp. 4.000</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Ibuprofen.png"
                  alt="Obat 2"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Ibuprofen
                  </h3>
                  <p className="text-white">Rp. 6.000</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Loperamide.png"
                  alt="Obat 3"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Loperamide
                  </h3>
                  <p className="text-white">Rp. 2.500</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Loratadine.png"
                  alt="Obat 4"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Loratadine
                  </h3>
                  <p className="text-white">Rp. 5.000</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Jenis Obat 4 */}
      <section>
        <div className="ml-8 mt-10 text-2xl text-black font-bold">
          <h1>Vitamin dan Suplemen</h1>
        </div>
        <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 sm:gap-4 gap-8 relative mt-10">
          <div className="relative sm:col-span-6 bottom-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Paracetamol.png"
                  alt="Obat 1"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Paracetamol
                  </h3>
                  <p className="text-white">Rp. 4.000</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Ibuprofen.png"
                  alt="Obat 2"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Ibuprofen
                  </h3>
                  <p className="text-white">Rp. 6.000</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Loperamide.png"
                  alt="Obat 3"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Loperamide
                  </h3>
                  <p className="text-white">Rp. 2.500</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="src/assets/Loratadine.png"
                  alt="Obat 4"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-green-500">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Loratadine
                  </h3>
                  <p className="text-white">Rp. 5.000</p>
                  <Link to="/detail/paracetamol" className="text-white hover:underline">Lihat Detail Produk</Link> {/* Tambahkan Link */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
