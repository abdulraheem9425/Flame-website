import React from "react";
import { motion } from "framer-motion";

const BottledSauces = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-300 py-20 px-6 md:px-20 text-red-800 overflow-hidden rounded-lg shadow-lg">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/pattern.png')] bg-repeat z-0"></div>

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-center text-5xl font-extrabold uppercase tracking-widest mb-16 text-red-900 drop-shadow-md"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Bottled Sauces
        <span className="block w-28 h-1 bg-red-900 mx-auto mt-5 rounded-full shadow" />
      </motion.h2>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-red-900 tracking-tight">
            Flame’n Bun in a bottle!
          </h3>
          <p className="text-lg leading-relaxed mb-6 text-red-900 max-w-xl mx-auto md:mx-0">
            We believe in bold flavours that speak for themselves. Our six signature piri piri sauces are now bottled so you can take Flame’n Bun wherever you go and make every meal <span className="font-extrabold underline decoration-yellow-400 decoration-4">absolutely unforgettable</span>.
          </p>
          <p className="font-semibold text-lg text-red-900 max-w-xl mx-auto md:mx-0">
            Available to buy in-store & online now!
          </p>
        </motion.div>

        {/* Sauce Bottles Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/assets/images/bottle.png"
            alt="Flame’n Bun Bottled Sauces in various flavours"
            className="max-w-md sm:max-w-lg h-auto object-contain rounded-lg  hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          aria-label="Scroll down"
          className="bg-red-900 rounded-xl p-3 shadow-lg hover:bg-red-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-600"
        >
          <svg
            className="w-6 h-6 text-yellow-400"
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
