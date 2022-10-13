import React from "react";
import Image from "next/image";
import Ratings from "./Ratings";

type Props = {};

const products = [
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
  {
    id: 5,
    image: "/food.png",
    description: "Chicken Treats",
    price: "$ 8.00",
  },
  {
    id: 6,
    image: "/toy.png",
    description: "Toy",
    price: "$ 8.00",
  },
  {
    id: 7,
    image: "/chewiy.png",
    description: "Chewiy",
    price: "$ 8.00",
  },
  {
    id: 8,
    image: "/vitamin.png",
    description: "Vitamin",
    price: "$ 8.00",
  },
];

function ListProducts({}: Props) {
  return (
    <div className="mt-10 mb-20">
      <h1 className="text-4xl text-center">All Products</h1>
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4 ">
        {products.map((data) => {
          return (
            <div
              key={data.id}
              className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto  "
            >
              <a href="#" className="w-full block h-full">
                <Image
                  alt="blog photo"
                  src={data.image}
                  width={500}
                  height={600}
                  className="max-h-40 w-full object-cover"
                />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                  <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    {data.description}
                  </p>
                  <p className="text-gray-800 dark:text-gray-500 font-light text-md">
                    {data.price}
                  </p>
                  <Ratings />
                  <div className="flex mb-4 mt-4 text-sm font-medium">
                    <button
                      type="button"
                      className="px-4 py-2 mt-2 text-[#079EF5] transition-colors duration-300 transform border rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none w-full"
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

export default ListProducts;
