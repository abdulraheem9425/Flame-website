// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/images/food/background.jpeg")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">OUR FOOD</h1>
      </div>
    </div>
  );
};

export default HeroSection;
