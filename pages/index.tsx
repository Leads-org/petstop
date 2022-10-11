import type { NextPage } from "next";
import Head from "next/head";
import Category from "../components/Category";
import Header from "../components/Header";
import Hero from "../components/Hero";

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

      {/* satisfaction guarantee */}

      {/* Sign up + save newslatter */}

      {/* footer */}
    </div>
  );
};

export default Home;
