import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import NavCategory from "../../components/NavCategory";
import ProductList from "../../components/Products";

const Products: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Products | Petstop</title>
      </Head>

      <NavCategory />
      <ProductList />

      {/* footer */}
    </Layout>
  );
};

export default Products;
