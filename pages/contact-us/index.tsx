import type { NextPage } from "next";
import Head from "next/head";
import { FifthSection } from "../../components";

const ContactUsPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Contact us | ADVANTIFY.IO</title>
      </Head>

      <main className="w-full">
        <FifthSection />
      </main>
    </div>
  );
};

export default ContactUsPage;
