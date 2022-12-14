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

  const clickToCart = async (productPrice: number) => {
    try {
      const cart = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts?$lookup=*&products[0]=${productId}`
      );

      const priceProduct = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts?$lookup=*&products[0]=${productId}`
      );

      if (cart.data.length > 0) {
        const response = await axios
          .patch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts/${cart.data[0]._id}`,
            {
              quantity: cart.data[0].quantity + 1,
              totalPrice: productPrice * (cart.data[0].quantity + 1),
            }
          )
          .then(() => {
            router.push("/carts");
          });
      } else {
        const response = await axios
          .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/carts`, {
            storageId: "",
            totalPrice: productPrice, // TODO: totalPrice calculated here
            quantity: 1,
            products: [productId],
          })
          .then(() => {
            router.push("/carts");
          });
      }
    } catch (error) {
      console.error(error);
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
                    onClick={() => clickToCart(product.price)}
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
