import React from "react";

const familyDeals = [
  {
    id: 1,
    title: "FLAMELY 01",
    details: ["1 Whole Chicken", "6 Wings", "2 Regular Sides", "1.5 LTR Drink"],
    price: "£19.99",
  },
  {
    id: 2,
    title: "FLAMELY 02",
    details: ["2 Whole Chicken", "6 Wings", "2 Regular Sides", "1.5 LTR Drink"],
    price: "£32.99",
  },
  {
    id: 3,
    title: "FLAMELY 03",
    details: ["4 Flame Burgers", "6 Wings", "2 Regular Sides", "1.5 LTR Drink"],
    price: "£32.99",
  },
  {
    id: 4,
    title: "FLAMELY 04",
    details: ["20 Wings", "2 Regular Sides", "1.5 LTR Drink"],
    price: "£17.99",
  },
];

const sides = [
  { name: "Salad", price: "£3.99" },
  { name: "Jalapeño Bites", price: "£3.99" },
  { name: "Spicy Rice", price: "£2.99" },
  { name: "Regular Fries", price: "£1.99" },
  { name: "Large Fries", price: "£2.99" },
  { name: "Flame Loaded Fries", price: "£5.99" },
  { name: "Classic Loaded Fries", price: "£4.99" },
  { name: "Mozzarella Sticks", price: "£3.99" },
];

const MenuCard = () => {
  return (
    <section className="bg-[#7a0000] text-white py-16 px-6 font-bold">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 drop-shadow-lg tracking-wide">
          FAMILY MEAL DEAL
        </h2>

        {/* Family Deals Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {familyDeals.map((deal) => (
            <div
              key={deal.id}
              className="relative bg-[#8b0000] border-2 border-yellow-400 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-2xl text-yellow-300 mb-3">{deal.title}</h3>
              <ul className="text-sm text-white/90 space-y-1 list-disc list-inside">
                {deal.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="absolute top-4 right-4 bg-yellow-400 text-red-900 font-semibold px-5 py-1.5 text-base rounded-full shadow-md">
                {deal.price}
              </div>
            </div>
          ))}
        </div>

        {/* Sides Section */}
        <h3 className="text-3xl mt-16 mb-4 text-yellow-400 underline underline-offset-4">SIDES</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {sides.map((side, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center px-4 py-3 bg-[#990000] rounded-lg shadow-sm hover:bg-[#aa0000] transition duration-300"
            >
              <span className="text-base">{side.name}</span>
              <span className="text-yellow-300 font-semibold">{side.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCard;
