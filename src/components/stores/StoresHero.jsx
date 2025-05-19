import React from "react";
import { Flame, Sandwich } from "lucide-react";

const StoresHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/store/back.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center space-y-8">
        
        {/* Top Icon */}
        <Flame className="text-yellow-400 w-16 h-16 animate-pulse drop-shadow-lg" />

        {/* Heading */}
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-snug tracking-wide drop-shadow-xl">
          FIND YOUR NEAREST <br />
          <span className="text-yellow-400">Flame</span>
          <span className="text-red-400">'n Bun</span> LICIOUS STORE
        </h1>

        {/* Bottom Icon */}
        <Sandwich className="text-yellow-300 w-16 h-16 animate-bounce drop-shadow-lg" />
      </div>
    </div>
  );
};

export default StoresHero;
