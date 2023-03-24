import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { SecondSection } from "../../components";

const ServicesPage: NextPage = () => {
  const router = useRouter();
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight -1) {
        router.push("/clients");
      }
      if (scrollTop === 0) {
        router.push("/");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  return (
    <div
      className="flex min-h-screen flex-col overflow-y-scroll items-center justify-center py-2">
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
