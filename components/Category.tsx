import Image from "next/image";

const images = [
  {
    id: 1,
    imageUrl: "/pet-food-icon.png",
    description: "foods",
  },
  {
    id: 2,
    imageUrl: "/pet-accecories-icon.png",
    description: "accessories",
  },
  {
    id: 3,
    imageUrl: "/toys-icon.png",
    description: "toys",
  },
];

function Category() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl mb-4">Favorite Products</h1>
      <h1 className="text-sm">
        Our products are the perfect way to show your pets how much you love
        them ❤!
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-10 px-40">
        {images.map((image) => {
          return (
            <div key={image.id}>
              <Image
                alt={image.description}
                src={image.imageUrl}
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-5">{image.description}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
