import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={
        window.innerWidth < 768 && scrollY > 0 ? "bg-white" : "bg-transparent"
      }
    >
      <div className="fixed top-0 w-full z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="font-bold text-xl text-black">Med</h1>
              <h1 className="font-bold text-xl text-green-500">Farm</h1>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-black focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            <div className={`lg:flex text-black ${isOpen ? '' : 'hidden'}`}> {/* Tambahkan kelas 'hidden' jika isOpen adalah false */}
              <ul className="flex gap-8">
                <li>
                  <Link
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    to="/"
                    onClick={closeNavbar}
                  >
                    <span className="underline"></span>
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    to="/produk"
                    onClick={closeNavbar}
                  >
                    <span className="underline"></span>
                    Produk
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    to="/layanan"
                    onClick={closeNavbar}
                  >
                    <span className="underline"></span>
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    to="/cariobat"
                    onClick={closeNavbar}
                  >
                    <span className="underline"></span>
                    Cari Obat
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    to="/lokasi"
                    onClick={closeNavbar}
                  >
                    <span className="underline"></span>
                    Lokasi
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    to="/admin"
                    onClick={closeNavbar}
                  >
                    <span className="underline"></span>
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <motion.div
  initial={{ y: -50, opacity: 0 }} // Properti initial untuk animasi awal saat komponen dimount
  animate={{ y: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }} // Properti animate untuk animasi saat komponen diubah
  transition={{ duration: 0.3 }} // Durasi transisi animasi
  className={`lg:flex text-black items-center ${isOpen ? '' : 'hidden'}`}
>
        <ul className="flex flex-col gap-4 mt-4">
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={closeNavbar}
          >
            <Link to="/" className="hover:underline">
              Beranda
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={closeNavbar}
          >
            <Link to="/produk" className="hover:underline">
              Produk
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={closeNavbar}
          >
            <Link to="/layanan" className="hover:underline">
              Layanan
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={closeNavbar}
          >
            <Link to="/cariobat" className="hover:underline">
              Cari Obat
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={closeNavbar}
          >
            <Link to="/lokasi" className="hover:underline">
              Lokasi
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={closeNavbar}
          >
            <Link to="/admin" className="hover:underline">
              Admin
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </header>
  );
}
