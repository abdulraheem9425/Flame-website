import React from "react";
import { motion } from "framer-motion";

const dips = [
  { name: "FLAME’N BUN PIRI PIRI MAYO", bgColor: "bg-yellow-400", textColor: "text-red-700" },
  { name: "FLAME’N BUN SWEET CHILLI", bgColor: "bg-red-700", textColor: "text-yellow-400" },
  { name: "FLAME’N BUN CHIMICHURRI MAYO", bgColor: "bg-green-400", textColor: "text-yellow-400" },
  { name: "FLAME’N BUN GARLIC MAYO", bgColor: "bg-yellow-100", textColor: "text-red-700" },
  { name: "FLAME’N BUN EXTRA HOT", bgColor: "bg-red-900", textColor: "text-red-400" },
];

const DipsComponent = () => {
  return (
    <section 
      className="bg-red-700 text-white py-24 px-4 sm:px-8 text-center overflow-hidden"
      aria-labelledby="dips-heading"
      role="region"
    >
      {/* Animated Heading */}
      <motion.h2
        id="dips-heading"
        className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-12 select-none"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        FLAME’N BUN DIPS
        <span 
          className="block w-20 h-1 bg-white mx-auto mt-3 rounded"
          aria-hidden="true"
        />
      </motion.h2>

      {/* Dip Circles */}
      <div className="flex justify-center flex-wrap gap-8 sm:gap-10 mb-16" role="list">
        {dips.map((dip, idx) => (
          <motion.div
            key={idx}
            role="listitem"
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white shadow-xl flex items-center justify-center relative z-10
                hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2 cursor-pointer"
              tabIndex={0}
              aria-label={`${dip.name} dip`}
            >
              <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full ${dip.bgColor} flex items-center justify-center p-2`}>
                <span
                  className={`text-center text-sm sm:text-md font-extrabold leading-tight break-words ${dip.textColor}`}
                >
                  {dip.name}
                </span>
              </div>
            </div>
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 bg-white rotate-45 -mt-2 z-0"
              aria-hidden="true"
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.p
        className="text-xl sm:text-2xl font-bold select-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Take your sides to a whole new level with Flame’n Bun Dips
      </motion.p>
      <motion.p
        className="mt-2 text-base sm:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Available in 5 tasty flavours — plus you get one <span className="font-bold">FREE</span> with every meal.
      </motion.p>
    </section>
  );
};

export default DipsComponent;
