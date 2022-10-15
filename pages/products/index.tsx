import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import NavCategory from "../../components/NavCategory";
import ProductList from "../../components/Products";

const Products: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Products | Petstop</title>
      </Head>

      <Header />
      <NavCategory />
      <ProductList />

      {/* footer */}
    </div>
  );
};

export default Products;
