import type { NextPage } from "next";
import Head from "next/head";

import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Satisfaction from "../components/Satisfaction";
import Newsletter from "../components/Newsletter";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PetStop</title>
      </Head>

      <Header />
      <Hero />
      <Category />
      <BestSeller />
      <Satisfaction />
      <Newsletter />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
