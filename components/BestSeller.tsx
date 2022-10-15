import useSWR from "swr";
import { fetcher } from "../libs";
import Image from "next/image";

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
              <a href="#" className="w-full block h-full">
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
                  <div className="flex mb-4 mt-4 text-sm font-medium">
                    <a
                      href={`/products/${data._id}`}
                      type="button"
                      className="px-4 py-2 mt-2 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none w-full"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
