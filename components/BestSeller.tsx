import useSWR from "swr";
import { fetcher } from "../libs";
import Image from "next/image";
import Ratings from "./Ratings";
import Link from "next/link";
import FormatCurrency from "./FormatCurrency";

export const BestSeller = () => {
  const { data: products, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?$limit=4`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!products) return <div>loading...</div>;

  // render data
  return (
    <div className="mt-10 mb-20">
      <h1 className="text-4xl text-center">Best Sellers</h1>
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4 ">
        {products.map((data: any) => {
          return (
            <div
              key={data._id}
              className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto  "
            >
              <Link href={`/products/${data._id}`}>
                <a href="#" className="w-full block h-full">
                  <Image
                    alt="blog photo"
                    src={data.image[0].url}
                    width={500}
                    height={600}
                    className="max-h-40 w-full object-contain"
                  />
                  <div className="bg-white  w-full p-4">
                    <p className="text-gray-800  text-xl font-medium mb-2">
                      {data.name}
                    </p>
                    <p className="text-gray-800  font-light text-md">
                      <FormatCurrency price={data.price} />
                    </p>
                    <div className="flex item-center mt-2">
                      <Ratings />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
