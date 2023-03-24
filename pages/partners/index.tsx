import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FourthSection } from "../../components";

const PartnersPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop === 0) {
        router.push("/clients");
      }
      if (scrollTop + clientHeight >= scrollHeight -1) {
        router.push("/contact-us");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);
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
