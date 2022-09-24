import type { NextPage } from "next";
import Head from "next/head";
import { CloseAccountView } from "../views";
import Footer from "components/Footer";

const Home: NextPage = (props) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>APEDAO TOOLS</title>
        <meta name="description" content="APEDAO TOOLS to help you in the solana ecosystem" />
      </Head>
      <CloseAccountView />
      <Footer/>
    </div>
  );
};

export default Home;