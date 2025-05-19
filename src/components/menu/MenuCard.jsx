import React from "react";

const foodItems = [
  {
    id: 1,
    title: "Flaming Smash",
    image: "/assets/images/menu/burger.jpg",
    description: "Beef patty, cheddar cheese, gherkins, lettuce, mayo on a brioche bun.",
    price: 8.99,
  },
  {
    id: 2,
    title: "The Moo Monster",
    image: "/assets/images/menu/img10.avif",
    description: "Double beef patty, lettuce, mayo, cheese, jalepenos, gherkins on a bun.",
    price: 11.99,
  },
  {
    id: 3,
    title: "Quarter Chicken Combo",
    image: "/assets/images/menu/pizza.jpg",
    description: "Tender grilled quarter chicken served with crispy fries and a refreshing drink.",
    price: 9.99,
  },
  {
    id: 4,
    title: "Tikka Flame",
    image: "/assets/images/menu/img4.jpg",
    description: "Chicken tikka grilled, in a wrap with hot sauce mayo and lettuce.",
    price: 6.99,
  },
  {
    id: 5,
    title: "Peri Peri Flame",
    image: "/assets/images/menu/img5.jpg",
    description: "Grilled chicken flavour of your choice, served in a wrap with lettuce and mayo.",
    price: 6.99,
  },
  {
    id: 6,
    title: "Classic Loaded Fries",
    image: "/assets/images/menu/img6.jpg",
    description: "Crispy fries loaded with flame special sauce, jalenpenos, cheese, spring onions.",
    price: 6.25,
  },
  {
    id: 7,
    title: "The Chicken Nugget Meal",
    image: "/assets/images/menu/img7.jpg",
    description: "Chicken Nuggets, fries and a fruit shoot.",
    price: 6.99,
  },
  {
    id: 8,
    title: "Chicken Popcorn Meal",
    image: "/assets/images/menu/img8.webp",
    description: "Popcorn chicken, chips and a fruit shoot.",
    price: 6.99,
  },
  {
    id: 9,
    title: "Peri Peri Chicken",
    image: "/assets/images/menu/img9.jpg",
    description: "Spicy peri peri chicken grilled to perfection.",
    price: 11.49,
  },
  {
    id: 10,
    title: "Half Flame Chicken",
    image: "/assets/images/menu/img11.jpg",
    description: "Half Chicken, flame grilled and coated in your choice of flavouring.",
    price: 10.99,
  },
  {
    id: 11,
    title: "Chicken Wings",
    image: "/assets/images/menu/img3.jpg",
    description: "Six flame grilled chicken wings and coated in your choice of flavouring.",
    price: 6.99,
  },
  {
    id: 12,
    title: "Big Flame",
    image: "/assets/images/menu/img12.jpg",
    description: "Two chicken fillets, mayo, lettuce on a bap.",
    price: 9.99,
  },
];

function Menu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-700 to-red-900 p-6 pb-36">
      <h1 className="text-6xl font-extrabold mb-20 text-center text-yellow-400 drop-shadow-[0_4px_12px_rgba(255,215,0,0.85)] tracking-widest select-none">
        Our Menu
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto rounded-xl border border-red-900 shadow-xl overflow-hidden">
        {foodItems.map((item, idx) => {
          const isTopLeft = idx === 0;
          const isTopRightLg = idx === 2;
          const isTopRightSm = idx === 1;
          const isBottomLeftSm = idx === foodItems.length - 2;
          const isBottomRight = idx === foodItems.length - 1;

          return (
            <article
              key={item.id}
              tabIndex={0}
              className={`
                relative group cursor-pointer overflow-hidden border-b border-r border-red-900
                bg-gradient-to-br from-red-800 via-red-700 to-red-900
                shadow-lg hover:shadow-yellow-500/70 rounded-none
                ${isTopLeft ? "sm:rounded-tl-xl" : ""}
                ${isTopRightSm ? "sm:rounded-tr-xl lg:rounded-tr-none" : ""}
                ${isTopRightLg ? "lg:rounded-tr-xl" : ""}
                ${isBottomLeftSm ? "sm:rounded-bl-xl lg:rounded-bl-none" : ""}
                ${isBottomRight ? "rounded-br-xl" : ""}
                transition-shadow duration-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
                min-h-[360px] sm:min-h-[420px]
              `}
              aria-label={`${item.title}: ${item.description}, priced at $${item.price.toFixed(2)}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 group-focus:scale-105 brightness-90 group-hover:brightness-110"
                loading="lazy"
                onError={(e) => (e.target.src = "/assets/images/fallback.jpg")}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition duration-500"></div>

              {/* Bottom gradient on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Content */}
              <div className="relative p-8 flex flex-col justify-between h-full text-white">
                <h2 className="text-3xl font-extrabold mb-3 drop-shadow-lg tracking-tight select-none">
                  {item.title}
                </h2>

                {/* Hover info panel */}
                <div className="opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col flex-grow justify-center">
                  <p className="mb-8 text-base leading-relaxed drop-shadow-md select-none">
                    {item.description}
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Added ${item.title} to cart!`);
                      }}
                      aria-label={`Add ${item.title} to cart`}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold px-10 py-3 rounded-full shadow-lg hover:scale-110 hover:from-yellow-300 hover:to-yellow-400 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Menu;