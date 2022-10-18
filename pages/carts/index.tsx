import type { NextPage } from "next";
import Head from "next/head";
import CartList from "../../components/CartList";
import Layout from "../../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cart | PetStop</title>
      </Head>
      <CartList />
    </Layout>
  );
};

export default Home;
