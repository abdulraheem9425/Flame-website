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
  { image: "/assets/images/home/food.jpg", link: "/menu" },
  { image: "/assets/images/home/food3.jpg", link: "/menu" },
  { image: "/assets/images/home/food7.jpg", link: "/menu" },
];

const HomeSliderCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const navigate = useNavigate();

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
    e.target.src = "/assets/images/fallback.jpg"; // Replace with your fallback image
  };

  return (
    <div className="md:w-full h-[650px] bg-red-700 text-white relative overflow-hidden">
      {/* Heading */}
 <div className="w-full text-center py-8 px-4">
  <h2 className="text-4xl sm:text-5xl font-pacifico italic text-white relative inline-block">
    Fresh, 
    <span className="text-yellow-300 relative z-10">Flamingly-good!</span>
    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-300 transform translate-y-1/2"></span>
  </h2>
</div>


      {/* Image Slider */}
      <div className="h-[calc(100%-150px)] flex items-center justify-center relative px-4">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full hover:bg-yellow-300 hover:text-black transition z-20 bg-white/10"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>

        {/* Images */}
        <div className="flex overflow-hidden w-full max-w-[1200px]">
          {getVisibleItems().map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full sm:w-1/3 h-[50vh] sm:h-[70vh] overflow-hidden"
            >
              <img
                src={item.image}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => navigate(item.link)}
                onError={handleImageError}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full hover:bg-yellow-300 hover:text-black transition z-20 bg-white/10"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-1 w-full flex justify-center gap-2 z-20">
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
