import React from "react";
import Image from "next/image";

type Props = {};

const productBestSeller = [
  {
    id: 1,
    image: "/food.png",
    description: "Chicken Treats",
    price: "$ 8.00",
  },
  {
    id: 2,
    image: "/toy.png",
    description: "Toy",
    price: "$ 8.00",
  },
  {
    id: 3,
    image: "/chewiy.png",
    description: "Chewiy",
    price: "$ 8.00",
  },
  {
    id: 4,
    image: "/vitamin.png",
    description: "Vitamin",
    price: "$ 8.00",
  },
];

function BestSeller({}: Props) {
  return (
    <div className="container mt-10 mb-20">
      <h1 className="text-4xl text-center">Best Sellers</h1>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {productBestSeller.map((data) => {
          return (
            <div
              key={data.id}
              class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
            >
              <a href="#" class="w-full block h-full">
                <Image
                  alt="blog photo"
                  src={data.image}
                  width={500}
                  height={600}
                  class="max-h-40 w-full object-cover"
                />
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                  <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    {data.description}
                  </p>
                  <p class="text-gray-800 dark:text-gray-500 font-light text-md">
                    {data.price}
                  </p>
                  <div class="flex item-center mt-2">
                    <svg
                      class="w-5 h-5 fill-current text-amber-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-amber-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-amber-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                    </svg>
                  </div>
                  <div class="flex mb-4 mt-4 text-sm font-medium">
                    <button
                      type="button"
                      class="px-4 py-2 mt-2 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none w-full"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestSeller;
