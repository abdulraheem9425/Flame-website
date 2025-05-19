import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const sliderData = [
  { image: "/assets/images/home/food.jpg", link: "/menu" },
  { image: "/assets/images/home/food1.jpg", link: "/menu" },
  { image: "/assets/images/home/food2.jpg", link: "/menu" },
  { image: "/assets/images/home/food3.jpg", link: "/menu" },
  { image: "/assets/images/home/food7.jpg", link: "/menu" },
  { image: "/assets/images/home/food6.jpg", link: "/menu" },
];

const HomeSliderCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.ceil(sliderData.length / itemsPerView) - 1;

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const getVisibleItems = () => {
    const start = currentIndex * itemsPerView;
    return sliderData.slice(start, start + itemsPerView);
  };

  const handleImageError = (e) => {
    e.target.src = "/assets/images/fallback.jpg";
  };

  return (
    <div className="w-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-white relative overflow-hidden py-12">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl sm:text-4xl font-pacifico italic text-white">
          Fresh,{" "}
          <span className="text-yellow-300 relative z-10 inline-block">
            Flamingly-good!
            <span className="block h-[3px] bg-yellow-300 absolute bottom-0 left-0 w-full" />
          </span>
        </h2>
      </div>

      {/* Slider */}
      <div className="relative flex items-center justify-center px-4">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-yellow-300 hover:text-black transition-all duration-300 z-20"
        >
          <FaChevronLeft />
        </button>

        {/* Slides */}
        <div className="flex overflow-hidden w-full max-w-6xl gap-4 transition-transform duration-700 ease-in-out">
          {getVisibleItems().map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 h-[65vh] sm:h-[75vh] overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-500"
              onClick={() => navigate(item.link)}
            >
              <img
                src={item.image}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-yellow-300 hover:text-black transition-all duration-300 z-20"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {[...Array(maxIndex + 1)].map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === idx ? "bg-yellow-300 scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSliderCard;
