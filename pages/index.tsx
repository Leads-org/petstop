import type { NextPage } from "next";
import Head from "next/head";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import Satisfaction from "../components/Satisfaction";
import Newsletter from "../components/Newsletter";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>PetStop</title>
      </Head>

      <Hero />
      <Category />
      <BestSeller />
      <Satisfaction />
      <Newsletter />
    </Layout>
  );
};

export default Home;
