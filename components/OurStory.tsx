import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { FaBriefcase, FaMoneyBillAlt } from "react-icons/fa";
import {
  FcComboChart,
  FcApproval,
  FcBriefcase,
  FcCollaboration,
} from "react-icons/fc";

const OurStory = () => {
  return (
    <div className="">
      <h1 className=" text-5xl text-[#FFB156] flex justify-center pt-14 ">
        About Us
      </h1>

      <div className="flex justify-center pt-14  ">
        <div className="w-1/2  border-t border-gray-400"></div>
      </div>

      {/* INFORMATION */}
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 pt-10 gap-60 place-content-center content-center">
          <div>
            <Image
              alt="Logo"
              src={logo}
              width={300}
              height={300}
              className=" w-full "
            />
          </div>
          <div className="flex flex-col gap-4 justify-start ">
            <div className="flex gap-3">
              <FcBriefcase className="text-6xl " />
              <h2 className="flex gap-3 font-semibold self-center ">
                Made in the Indonesia
              </h2>
            </div>
            <div className="flex gap-3">
              <FcCollaboration className="text-6xl" />
              <h2 className="flex gap-3 font-semibold self-center">
                {" "}
                Asian Owned Small Business
              </h2>
            </div>
            <div className="flex gap-3">
              <FcComboChart className="text-6xl" />
              <h2 className="flex gap-3 font-semibold self-center ">
                100% Satisfied{" "}
              </h2>
            </div>
            <div className="flex gap-3">
              <FcApproval className="text-6xl" />
              <h2 className="flex gap-3  font-semibold self-center">
                Best Products For Your Pet
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="flex justify-center pt-14  ">
        <div className="w-1/2  border-t border-gray-400"></div>
      </div>

      <h1 className=" text-5xl text-[#FFB156] flex justify-center pt-14 ">
        We Do All Our Own Stunts.
      </h1>
    </div>
  );
};

export default OurStory;
