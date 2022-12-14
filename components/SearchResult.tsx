import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../libs";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-petstop.svg";
import FormatCurrency from "./FormatCurrency";

export const Products = () => {
  const router = useRouter();
  const { q } = router.query;

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?$lookup=*&name[$contains]=${q}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading products...</div>;

  if (data?.length < 1) {
    return (
      <div>
        <h1>Ooops.. Product not found</h1>
        <div>
          <Link href="/">
            <a>
              <Image
                alt="Logo"
                src={logo}
                width={300}
                height={300}
                className="w-full"
              />
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-20">
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4 ">
        {data.map((produk: any) => {
          return (
            <div
              key={produk._id}
              className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto  "
            >
              <Link href={`/products/${produk._id}`}>
                <a className="w-full block h-full">
                  <Image
                    alt="blog photo"
                    src={produk.image[0].url}
                    width={500}
                    height={600}
                    className="max-h-40 w-full object-contain"
                  />
                  <div className="bg-white  w-full p-4">
                    <p className="text-gray-800  text-xl font-medium mb-2">
                      {produk.name}
                    </p>
                    <p className="text-gray-800  font-light text-md">
                      <FormatCurrency price={produk.price} />
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
