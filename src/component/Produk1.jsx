import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Produk1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <section className="py-10" id="produk">
      <div className="container m-auto px-4">
        <div className="mt-14">
          {/* Slider Gambar Obat */}
          <Slider {...settings}>
            <div>
              <img src="gambar1.jpg" alt="" />
            </div>
            <div>
              <img src="gambar2.jpg" alt="" />
            </div>
            <div>
              <img src="gambar3.jpg" alt="" />
            </div>
          </Slider>
          {/* Jenis Obat */}
          <div className="mt-14">
            <h2 className="text-xl font-semibold mb-4">Jenis Obat</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Card Obat */}
              <div className="bg-white shadow-md p-4">
                <h3 className="font-semibold text-lg">Obat 1</h3>
                <p className="text-gray-500">Deskripsi obat 1.</p>
              </div>
              <div className="bg-white shadow-md p-4">
                <h3 className="font-semibold text-lg">Obat 2</h3>
                <p className="text-gray-500">Deskripsi obat 2.</p>
              </div>
              <div className="bg-white shadow-md p-4">
                <h3 className="font-semibold text-lg">Obat 3</h3>
                <p className="text-gray-500">Deskripsi obat 3.</p>
              </div>
            </div>
          </div>
          {/* Hyperlink See All */}
          <div className="mt-8 text-center">
            <a href="#see-all" className="text-blue-500 font-semibold">
              See All
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Produk1;
