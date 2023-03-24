import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FirstSection } from "../components";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        router.push("/services");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
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
