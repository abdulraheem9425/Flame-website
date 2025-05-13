import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Menu", path: "/menu" },
    { name: "Our Flavours", path: "/flavours" },
    { name: "Our Food", path: "/food" },
    { name: "Our Stores", path: "/stores" },
    { name: "Our App", path: "/app" }
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 
        ${scrolled ? "bg-[hsl(2,76%,47%)] py-2" : "bg-transparent py-4"} 
        text-white font-bold`}
    >
      <div className="flex items-center justify-between px-6 transition-all duration-300">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/images/home/logo.png"
            alt="Flames & Bun"
            className={`transition-all duration-300 ${scrolled ? "h-16 w-24" : "h-28 w-32"}`}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-md ml-96">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-yellow-400 cursor-pointer">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex flex-col items-end gap-1">
          {!scrolled && (
            <div className="flex items-center gap-4 text-xl">
              <FaTiktok className="cursor-pointer" />
              <FaFacebookF className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <div className="flex items-center cursor-pointer">
                <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="h-4 w-6" />
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
          )}
          <button className="bg-yellow-400 text-red-700 px-3 py-1 rounded font-bold hover:bg-yellow-300 transition">
            Order Online
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu with Slide Animation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#4a0f0f] z-40 flex flex-col items-center justify-center text-center px-6 space-y-6 
        transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 text-2xl font-semibold">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-yellow-400">
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-2xl">
          <FaTiktok className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <div className="flex items-center cursor-pointer">
            <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="h-5 w-7" />
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>

        <button className="mt-6 bg-yellow-400 text-red-700 px-6 py-3 rounded font-bold hover:bg-yellow-300 transition">
          Order Online
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
