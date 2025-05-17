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
    icon: <FaMapMarkerAlt className="text-lg" />,
    href: "#",
  },
  {
    label: "Follow us on TikTok",
    icon: <FaTiktok className="text-lg" />,
    href: "#",
  },
  {
    label: "Like us on Facebook",
    icon: <FaFacebookF className="text-lg" />,
    href: "#",
  },
  {
    label: "Follow us on Instagram",
    icon: <FaInstagram className="text-lg" />,
    href: "#",
  },
  {
    label: "Download the Flame’n Bun App",
    icon: <FaMobileAlt className="text-lg" />,
    href: "#",
  },
];

const ConnectSection = () => {
  return (
    <div className="bg-red-700 text-white py-14 px-6 min-h-[60vh] flex items-center ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-12 text-center md:text-left">
        {/* Heading */}
        <div className="md:w-1/3 ">
          <h2 className="text-5xl font-extrabold leading-tight">LET’S</h2>
          <h2 className="text-5xl italic text-yellow-300 font-semibold leading-tight mt-2">
            Connect
          </h2>
        </div>

        {/* Links */}
        <div className="md:w-2/3 space-y-4 w-full">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-label={item.label}
              className="flex items-center justify-between border-b border-dotted border-white pb-3 group transition-all duration-200 hover:bg-white/10 rounded-md px-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-base md:text-lg group-hover:text-yellow-300">
                  {item.label}
                </span>
              </div>
              <HiArrowNarrowRight className="text-lg group-hover:text-yellow-300 transition" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
