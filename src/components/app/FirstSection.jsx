import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FirstSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#b91c1c] via-[#dc2626] to-[#ef4444] py-28 px-6 md:px-16 text-white overflow-hidden">

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/pattern.png')] bg-repeat z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 leading-snug">
            The Flame'n Bun App
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Order your favourites ahead of time and win big with exclusive in-app offers. Convenient, fast, and full of flavor.
          </p>
          <p className="font-semibold text-white text-base">
            Download now on iOS or Android.
          </p>

          {/* App Store Buttons */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a href="#">
              <img
                src="/assets/images/home/app.svg"
                alt="Download on the App Store"
                className="h-10 object-contain"
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
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/assets/images/app.png"
            alt="Flame'n Bun App"
            className="mx-auto max-w-md md:max-w-lg "
          />
        </motion.div>
      </div>

     
    </section>
  );
};

export default FirstSection;
