import type { NextPage } from "next";
import Head from "next/head";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Satisfaction from "../components/Satisfaction";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Petshub</title>
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}
      <Hero />

      {/* nyan nyan product */}
      <Category />

      {/* best sellers */}
      <BestSeller />

      {/* satisfaction guarantee */}
      <Satisfaction />

      {/* Sign up + save newslatter */}

      {/* footer */}
    </div>
  );
};

export default Home;
