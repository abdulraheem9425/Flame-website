import React from "react";

const OurFlavours = () => {
  return (
    <section className="bg-red-700 text-white py-44 px-4 text-center overflow-hidden relative">
      <div className="max-w-4xl mx-auto">

        {/* Styled Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-snug tracking-wide">
          <span className="italic text-yellow-400">Pepe’s </span>
          <span className="text-white font-black">PICKED A </span>
          <span className="italic text-yellow-400">Peck </span>
          <span className="text-white font-black">OF </span>
          <span className="italic text-yellow-400">Piri Piri...</span>

          {/* Yellow underline (optional decoration) */}
          <div className="h-1 w-60 bg-yellow-400 mt-2 mx-auto rounded-full"></div>
        </h2>

        {/* Subtext */}
        <p className="text-xl font-bold mt-6">Say it six times fast!</p>
        <p className="mt-4 text-lg px-4 sm:px-12">
          Now your tongue is ready to choose from our amazing flavours and turn every bite into a magical,
          tongue-tingling delight!
        </p>
      </div>
    </section>
  );
};

export default OurFlavours;
