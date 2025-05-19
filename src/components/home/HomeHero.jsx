import React, { useState } from "react";
import { motion } from "framer-motion";

const HomeHero = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative text-white text-center px-4 py-64 space-y-12 overflow-hidden">
      {/* Video Background */}
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          onError={() => setVideoError(true)}
        >
          <source
            src="/assets/images/home/herosection.webm"
            type="video/webm"
          />
          <source
            src="/assets/images/home/herosection.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/assets/images/home/herosection.gif"
          alt="Fallback GIF"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      )}

      {/* Heading with animation */}
      <motion.div
        className="relative bottom-44"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl italic sm:text-4xl">The</h2>
        <h1 className="text-3xl md:text-7xl font-extrabold uppercase leading-tight">
          Home of Fresh <br />
          <span className="text-yellow-400">Flame-Grilled<br /> Chicken</span>
        </h1>
      </motion.div>

      {/* Description with animation */}
      <motion.div
        className="max-w-3xl relative top-60 md:relative top-28 mx-auto text-lg font-medium leading-relaxed flex flex-col flex-auto text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-xl text-yellow-400 md:text-xl font-extrabold uppercase mb-4">
          Delicious Flame-Grilled Flame 'n Bun Chicken
        </h2>
        <p className="tracking-wider">
          We love chicken. And at Flame 'n Bun, we want everyone to enjoy the
          mouth-watering taste of freshly flame-grilled piri piri chicken — made
          fresh, whether you’re dining in or taking it home. Our menu is cooked
          fresh to order and packed with bold flavours crafted specially for
          Flame 'n Bun lovers.
        </p>
      </motion.div>
    </div>
  );
};

export default HomeHero;
