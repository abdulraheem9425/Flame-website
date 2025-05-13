  import React from "react";

const foodItems = [
  {
    title: "Crispy Fries & Sauces",
    image: "/public/assets/images/menu/burger.jpg",
    description: "Golden fries served with dips — a crunchy, salty favorite for all ages.",
    moreInfoLink: "/menu/fries",
    allergenLink: "/allergen/fries",
  },
  {
    title: "Classic Beef Burger",
    image: "/public/assets/images/menu/img10.avif",
    description: "Juicy grilled beef patty stacked with cheese, lettuce, tomato, and sauces.",
    moreInfoLink: "/menu/beefburger",
    allergenLink: "/allergen/beefburger",
  },
  {
    title: "Melty Cheese Pizza",
    image: "/public/assets/images/menu/pizza.jpg",
    description: "A delicious combination of grilled meats served with naan and chutney.",
    moreInfoLink: "/menu/bbqplatter",
    allergenLink: "/allergen/bbqplatter",
  },
  {
    title: " Mixed BBQ Platter",
    image: "/public/assets/images/menu/img3.jpg",
    description: "Oven-baked pizza topped with stretchy mozzarella and fresh toppings.",
    moreInfoLink: "/menu/pizza",
    allergenLink: "/allergen/pizza",
  },
  {
    title: "Grilled Lamb Chops",
    image: "/public/assets/images/menu/img4.jpg",
    description: "Tender and juicy lamb chops grilled with spices, served with veggies.",
    moreInfoLink: "/menu/lambchops",
    allergenLink: "/allergen/lambchops",
  },
  {
    title: "Spicy Shrimp Spaghetti",
    image: "/public/assets/images/menu/img5.jpg",
    description: "Flavor-packed shrimp with spaghetti and stir-fried veggies.",
    moreInfoLink: "/menu/shrimppasta",
    allergenLink: "/allergen/shrimppasta",
  },
  {
    title: "Chinese Chow Mein",
    image: "/public/assets/images/menu/img6.jpg",
    description: "Stir-fried noodles with bell peppers, cabbage, and classic soy flavor.",
    moreInfoLink: "/menu/chowmein",
    allergenLink: "/allergen/chowmein",
  },
  {
    title: "Creamy Chicken Pasta",
    image: "/public/assets/images/menu/img7.jpg",
    description: "Penne pasta tossed in a rich white sauce with tender chicken slices.",
    moreInfoLink: "/menu/penne",
    allergenLink: "/allergen/penne",
  },
  {
    title: "Crispy Chicken Strips",
    image: "/public/assets/images/menu/img9.jpg",
    description: "Breaded chicken tenders served hot with green salad and sauce.",
    moreInfoLink: "/menu/chickenstrips",
    allergenLink: "/allergen/chickenstrips",
  },
];


  const MiddleCard = () => {
    return (
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="group flex-1 relative bg-cover bg-center h-72 lg:h-[350px] transition-all duration-500"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>

            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-2xl font-extrabold text-yellow-300 mb-2 drop-shadow">
                {item.title}
              </h2>
              <p className="text-sm lg:text-base mb-4">{item.description}</p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a
                  href={item.moreInfoLink}
                  className="bg-yellow-300 text-red-800 font-bold px-4 py-2 rounded hover:bg-yellow-400 transition"
                >
                  More Info
                </a>
                <a
                  href={item.allergenLink}
                  className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-red-700 transition"
                >
                  Allergen Info
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };

  export default MiddleCard;
