import React, { useState } from "react";
import Image from "next/image";
import FormatCurrency from "./FormatCurrency";

import useSWR from "swr";
import { fetcher } from "../libs";

const Cart = () => {
  const { data: Carts, error: cartError } = useSWR(`/api/carts`, fetcher);

  if (cartError) return <div>Failed to load product by id: </div>;
  if (!Carts) return <div>Loading product details...</div>;

  let subTotal = 0;
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
        {Carts.map((data: any) => {
          let totalPrice = data.products[0].price * data.quantity;
          subTotal = subTotal + totalPrice;
          return (
            <div key={data._id} className="flex flex-row p-5">
              <div className="basis-1/2">
                <div className="grid grid-cols-2">
                  <Image
                    alt="blog photo"
                    src={data.products[0].image[0].url}
                    width={100}
                    height={200}
                    className="max-h-40 object-cover"
                  />
                  <div>
                    <h1 className="text-xl font-bold">
                      {data.products[0].name}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="basis-1/6">
                <FormatCurrency price={data.products[0].price} />
              </div>
              <div className="basis-1/6">{data.quantity}</div>
              <div className="basis-1/6">
                <FormatCurrency price={totalPrice} />
              </div>
              <div className="basis-1/6">
                <button className="bg-transparent hover:bg-orange-600 text-sky-500 font-semibold shadow-md hover:text-white py-2 px-4 border border-stone-700 hover:border-transparent rounded">
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
