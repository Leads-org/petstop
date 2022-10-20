import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";

import Header from "../../components/Header";
import { fetcher } from "../../libs";
import Ratings from "../../components/Ratings";
import FormatCurrency from "../../components/FormatCurrency";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const ProductsDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { data: product, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${productId}`,
    fetcher
  );

  const clickToCart = async () => {
    let cartStorage = JSON.parse(localStorage.getItem("cartStorage") || "[]");

    let id;
    cartStorage.length != 0
      ? cartStorage.findLast((item: { id: any }) => (id = item.id))
      : (id = 0);

    var item = {
      products: productId,
      qty: 1,
    };

    //add item data to array
    cartStorage.push(item);
    localStorage.setItem("cartStorage", JSON.stringify(cartStorage));

    try {
      const cart = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts?$lookup=*&products[0]=${productId}`
      );

      if (cart.data.length > 0) {
        const respons = await axios.patch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts/${cart.data[0]._id}`,
          {
            quantity: cart.data[0].quantity + 1,
          }
        );
      } else {
        const respons = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts`,
          {
            storageId: "",
            totalPrice: 0,
            quantity: 1,
            products: [productId],
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (error) return <div>Failed to load product by id: {productId}</div>;
  if (!product) return <div>Loading product details...</div>;

  return (
    <div>
      <Head>
        <title>Products Detail | Petstop</title>
      </Head>

      {/* Header */}
      <Header />

      <div className="mt-10 mb-20">
        <div
          key={product._id}
          className="overflow-hidden rounded-lg h-90 w-full cursor-pointer m-auto px-24"
        >
          <div className="grid grid-cols-2 gap-5 mt-10">
            <Image
              alt="blog photo"
              src={product.image[0].url}
              width={500}
              height={600}
              className="max-h-40 w-full object-contain"
              priority
            />
            <a href="#" className="w-full block h-full">
              <div className="bg-white  w-full p-4">
                <h1 className=" text-black font-medium text-3xl mb-5">
                  {product.name}
                </h1>
                <Ratings />
                <p className=" text-black font-medium mb-2">
                  {product.description}
                </p>
                <div className="flex item-center justify-between mt-10">
                  <button
                    onClick={() => clickToCart()}
                    className="bg-transparent hover:bg-orange-600 text-sky-500 font-semibold shadow-md hover:text-white py-2 px-4 border border-stone-700 hover:border-transparent rounded"
                  >
                    Add to Cart - <FormatCurrency price={product.price} />
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
