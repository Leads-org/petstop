import useSWR from "swr";
import { fetcher } from "../libs";
import Image from "next/image";
import Link from "next/link";

export const BestSeller = () => {
  const { data: products, error } = useSWR(
    `https://api.kontenbase.com/query/api/v1/bee912c9-4dfd-4be3-97cc-5b3a353e0ac6/products?$limit=4`,
    fetcher
  );
  console.log(products);

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
                <a className="w-full block h-full">
                  <Image
                    alt="blog photo"
                    src={data.image[0].url}
                    width={500}
                    height={600}
                    className="max-h-40 w-full object-cover"
                  />
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                      {data.name}
                    </p>
                    <p className="text-gray-800 dark:text-gray-500 font-light text-md">
                      {data.price}
                    </p>
                    <div className="flex item-center mt-2">
                      <svg
                        className="w-5 h-5 fill-current text-amber-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 fill-current text-amber-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 fill-current text-amber-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 fill-current text-gray-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 fill-current text-gray-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
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
