import React from "react";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Foods",
  },
  {
    id: 2,
    name: "Accessories",
  },
  {
    id: 3,
    name: "Toys",
  },
];

export const NavCategory = () => {
  return (
    <div className="flex items-center justify-center m-8 ">
      <div
        className="rounded-2xl inline-flex bg-[#CFCFCF] shadow-md hover:shadow-lg focus:shadow-lg"
        role="group"
      >
        <a
          href="#"
          aria-current="page"
          className="rounded-2xl inline-block px-10 py-5 leading-tight hover:bg-[#079EF5] hover:text-white  focus:bg-[#079EF5] focus:outline-none focus:ring-0 active:bg-[#079EF5] transition duration-150 ease-in-out "
        >
          All Products
        </a>
        <a
          href="#"
          className="rounded-2xl inline-block px-10 py-5 leading-tight hover:bg-[#079EF5] hover:text-white  focus:bg-[#079EF5] focus:outline-none focus:ring-0 active:bg-[#079EF5] transition duration-150 ease-in-out "
        >
          Best Sellers
        </a>
        {categories.map((category) => {
          return (
            <Link
              key={category.id}
              href={`/products?category=${category.name}`}
            >
              <a className="rounded-2xl inline-block px-10 py-5 leading-tight hover:bg-[#079EF5] hover:text-white focus:bg-[#079EF5] focus:outline-none focus:ring-0 active:bg-[#079EF5] transition duration-150 ease-in-out active">
                {category.name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavCategory;
