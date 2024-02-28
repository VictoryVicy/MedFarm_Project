import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="bg-transparent fixed top-0 w-full z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex">
              <h1 className="font-bold text-xl text-black">Med</h1>
              <h1 className="font-bold text-xl text-green-500">Farm</h1>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-white focus:outline-none"
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
                  <a className="nav cursor-pointer hover:text-green-500 relative" href="#home">
                    Beranda
                    <span className="underline"></span>
                  </a>
                </li>
                <li>
                  <a className="nav cursor-pointer hover:text-green-500 relative" href="#home">
                    Produk
                    <span className="underline"></span>
                  </a>
                </li><li>
                  <a className="nav cursor-pointer hover:text-green-500 relative" href="#home">
                    Layanan
                    <span className="underline"></span>
                  </a>
                </li>
                <li>
                  <a className="nav cursor-pointer hover:text-green-500 relative" href="#home">
                    Cari Obat
                    <span className="underline"></span>
                  </a>
                </li>
                <li>
                  <a className="nav cursor-pointer hover:text-green-500 relative" href="#home">
                    FAQ
                    <span className="underline"></span>
                  </a>
                </li>
                <li>
                  <a className="nav cursor-pointer hover:text-green-500 relative" href="#home">
                    Lokasi
                    <span className="underline"></span>
                  </a>
                </li>
                <li>
                  <a className="nav cursor-pointer hover:text-green-500 relative" href="#home">
                    Admin
                    <span className="underline"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {isOpen && (
            <div className="lg:hidden mt-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    className="cursor-pointer"
                    href="#home"
                    onClick={toggleNavbar}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="#projects"
                    onClick={toggleNavbar}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="#skill"
                    onClick={toggleNavbar}
                  >
                    Skill
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="#about"
                    onClick={toggleNavbar}
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="https://github.com/VictoryVicy"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleNavbar}
                  >
                    My Github
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
