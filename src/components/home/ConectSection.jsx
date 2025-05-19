import React from "react";
import {
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const links = [
  {
    label: "Find Your Local Flame’n Bun",
    icon: <FaMapMarkerAlt />,
    href: "#",
  },
  {
    label: "Follow us on TikTok",
    icon: <FaTiktok />,
    href: "#",
  },
  {
    label: "Like us on Facebook",
    icon: <FaFacebookF />,
    href: "#",
  },
  {
    label: "Follow us on Instagram",
    icon: <FaInstagram />,
    href: "#",
  },
  {
    label: "Download the Flame’n Bun App",
    icon: <FaMobileAlt />,
    href: "#",
  },
];

const ConnectSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-600 text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path/to/texture.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        {/* Text Block */}
        <div className="md:w-1/3 space-y-4 text-center md:text-left">
          <h2 className="text-6xl font-extrabold leading-tight tracking-tight">
            LET’S
          </h2>
          <h2 className="text-6xl italic font-semibold text-yellow-300">
            Connect
          </h2>
          <p className="text-lg text-white/80 mt-2">
            Whether online or in-store, we’re just a tap away.
          </p>
        </div>

        {/* Links Block */}
        <div className="md:w-2/3 w-full space-y-5">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-label={item.label}
              className="group flex items-center justify-between px-5 py-4 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-300/20 text-yellow-300 rounded-full text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-base md:text-lg font-medium group-hover:text-yellow-200">
                  {item.label}
                </span>
              </div>
              <HiArrowNarrowRight className="text-xl text-white group-hover:text-yellow-300 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
