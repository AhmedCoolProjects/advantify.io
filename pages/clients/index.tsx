import type { NextPage } from "next";
import Head from "next/head";
import { ThirdSection } from "../../components";

const ClientsPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Clients | ADVANTIFY.IO</title>
      </Head>

      <main className="w-full">
        <ThirdSection />
      </main>
    </div>
  );
};

export default ClientsPage;
