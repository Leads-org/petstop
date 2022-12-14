import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="container mx-auto flex  items-center ">
      <div className="grid grid-cols-1 m-10 md:grid-cols-2  ">
        <div className="p-10 text-left">
          <h1 className="text-4xl font-bold uppercase">Best Products</h1>
          <h1 className="text-4xl font-bold uppercase">for Your Pets</h1>
          <p className="text-lg mt-5">
            Looking for the best food, accessories and more for your pet? Look
            no further than PetsHub! We offer everything you need to keep your
            pet happy and healthy, all while providing amazing customer service.
            We know that your pet is a member of the family, and we treat them
            as such!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            alt="Hero Illustration"
            src="/hero-illustration.png"
            width={400}
            height={280}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
