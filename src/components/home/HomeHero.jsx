import React, { useState } from "react";

const HomeHero = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative text-white text-center px-4 py-60 space-y-12 overflow-hidden">
      {/* Video Background */}
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          onError={() => setVideoError(true)}
        >
          <source src="/assets/images/home/herosection.webm" type="video/webm" />
          <source src="/assets/images/home/herosection.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/public/assets/images/home/herosection.gif"
          alt="Fallback GIF"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      )}

      {/* Heading */}
      <div className="relative bottom-44 ">
        <h2 className="text-6xl italic sm: text-2xl">The</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight ">
          Home of Fresh <br />
          <span className="text-yellow-400">Flame-Grilled<br /> Chicken</span>
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-3xl  md:relative top-36 mx-auto text-lg font-medium leading-relaxed flex flex-col flex-auto text-white ">
        <h2 className="text-2xl md:text-2xl font-extrabold mb-2">
          224 Locations Serving
        </h2>
        <h2 className="text-2xl md:text-xl font-extrabold uppercase mb-4">
          Delicious Flame-Grilled Flame 'n Bun Chicken
        </h2>
        <p className="tracking-tighter">
          We love chicken. And at Flame 'n Bun, we want everyone to enjoy the
          mouth-watering taste of freshly flame-grilled piri piri chicken — 
          made fresh, whether you’re dining in or taking it home. Our menu is
          cooked fresh to order and packed with bold flavours crafted specially
          for Flame 'n Bun lovers.
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
