import React from "react";

const FreshFoodSection = () => {
  return (
    <div className="w-full bg-[#801b1b] relative overflow-hidden">
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/assets/images/third.png"
            alt="Ingredients - Mango, Lime, Chili"
            className="w-96 h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-white text-center md:text-left">
          <h2 className="text-yellow-400 text-3xl md:text-4xl font-extrabold mb-4">
            Simply great ingredients
          </h2>
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            The care that is taken in the preparation and cooking of our food is mirrored in the sourcing of our ingredients.
            Pepe's is fresh and flame-grilled with our famous range of Piri Piri flavours. We love our menu and hope you do too.
          </p>
        </div>

      </div>
    </div>
  );
};

export default FreshFoodSection;
