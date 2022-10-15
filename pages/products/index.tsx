import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import NavCategory from "../../components/NavCategory";
import ProductsId from "../../components/ProductsId";

const Products: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Products | Petstop</title>
      </Head>

      <Header />
      <NavCategory />
      <ProductsId />

      {/* footer */}
    </div>
  );
};

export default Products;
