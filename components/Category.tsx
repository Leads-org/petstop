import React from "react";
import Image from 'next/image'

type Props = {};

const images = [
    {
        id: 1,
        image: "/pet-food-icon.png",
        description:"foods",
    },
    {
        id: 2,
        image: "/pet-accecories-icon.png",
        description:"accessories",
    },
    {
        id: 3,
        image: "/toys-icon.png",
        description:"toys",
    },
]

function Category({}: Props) {
  return (
    <div className="container text-center mt-10">
        <h1 className="text-4xl">nyan nyan products</h1>
        <h1 className="text-sm">Our products are the perfect way to show your pets how much you love them ❤ !</h1>
        <div className="grid grid-cols-3 gap-10 mt-10 px-40">
            {images.map((image) => {
                return(
                    <div key={image.id}>
                        <Image src={image.image} width={100} height={100} />
                        <h1 className="text-xl mt-5">{image.description}</h1>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Category;