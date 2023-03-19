import type { NextPage } from "next";
import Head from "next/head";
import { FirstSection } from "../components";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Welcome | ADVANTIFY.IO</title>
      </Head>

      <main className="w-full">
        {/* <Header /> */}
        <FirstSection />
      </main>
    </div>
  );
};

export default Home;
