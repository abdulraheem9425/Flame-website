import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = [
    { name: 'Menu', path: '/menu' },
    { name: 'Our Flavours', path: '/flavours' },
    { name: 'Our Food', path: '/food' },
    { name: 'Our Stores', path: '/stores' },
    { name: 'Our App', path: '/app' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[hsl(2,76%,47%)] py-2 shadow-md' : 'bg-transparent py-4'
      } text-white font-semibold`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img
            src="/assets/images/home/logo.png"
            alt="Flame’n Bun"
            className={`transition-all duration-300 ${
              scrolled ? 'h-14 w-20' : 'h-20 w-28'
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[15px] tracking-wide ml-20">
          {menuItems.map((item, i) => (
            <li key={i} className="hover:text-yellow-400 transition-colors duration-200">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex flex-col items-end gap-2">
          {!scrolled && (
            <div className="flex items-center gap-4 text-lg">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <FaTiktok className="hover:text-yellow-400 cursor-pointer" />
              </Link>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
              </Link>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
              </Link>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="UK"
                  className="h-4 w-6 cursor-pointer"
                />
              </Link>
            </div>
          )}
          <button className="bg-yellow-400 text-red-700 px-4 py-1.5 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200">
            Order Online
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#4a0f0f] z-40 text-white transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <MdClose size={30} />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 mt-10 text-xl font-medium">
          {menuItems.map((item, i) => (
            <li key={i} className="hover:text-yellow-400">
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-5 text-2xl mt-10">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <FaTiktok className="hover:text-yellow-400 cursor-pointer" />
          </Link>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
          </Link>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
          </Link>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="https://flagcdn.com/gb.svg"
              alt="UK"
              className="h-5 w-7 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-yellow-400 text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
            Order Online
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
