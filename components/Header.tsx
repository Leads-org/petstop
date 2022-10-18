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
                    <a className=" font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a className=" font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Products
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/story">
                    <a className=" font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Our Story
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="lg:flex items-center gap-3">
                  <button
                    onClick={() => setSearchInput(!searchInput)}
                    aria-label="search items"
                    className="text-gray-800   focus:outline-none "
                  >
                    <Image
                      alt="Logo"
                      src={search}
                      width={35}
                      height={35}
                      className=" w-full "
                    />
                  </button>
                  <input
                    id="searchInput"
                    type="search"
                    placeholder="Search"
                    className={` ${
                      searchInput ? "hidden" : ""
                    } form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                  />
                </div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <button
                    aria-label="go to cart"
                    className="text-gray-800   focus:outline-none "
                  >
                    <Image
                      alt="Logo"
                      src={Cart}
                      width={35}
                      height={35}
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
