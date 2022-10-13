import React from "react";
import Image from "next/image";
type Props = {};

function Satisfaction({}: Props) {
  return (
    <div className="bg-[#EBC15D]">
      <div className="grid grid-cols-2 m-10 align-middle">
        <div className="ml-10 text-center">
          <Image src="/satisfaction-hero.png" width={510} height={474} />
        </div>
        <div className="p-10 text-left mt-40">
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
