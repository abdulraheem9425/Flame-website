import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const slides = [
  { image: "/assets/images/home/bb.jpg", alt: "Bold Korean Burger Flavor" },
  { image: "/assets/images/home/side3.jpg", alt: "Melting Cheese Fries Delight" },
  { image: "/assets/images/home/side2.jpg", alt: "Spicy Glazed Chicken Wings" },
];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-30" />

          {/* Text & CTA */}
          <div className="absolute z-40 text-white max-w-xl px-4 sm:px-8 flex flex-col gap-4
                          left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:left-10 sm:translate-x-0 sm:text-left text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md leading-tight">
              {slide.alt}
            </h2>
            <Link to="/menu">
              <button className="px-5 py-2 text-sm sm:text-base bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl bg-black/40 hover:bg-black/60 p-2 sm:p-3 rounded-full z-50 transition"
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl bg-black/40 hover:bg-black/60 p-2 sm:p-3 rounded-full z-50 transition"
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-yellow-400 shadow-md scale-110"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeSlider;
