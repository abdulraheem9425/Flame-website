import React from "react";

const OurFlavours = () => {
  return (
    <section className="bg-red-700 text-white py-44 px-6 text-center overflow-hidden relative">
      <div className="max-w-4xl mx-auto">

        {/* Styled Heading with subtle animation */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-snug tracking-wide relative inline-block">
          <span className="italic text-yellow-400 animate-pulse">Flame’n Bun </span>
          <span className="text-white font-black">PICKED A </span>
          <span className="italic text-yellow-400 animate-pulse">Peck </span>
          <span className="text-white font-black">OF </span>
          <span className="italic text-yellow-400 animate-pulse">Piri Piri...</span>

          {/* Yellow underline with fade-in animation */}
          <div className="h-1 w-60 bg-yellow-400 mt-3 mx-auto rounded-full transition-opacity duration-1000 opacity-90 animate-fadeIn"></div>
        </h2>

        {/* Subtext */}
        <p className="text-xl font-bold mt-6 tracking-wide drop-shadow-md">Say it six times fast!</p>
        <p className="mt-4 text-lg px-4 sm:px-12 leading-relaxed max-w-xl mx-auto">
          Now your tongue is ready to choose from our amazing flavours and turn every bite into a magical,
          tongue-tingling delight!
        </p>
      </div>

      {/* Decorative floating circles for fun */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse-slow"></div>

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 0.9;}
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease forwards;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 6s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default OurFlavours;
