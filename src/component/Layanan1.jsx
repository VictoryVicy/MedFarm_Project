export default function Layanan1() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-14">
      <h1 className="text-black text-3xl font-bold text-center mb-8">Layanan Apotek Barito</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
          <img src="src/assets/Layanan/Cek_asam_urat.png" alt="Obat 1" className="w-1/3 h-[200px] object-cover" />
          <div className="p-4 flex-grow bg-green-500">
            <h3 className="text-lg font-semibold text-white mb-2">Cek Asam Urat</h3>
            <p className="text-white">Rp 15.000</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
          <img src="src/assets/Layanan/Cek_gula_darah.png" alt="Obat 2" className="w-1/3 h-[200px] object-cover" />
          <div className="p-4 flex-grow bg-green-500">
            <h3 className="text-lg font-semibold text-white mb-2">Cek Gula Darah</h3>
            <p className="text-white">Rp 15.000</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
          <img src="src/assets/Layanan/Cek_kolesterol.png" alt="Obat 3" className="w-1/3 h-[200px] object-cover" />
          <div className="p-4 flex-grow bg-green-500">
            <h3 className="text-lg font-semibold text-white mb-2">Cek Kolesterol</h3>
            <p className="text-white">Rp 20.000</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
          <img src="src/assets/Layanan/Cek tekanan darah.png" alt="Obat 4" className="w-1/3 h-[200px] object-cover" />
          <div className="p-4 flex-grow bg-green-500">
            <h3 className="text-lg font-semibold text-white mb-2">Cek Tekanan Darah</h3>
            <p className="text-white">Rp 5.000</p>
          </div>
        </div>
        {/* New Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
          <img src="src/assets/Layanan/Cek_hemoglobin.png" alt="Obat 5" className="w-1/3 h-[200px] object-cover" />
          <div className="p-4 flex-grow bg-green-500">
            <h3 className="text-lg font-semibold text-white mb-2">Cek Hemoglobin</h3>
            <p className="text-white">Rp 15.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
