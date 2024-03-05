import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  return (
    <header className={window.innerWidth < 768 && scrollY > 0 ? "bg-white" : "bg-transparent"}>
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
            <div className="hidden lg:flex text-black">
              <ul className="flex gap-8">
              <li>
                  <a
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    href="#home"
                    onClick={toggleNavbar}
                  >
                    <span className="underline"></span>
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    href="#projects"
                    onClick={toggleNavbar}
                  >
                    <span className="underline"></span>
                    Produk
                  </a>
                </li>
                <li>
                  <a
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    href="#skill"
                    onClick={toggleNavbar}
                  >
                    <span className="underline"></span>
                    Layanan
                  </a>
                </li>
                <li>
                  <a
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    href="#about"
                    onClick={toggleNavbar}
                  >
                    <span className="underline"></span>
                    Cari Obat
                  </a>
                </li>
                <li>
                  <a
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    href="#contact"
                    onClick={toggleNavbar}
                  >
                    <span className="underline"></span>
                    Lokasi
                  </a>
                </li>
                <li>
                  <a
                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                    href="#contact"
                    onClick={toggleNavbar}
                  >
                    <span className="underline"></span>
                    Admin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden mt-10 display-flex align-center justify-center text-center shadow-lg"
      >
        <ul className="flex flex-col gap-4 mt-4">
        <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={toggleNavbar}
          >
            <a href="#home" className="hover:underline">
              Beranda
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={toggleNavbar}
          >
            <a href="#projects" className="hover:underline">
              Produk
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={toggleNavbar}
          >
            <a href="#skill" className="hover:underline">
              Layanan
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={toggleNavbar}
          >
            <a href="#about" className="hover:underline">
              Cari Obat
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={toggleNavbar}
          >
            <a href="#contact" className="hover:underline">
              Lokasi
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
            onClick={toggleNavbar}
          >
            <a href="#contact" className="hover:underline">
              Admin
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </header>
  );
}
