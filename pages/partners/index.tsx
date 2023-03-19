import type { NextPage } from "next";
import Head from "next/head";
import { FourthSection } from "../../components";

const PartnersPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Partners | ADVANTIFY.IO</title>
      </Head>

      <main className="w-full">
        <FourthSection />
      </main>
    </div>
  );
};

export default PartnersPage;
