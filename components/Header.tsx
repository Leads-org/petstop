import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/logo-petstop.svg";
import search from "../public/search.svg";
import Cart from "../public/Cart.svg";
import Image from "next/image";

function Header() {
  const [searchInput, setSearchInput] = useState(true);

  return (
    <div className="bg-[#FFD7A8]">
      <div>
        <div className="relative">
          <div className="  px-6 py-3">
            <nav className="container mx-auto flex items-center justify-between">
              <Link href="/">
                <a>
                  <Image
                    alt="Logo"
                    src={logo}
                    width={120}
                    height={120}
                    className=" w-full "
                  />
                </a>
              </Link>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <Link href="/">
                    <a className="dark:text-black font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a className="dark:text-black font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Products
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/story">
                    <a className="dark:text-black font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Our Story
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="hidden lg:flex items-center">
                  <button
                    onClick={() => setSearchInput(!searchInput)}
                    aria-label="search items"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-black focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <Image
                      alt="Logo"
                      src={search}
                      width={30}
                      height={30}
                      className=" w-full "
                    />
                  </button>
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="search"
                    className={` ${
                      searchInput ? "hidden" : ""
                    } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
                  />
                </div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <button
                    aria-label="go to cart"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-black focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <Image
                      alt="Logo"
                      src={Cart}
                      width={30}
                      height={30}
                      className=" w-full "
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
