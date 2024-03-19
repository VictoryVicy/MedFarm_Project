import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Produk1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb" // menentukan kelas CSS untuk slider
  };

  return (
    <>
    <section className="py-10" id="produk">
      <div className="container m-auto px-4">
        <div className="mt-14">
          {/* Slider Gambar Obat */}
          <Slider {...settings}>
            <div>
              <img src="src/assets/Jenis1.png" alt="" />
            </div>
            <div>
              <img src="src/assets/Jenis2.png" alt="" />
            </div>
            <div>
              <img src="src/assets/Jenis3.png" alt="" />
            </div>
          </Slider>
          </div>
        </div>
    </section>
          {/* Jenis Obat */}
          <section>
      <div>
        <h1 className="text-black text-3xl font-bold justify-center text-center relative">Produk Obat</h1>
      </div>
      <div className="ml-8 mt-10 text-2xl text-black font-bold">
      <h1>Obat Pereda Nyeri Ringan</h1>
      </div>
      <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 sm:gap-4 gap-8 relative mt-10">
        <div className="relative sm:col-span-6 bottom-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="src/assets/Paracetamol.png" alt="Obat 1" className="w-full h-40 object-cover" />
            <div className="p-4 bg-green-500">
              <h3 className="text-lg font-semibold text-white mb-2">Paracetamol</h3>
              <p className="text-white">Rp. 4.000</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="src/assets/Ibuprofen.png" alt="Obat 2" className="w-full h-40 object-cover" />
            <div className="p-4 bg-green-500">
              <h3 className="text-lg font-semibold text-white mb-2">Ibuprofen</h3>
              <p className="text-white">Rp. 6.000</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="src/assets/Loperamide.png" alt="Obat 3" className="w-full h-40 object-cover" />
            <div className="p-4 bg-green-500">
              <h3 className="text-lg font-semibold text-white mb-2">Loperamide</h3>
              <p className="text-white">Rp. 2.500</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="src/assets/Loratadine.png" alt="Obat 4" className="w-full h-40 object-cover" />
            <div className="p-4 bg-green-500">
              <h3 className="text-lg font-semibold text-white mb-2">Loratadine</h3>
              <p className="text-white">Rp. 5.000</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Produk1;
