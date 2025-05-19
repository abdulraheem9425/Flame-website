import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-red-800 via-[#851212] to-red-900 py-60 px-4 text-center">
      <h2 className="text-5xl sm:text-6xl font-pacifico italic text-yellow-300 drop-shadow-lg relative inline-block animate-fadeIn">
        <span className="border-b-4 border-yellow-300 pb-2">
          FLAME N BUN
        </span>
      </h2>

      <p className="text-white mt-8 text-lg sm:text-xl max-w-2xl mx-auto font-medium tracking-wide leading-relaxed animate-fadeIn delay-200">
        Flame’n’ legendary piri piri chicken, marinated in our iconic 6 tasty
        flavours, flame-grilled to sizzling perfection — while you wait.
      </p>
    </div>
  );
};

export default HeroSection;
