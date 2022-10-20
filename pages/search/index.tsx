import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import SearchResult from "../../components/SearchResult";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>PetStop</title>
      </Head>
      <SearchResult />
    </Layout>
  );
};

export default Home;
