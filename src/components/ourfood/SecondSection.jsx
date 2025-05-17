// FreshDipSection.jsx
import React from 'react';

const FreshDipSection = () => {
  return (
    <div className="w-full bg-red-900">
      <div className="text-white py-12 px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 max-w-7xl mx-auto">
        
        {/* Text Block */}
        <div className="flex-1 max-w-lg text-center md:text-left">
          <h2 className="text-yellow-400 text-3xl md:text-4xl font-extrabold mb-4">
            Fresh to the last dip
          </h2>
          <p className="text-2xl font-semibold">
            The same attention to detail is taken when creating our fantastic dips. We don't 'buy in' our dips but make them fresh daily in-store, so that they complement our menu, adding to that unique taste across all Flame’n Bun products.
          </p>
        </div>

        {/* Dip Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/assets/images/psp.png"
            alt="Flame’n Bun freshly made dips illustration"
            className="w-96 max-h-min md:w-80 md:h-96 "
          />
        </div>
      </div>
    </div>
  );
};

export default FreshDipSection;
