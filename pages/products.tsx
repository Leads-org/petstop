import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import NavCategory from "../components/NavCategory";
import ListProducts from "../components/ListProducts";

const Products: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Products | Petstop</title>
      </Head>

      {/* Header */}
      <Header />

    {/* Navbar Categories */}
    <NavCategory />

    {/* Products */}
    <ListProducts />

      {/* footer */}
    </div>
  );
};

export default Products;
