import React from "react";
import Image from "next/image";

function Satisfaction() {
  return (
    <div className="bg-[#EBC15D] pt-10 pb-10">
      <div className="grid grid-cols-1  md:grid-cols-2  ">
        <div className="ml-10 text-center">
          <Image
            alt="Satisfaction"
            src="/satisfaction-hero.png"
            width={510}
            height={474}
          />
        </div>
        <div className="p-10 text-left mt-10 md:mt-20">
          <h1 className="text-4xl font-bold">Satisfaction Guarantee</h1>
          <p className="text-lg mt-5">
            We`re lucky to have so many happy customers. We`re confident you`ll
            be one too.
          </p>
          <p className="text-lg mt-5">
            If you`re not 100% satisfied with your order, reach out to
            hello@nomz.com and we`ll send you a full refund, no questions asked.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Satisfaction;
