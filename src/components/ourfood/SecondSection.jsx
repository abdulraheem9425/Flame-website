import React from 'react';
import { motion } from 'framer-motion';

const FreshDipSection = () => {
  return (
    <section className="w-full bg-red-900 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-white">
        
        {/* Text Block */}
        <motion.div
          className="flex-1 max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-yellow-400 text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            Fresh to the Last Dip
          </h2>
          <p className="text-2xl font-medium leading-relaxed">
            The same attention to detail is taken when creating our fantastic dips.
            We don't ‘buy in’ our dips — they’re made <span className="text-yellow-300 font-bold">fresh daily in-store</span>
            to perfectly complement our menu. It’s the final touch to that iconic Flame’n Bun taste.
          </p>
        </motion.div>

        {/* Dip Illustration */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/psp.png"
            alt="Flame’n Bun freshly made dips"
            className="w-72 md:w-80 h-auto rounded-xl  object-contain"
            loading="lazy"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FreshDipSection;
