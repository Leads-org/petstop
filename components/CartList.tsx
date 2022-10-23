import React, { useState } from "react";
import Image from "next/image";
import FormatCurrency from "./FormatCurrency";

import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "../libs";
import axios from "axios";
import { Carts } from "../types/carts";
import { Product } from "../types/product";
import Link from "next/link";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Cart = () => {
  const { data: productsInCart, error: cartError } = useSWR(
    `/api/carts`,
    // `/api/carts?filter`, // later can use filter
    fetcher
  );
  const { mutate } = useSWRConfig();

  if (cartError) return <div>Failed to load product by id: </div>;
  if (!productsInCart) return <div>Loading product details...</div>;

  if (productsInCart?.length < 1)
    return (
      <div className="grid grid-flow-row auto-rows-max text-2xl justify-center pt-14">
        <h1>Your shopping cart is empty</h1>
        <Image
          alt="Logo"
          src={"/cart-empty.svg"}
          width={120}
          height={120}
          className=" "
        />
      </div>
    );

  let subTotal = 0;

  const handleDeleteProductInCart = (productInCartId: string) => {
    const deleteCartById = async (productInCartId: string) => {
      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts/${productInCartId}`
        );
        const data = response.data;
        const newProductsInCart = productsInCart.filter(
          (productInCart: Product) => {
            return productInCart._id !== data._id;
          }
        );
        mutate("/api/carts", newProductsInCart);
      } catch (error) {
        console.error("Failed to delete product in cart by id (/carts/:id)");
      }
    };

    deleteCartById(productInCartId);
  };

  const handleIncreaseProduct = async (productInCart: any) => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts/${productInCart._id}`,
        {
          quantity: productInCart.quantity + 1,
          totalPrice:
            productInCart.products[0]?.price * (productInCart.quantity + 1),
        }
      );
      mutate("/api/carts");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeacreaseProduct = async (productInCart: any) => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts/${productInCart._id}`,
        {
          quantity: productInCart.quantity - 1,
          totalPrice:
            productInCart.products[0]?.price * (productInCart.quantity - 1),
        }
      );
      mutate("/api/carts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <h1 className="text-xl text-[#FFB156] flex justify-center pt-14 ">
        My shopping cart
      </h1>

      <div className="column-2 p-20 columns-auto pt-2">
        <div className="flex flex-row p-5 bg-slate-300">
          <div className="basis-1/2">Item</div>
          <div className="basis-1/6">Price</div>
          <div className="basis-1/6">Qty</div>
          <div className="basis-1/6">Total</div>
          <div className="basis-1/6">Action</div>
        </div>
        {/* Item cart */}
        {productsInCart.map((productInCart: Carts) => {
          // const totalPrice =
          //   productInCart.products[0].price * productInCart.quantity;

          subTotal = subTotal + productInCart.totalPrice;

          return (
            <div key={productInCart._id} className="flex flex-row p-5">
              <div className="basis-1/2">
                <div className="grid grid-cols-2">
                  <Image
                    alt="blog photo"
                    src={productInCart.products[0]?.image[0].url}
                    width={100}
                    height={200}
                    className="max-h-40 object-contain"
                  />
                  <div>
                    <h1 className="text-md font-bold">
                      {productInCart.products[0]?.name}
                    </h1>
                    <Link href={`/products/${productInCart.products[0]?._id}`}>
                      <a className="text-sky-500">See Details</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="basis-1/6">
                <FormatCurrency price={productInCart.products[0]?.price} />
              </div>

              <div className="basis-1/6 flex gap-2">
                <FaMinusCircle
                  onClick={() => handleDeacreaseProduct(productInCart)}
                  className=""
                />
                {productInCart.quantity}
                <FaPlusCircle
                  onClick={() => handleIncreaseProduct(productInCart)}
                  className=""
                />
              </div>
              <div className="basis-1/6">
                <FormatCurrency price={productInCart.totalPrice} />
              </div>
              <div className="basis-1/6">
                <button
                  onClick={() => handleDeleteProductInCart(productInCart._id)}
                  className="bg-transparent hover:bg-orange-600 text-sky-500 font-semibold shadow-md hover:text-white py-2 px-4 border border-stone-700 hover:border-transparent rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        {/* end item */}
        <div className="flex flex-row p-5 bg-slate-300">
          <div className="basis-1/2"></div>
          <div className="basis-1/2"></div>
          <div className="basis-1/4">Sub Total</div>
          <div className="basis-1/4 text-2xl font-bold">
            <FormatCurrency price={subTotal} />
          </div>
          <div className="basis-1/4"></div>
        </div>
      </div>

      {/* LINE */}
      <div className="flex justify-center   ">
        <div className="w-1/2  border-t border-gray-400"></div>
      </div>
    </div>
  );
};

export default Cart;
