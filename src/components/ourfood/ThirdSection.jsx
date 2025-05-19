import React from "react";
import { motion } from "framer-motion";

const FreshFoodSection = () => {
  return (
    <section className="w-full bg-[#801b1b] relative overflow-hidden py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 z-10 relative">

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/assets/images/third.png"
            alt="Ingredients - Mango, Lime, Chili"
            className="w-80 md:w-96 h-auto rounded-xl object-contain"
            loading="lazy"
            draggable={false}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 text-white text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-yellow-400 text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            Simply Great Ingredients
          </h2>
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            The care taken in preparation and cooking is matched by the sourcing of our ingredients.
            Flame’n Bun is always <span className="text-yellow-300 font-bold">fresh</span> and <span className="text-yellow-300 font-bold">flame-grilled</span>
            with our famous range of Piri Piri flavours.
            <br className="hidden md:block" /> We love our menu — and we think you will too.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FreshFoodSection;
