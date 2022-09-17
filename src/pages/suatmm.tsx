import type { NextPage } from "next";
import Head from "next/head";
import { SUATMMView } from "../views";
import Footer from "components/Footer";

const Home: NextPage = (props) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>SSS TOOLS</title>
        <meta name="description" content="SSS TOOLS to help you in the solana ecosystem" />
      </Head>
      <SUATMMView />
      <Footer/>
    </div>
  );
};

export default Home;