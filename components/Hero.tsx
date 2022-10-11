import React from "react";
import Image from 'next/image'
type Props = {};

    
function Hero({}: Props) {
  return (
    <div className="box-border ">
      <div className="grid grid-cols-2 px-20 ">
        <div>
          <h1 className="text-4xl font-bold">BEST PRODUCT</h1>
          <h1 className="text-4xl font-bold">FOR YOUR PETS</h1>
          <article className="prose lg:prose-xl">
            <p>
              Looking for the best food, accessories and more for your pet? Look no further than PetsHub! We offer everything you need to keep your pet happy and healthy, all while providing amazing customer service. We know that your pet is a member of the family, and we treat them as such!
            </p>
          </article>
        </div>
        <div>
          <Image src="/hero-object.png" width={300} height={230} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
