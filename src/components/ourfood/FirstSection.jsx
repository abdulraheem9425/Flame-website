import React from "react";
import { motion } from "framer-motion";

const FlameNBun = () => {
  return (
    <section className="min-h-screen bg-red-900 text-white flex flex-col md:flex-row items-center justify-center px-6 py-20 md:py-28 gap-16 max-w-7xl mx-auto overflow-hidden">
      
      {/* Flame Image Section */}
      <motion.div
        className="flex justify-center max-w-md md:max-w-lg w-full"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/images/first.png"
          alt="Flame’n Bun Heat Scale Graphic"
          className="max-w-full h-auto rounded-xl  transition-transform duration-300 hover:scale-105"
          loading="lazy"
          draggable={false}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-yellow-400 text-4xl sm:text-5xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-md">
          Years in the Making
        </h2>
        <p className="mb-6 text-lg sm:text-2xl leading-relaxed text-white/90">
          Flame’n Bun has spent years perfecting the flavours of its freshly cooked chicken. Our exclusive marinades have been
          developed by our amazing development chefs to allow our chicken to taste like no other chicken.
        </p>
        <p className="text-lg sm:text-2xl leading-relaxed text-white/90">
          The care and thought in cooking Flame’n Bun’s products gives our food its distinctive flavour and taste.
        </p>
      </motion.div>
    </section>
  );
};

export default FlameNBun;
