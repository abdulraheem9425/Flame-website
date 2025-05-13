// FlameNBun.jsx
import React from 'react';

const FlameNBun = () => {
  return (
    <div className="min-h-screen bg-red-900 text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 space-y-10 md:space-y-0 md:space-x-10">
      
      {/* Flame Image Section */}
      <div className="flex flex-wrap justify-center max-w-lg">
        <img
          src="/assets/images/first.png"
          alt="Pepe's flame and bun heat scale graphic"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-yellow-400 text-5xl font-extrabold mb-4">Years in the making</h2>
        <p className="mb-4 text-2xl">
          Pepe's has spent years perfecting the flavours of its freshly cooked chicken. Our exclusive marinades have been
          developed by our amazing development chefs to allow our chicken to taste like no other chicken.
        </p>
        <p className="text-2xl">
          The care and thought in cooking Pepe’s products gives our food its distinctive flavour and taste.
        </p>
      </div>
    </div>
  );
};

export default FlameNBun;
