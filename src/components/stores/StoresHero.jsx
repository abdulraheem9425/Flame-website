import React from "react";
import { Flame, Sandwich } from "lucide-react";

const StoresHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/store/back.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center space-y-6 px-4 text-center">
        <Flame className="text-white w-14 h-14" />
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          FIND YOUR NEAREST<br />
          <span className="text-yellow-400">Flame</span>
          <span className="text-red-400">'n Bun</span> LICIOUS STORE
        </h1>
        <Sandwich className="text-white w-14 h-14" />
      </div>
    </div>
  );
};

export default StoresHero;
