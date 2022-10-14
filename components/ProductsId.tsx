import useSWR from "swr";
import { fetcher } from "../libs";
// import { dataProducts } from "../types/dataProducts";

export const ProductsId = () => {
  const { data: products, error } = useSWR(
    "https://api.kontenbase.com/query/api/v1/bee912c9-4dfd-4be3-97cc-5b3a353e0ac6/products",
    fetcher
  );
  console.log(products);

  if (error) return <div>failed to load</div>;
  if (!products) return <div>loading...</div>;

  // render data
  return (
    <div>
      <h1>Products Route</h1>
      {products.map((products: any) => {
        return (
          <div key="{products.id}">
            <h1 className="font-bold">{`/products/${products.id}`}</h1>
            <h2>{products.title}</h2>
          </div>
        );
      })}
    </div>
  );
};
