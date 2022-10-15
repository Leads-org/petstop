import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";

import Header from "../../components/Header";
import { fetcher } from "../../libs";

const ProductsDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { data: product, error } = useSWR(
    `https://api.kontenbase.com/query/api/v1/bee912c9-4dfd-4be3-97cc-5b3a353e0ac6/products/${productId}`,
    fetcher
  );

  if (error) return <div>Failed to load product by id: {productId}</div>;
  if (!product) return <div>Loading product details...</div>;

  return (
    <div>
      <Head>
        <title>Products Detail | Petstop</title>
      </Head>

      {/* Header */}
      <Header />

      <div className="mt-10 mb-20">
        <div
          key={product._id}
          className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto p-10"
        >
          <a href="#" className="w-full block h-full">
            <Image
              alt="blog photo"
              src={product.image[0]?.url}
              width={500}
              height={600}
              className="max-h-40 w-full object-cover"
              priority
            />
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {product.name}
              </p>
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {product.description}
              </p>
              <p className="text-gray-800 dark:text-gray-500 font-light text-md">
                {product.price}
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
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;