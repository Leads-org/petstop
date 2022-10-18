import React from "react";
import Image from "next/image";
import logo from "../public/logo-petstop.svg";
import {
  FcComboChart,
  FcApproval,
  FcBriefcase,
  FcCollaboration,
} from "react-icons/fc";

import Link from "next/link";

const Cart = () => {
  return (
    <div className="">
      <h1 className="text-xl text-[#FFB156] flex justify-center pt-14 ">
        My shopping cart
      </h1>

      <div className="column-2 p-20 columns-auto pt-2">
        <div className="flex flex-row p-5 bg-slate-300">
          <div className="basis-1/2">Item</div>
          <div className="basis-1/4">Price</div>
          <div className="basis-1/4">Qty</div>
          <div className="basis-1/4">Total</div>
          <div className="basis-1/6">Action</div>
        </div>
        {/* Item cart */}
        <div className="flex flex-row p-5">
          <div className="basis-1/2">
            <div className="grid grid-cols-2 gap-5 ">
              <Image
                alt="blog photo"
                src="/food.png"
                width={100}
                height={200}
                className="max-h-40 object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold">Dog Food</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="basis-1/4">Rp 25.000,00</div>
          <div className="basis-1/4">1</div>
          <div className="basis-1/4">Rp 25.000,00</div>
          <div className="basis-1/6">
            <button className="bg-transparent hover:bg-orange-600 text-sky-500 font-semibold shadow-md hover:text-white py-2 px-4 border border-stone-700 hover:border-transparent rounded">
              Delete
            </button>
          </div>
        </div>
        {/* end item */}
        <div className="flex flex-row p-5 bg-slate-300">
          <div className="basis-1/2"></div>
          <div className="basis-1/2"></div>
          <div className="basis-1/4">Total</div>
          <div className="basis-1/4">Rp 25.000,00</div>
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
