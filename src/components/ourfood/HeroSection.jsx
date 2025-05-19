import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/images/food/background.jpeg")` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30 flex items-center justify-center">
        {/* Animated Heading */}
        <motion.h1
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OUR FOOD
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
