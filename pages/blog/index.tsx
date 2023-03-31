import type { NextPage } from "next";
import Head from "next/head";
import SixSection from "../../components/SixSection";

const BlogPage: NextPage = () => {


  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Blog | ADVANTIFY.IO</title>
      </Head>

      <main className="w-full min-h-[130vh]">
        <SixSection />
      </main>
    </div>
  );
};

export default BlogPage;
