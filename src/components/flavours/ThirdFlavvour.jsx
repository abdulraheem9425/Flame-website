import React from "react";
import { motion } from "framer-motion";

const BottledSauces = () => {
  return (
    <section className="relative bg-yellow-400 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-300 py-20 px-6 md:px-16 text-red-700 overflow-hidden">
      {/* Watermark background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/pattern.png')] bg-repeat z-0"></div>

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-center text-5xl font-extrabold uppercase tracking-wide mb-16 text-red-800"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Bottled Sauces
        <span className="block w-24 h-1 bg-red-800 mx-auto mt-4 rounded"></span>
      </motion.h2>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-red-800">
            Pepe's in a bottle!
          </h3>
          <p className="text-lg leading-relaxed mb-4 text-red-800">
            Secret blends of spices is not our thing, here at Pepe’s we’re all about sharing. That's why we've taken our six signature piri piri flavours and put them in a bottle so you can make every meal <span className="font-bold">Pepe'licious</span>.
          </p>
          <p className="font-bold text-lg text-red-800">
            Available to buy in store & online now!
          </p>
        </motion.div>

        {/* Sauce Bottles Image */}
        <motion.div
          className="w-full md:w-1/31 flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="/assets/images/bottle.png"
            alt="Pepe's Bottled Sauces in various flavours"
            className="max-w-lg h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Scroll button */}
      <div className="absolute bottom-6 right-6 z-10">
        <button className="bg-orange-900 rounded-xl p-3 shadow-md">
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

export default BottledSauces;
