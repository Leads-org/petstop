import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/Layout";
import OurStory from "../components/OurStory";

const Story: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Story of PetStop</title>
      </Head>

      <OurStory />
      {/* Content */}
    </Layout>
  );
};

export default Story;
