import type { NextPage } from "next";
import Head from "next/head";

import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Satisfaction from "../components/Satisfaction";
import Newslatter from "../components/Newslatter";

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
      <Newslatter />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
