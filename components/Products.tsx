import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../libs";
import Image from "next/image";
import Link from "next/link";

import Ratings from "./Ratings";
import FormatCurrency from "./FormatCurrency";

export const Products = () => {
  const [count, setCount] = useState(4);

  const { data: products, error: productsError } = useSWR(
    `/api/products?count=${count}`,
    fetcher
  );

  const { data: productsCount, error: productsCountError } = useSWR(
    `/api/products/count`,
    fetcher
  );

  if (productsCountError) return <div>Failed to load</div>;
  if (!productsCount) return <div>Loading products...</div>;

  let buttonLoadMore;

  if (count < productsCount?.count) {
    buttonLoadMore = (
      <button
        onClick={() => setCount(count + 4)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Load More
      </button>
    );
  } else {
    buttonLoadMore = null;
  }

  if (productsError) return <div>failed to load</div>;
  if (!products) return <div>loading...</div>;

  // render data
  return (
    <div className="mt-10 mb-20">
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4 ">
        {products.map((data: any) => {
          return (
            <div
              key={data._id}
              className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto  "
            >
              <Link href={`/products/${data._id}`}>
                <a className="w-full block h-full">
                  <Image
                    alt="blog photo"
                    src={data.image[0].url}
                    width={500}
                    height={600}
                    className="max-h-40 w-full object-cover"
                  />
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                      {data.name}
                    </p>
                    <p className="text-gray-800 dark:text-gray-500 font-light text-md">
                      <FormatCurrency price={data.price} />
                    </p>
                    <div className="flex item-center mt-2">
                      <Ratings />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 m-10">{buttonLoadMore}</div>
    </div>
  );
};

export default Products;
