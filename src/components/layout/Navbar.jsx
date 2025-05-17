import React, { useState, useEffect, useRef } from 'react';
import { Link,  } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [flagDropdownOpen, setFlagDropdownOpen] = useState(false);
  const flagRef = useRef(null);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  // Handle scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close flag dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (flagRef.current && !flagRef.current.contains(event.target)) {
        setFlagDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation items
  const menuItems = [
    { name: "Menu", path: "/menu" },
    { name: "Our Flavours", path: "/flavours" },
    { name: "Our Food", path: "/food" },
    { name: "Our Stores", path: "/stores" },
    { name: "Our App", path: "/app" }
  ];

 
  

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${scrolled ? "bg-[hsl(2,76%,47%)] py-2" : "bg-transparent py-4"} 
      text-white font-bold`}>

      <div className="flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/images/home/logo.png"
            alt="Flame’n Bun"
            className={`transition-all duration-300 ${scrolled ? "h-14 w-20" : "h-20 w-28"}`}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-md ml-20">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-yellow-400">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex flex-col items-end gap-1">
          {!scrolled && (
            <div className="flex items-center gap-4 text-xl relative" ref={flagRef}>
              <FaTiktok className="cursor-pointer" />
              <FaFacebookF className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />

              <div className="flex items-center cursor-pointer" onClick={() => setFlagDropdownOpen(!flagDropdownOpen)}>
                <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="h-4 w-6" />
                <MdOutlineKeyboardArrowDown />
              </div>

              {/* Dropdown */}
              {flagDropdownOpen && (
                <div className="absolute top-10 right-0 bg-white text-black rounded shadow-md py-2 px-4 z-50">
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded">
                    <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="h-4 w-6" />
                    <span>United Kingdom</span>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Order Button Desktop */}
          <button
            className="bg-yellow-400 text-red-700 px-3 py-1 rounded hover:bg-yellow-300"
          >
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

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#4a0f0f] z-40 text-white transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <MdClose size={30} />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 text-xl font-semibold mt-6">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-yellow-400">
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-5 text-2xl mt-8">
          <FaTiktok className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <div className="relative" ref={flagRef}>
            <div className="flex items-center cursor-pointer" onClick={() => setFlagDropdownOpen(!flagDropdownOpen)}>
              <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="h-5 w-7" />
              <MdOutlineKeyboardArrowDown />
            </div>
            {flagDropdownOpen && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-black rounded shadow-md py-2 px-4 z-50">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded">
                  <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="h-4 w-6" />
                  <span>United Kingdom</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="bg-yellow-400 text-red-700 px-6 py-3 rounded hover:bg-yellow-300 font-bold"
          >
            Order Online
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
