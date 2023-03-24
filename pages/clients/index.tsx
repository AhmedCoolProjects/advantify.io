import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThirdSection } from "../../components";

const ClientsPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop === 0) {
        router.push("/services");
      }
      if (scrollTop + clientHeight >= scrollHeight -1) {
        router.push("/partners");
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
        <title>Clients | ADVANTIFY.IO</title>
      </Head>

      <main className="w-full">
        <ThirdSection />
      </main>
    </div>
  );
};

export default ClientsPage;
