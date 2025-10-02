import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBuilding, faDoorOpen, faCircleQuestion, faBars, faTimes, faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router";
import LogoWoodone from "../../assets/logoWoodone.svg";

const Navigasi = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Beranda", icon: faHome },
    { path: "/tentang-kami", name: "Tentang Kami", icon: faBuilding },
    { path: "/produk", name: "Produk", icon: faDoorOpen },
    { path: "/faqs", name: "FAQs", icon: faCircleQuestion },
  ];

  return (
    <nav className="bg-white px-4 rounded-full py-3 sticky top-0 z-50">
      <div className="relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={"/"}>
            <img src={LogoWoodone} alt="Logo Woodone" className="w-28" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={i} to={item.path} className={`flex items-center justify-center rounded-full transition-all duration-300 ${isActive ? "text-sc font-semibold" : "text-neutral hover:text-sc"}`}>
                  <FontAwesomeIcon icon={item.icon} size="sm" className="mr-1" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button (desktop only) */}
          <div className="hidden md:block">
            <Link to={"https://drive.google.com/file/d/1hFZCgzcLk-3alp9l251N0gv9aWEqBRDA/view?usp=sharing"}>
              <button className="text-sm text-white bg-pr px-6 py-2 rounded-full cursor-pointer hover:bg-pr/80 transition-all duration-300">
                Katalog
                <FontAwesomeIcon icon={faFileInvoice} className="ml-2" />
              </button>
            </Link>
          </div>

          {/* Hamburger Button (mobile) */}
          <button className="md:hidden text-pr focus:outline-none cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start gap-4 px-6 py-4 z-50 rounded-2xl">
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={i}
                  to={item.path}
                  className={`flex items-center gap-2 text-sm transition-all duration-300 ${isActive ? "text-sc font-semibold" : "text-neutral hover:text-sc"}`}
                  onClick={() => setIsOpen(false)} // otomatis menutup menu setelah klik
                >
                  <FontAwesomeIcon icon={item.icon} size="sm" />
                  {item.name}
                </Link>
              );
            })}
            <Link to={"https://drive.google.com/file/d/1hFZCgzcLk-3alp9l251N0gv9aWEqBRDA/view?usp=sharing"} className="w-full">
              <button className="text-sm text-white bg-pr px-6 py-2 rounded-full cursor-pointer hover:bg-pr/80 transition-all duration-300 w-full">
                Katalog
                <FontAwesomeIcon icon={faFileInvoice} className="ml-2" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigasi;
