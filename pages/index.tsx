import type { NextPage } from "next";
import Head from "next/head";
import {
  FifthSection,
  FirstSection,
  FourthSection,
  Header,
  SecondSection,
  ThirdSection,
} from "../components";
import ContactUs from "../components/ContactUs";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Welcome | ADVANTIFY.IO</title>
      </Head>

      <main className="space-y-12">
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <ContactUs />
      </main>
    </div>
  );
};

export default Home;
