import type { NextPage } from "next";
import Head from "next/head";
import { SecondSection } from "../../components";

const ServicesPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Services | ADVANTIFY.IO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <SecondSection />
      </main>
    </div>
  );
};

export default ServicesPage;
