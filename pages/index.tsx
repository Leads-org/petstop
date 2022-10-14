import type { NextPage } from "next";
import Head from "next/head";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Satisfaction from "../components/Satisfaction";
import Newslatter from "../components/Newslatter";
import Footer from "../components/Footer";

import { ProductsId } from "../components/ProductsId";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Petshub</title>
      </Head>

      {/* Header */}
      <Header />
      <ProductsId />

      {/* Hero */}
      {/* <Hero /> */}

      {/* nyan nyan product */}
      {/* <Category /> */}

      {/* best sellers */}
      {/* <BestSeller /> */}

      {/* satisfaction guarantee */}
      {/* <Satisfaction /> */}

      {/* Sign up + save newslatter */}
      {/* <Newslatter /> */}

      {/* footer */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
