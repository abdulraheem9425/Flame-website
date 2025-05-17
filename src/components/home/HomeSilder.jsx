import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "/assets/images/home/bb.jpg",
    alt: "Korean Burger",
  },
  {
    image: "/assets/images/home/side3.jpg",
    alt: "Cheese Fries",
  },
  {
    image: "/assets/images/home/side2.jpg",
    alt: "Chicken Wings",
  },
];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden bg-red-700">
      {/* Image Container */}
      <div className="w-fit h-[350px] sm:h-[600px] md:h-[500px] lg:h-[650px]">
        <img
          src={slides[current].image}
          alt={slides[current].alt}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl bg-black/40 p-2 rounded-full hover:bg-black/60"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl bg-black/40 p-2 rounded-full hover:bg-black/60"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
