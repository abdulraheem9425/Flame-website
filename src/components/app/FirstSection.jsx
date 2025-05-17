import React from "react";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section className="relative bg-yellow-400 bg-gradient-to-br from-red-600 via-red-600 to-red-500 py-32 px-6 md:px-14 text-red-700 overflow-hidden">

      {/* Watermark background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/pattern.png')] bg-repeat z-0"></div>

      <div className="relative z-10 max-w-9xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-5xl w-11/12 font-extrabold mb-6 text-yellow-400">
           The Flame'n Bun App
          </h3>
          <p className="text-xl leading-relaxed mb-4 text-white">
            Order ahead all your favourites directly from your local Flame'n Bun store and be in with a chance of winning huge prizes and taking advantage of our exclusive app customer offers.
          </p>
          <p className="font-bold text-lg text-white mb-6">
            Download now on iOS or Android.
          </p>

          {/* App Store Buttons in Row */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a href="#">
              <img
                src="/assets/images/home/app.svg"
                alt="Download on the App Store"
                className="h-8 object-contain"
              />
            </a>
            <a href="#">
              <img
                src="/assets/images/home/play.webp"
                alt="Get it on Google Play"
                className="h-20 object-contain"
              />
            </a>
          </div>
        </motion.div>

        {/* App Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="/assets/images/app.png"
            alt="app mobile"
            className="max-w-lg h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-6 right-6 z-10">
        <button className="bg-orange-900 rounded-xl p-3 shadow-md hover:scale-110 transition-transform duration-300">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FirstSection;
