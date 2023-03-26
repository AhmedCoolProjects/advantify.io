import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { FirstSection } from "../components";

const Home: NextPage = () => {
  
  const router = useRouter();
  const currentPageRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (currentPageRef.current) {
      const rect = currentPageRef.current.getBoundingClientRect();
      const pageYOffset = window.pageYOffset;
      const distanceFromTop = rect.top + pageYOffset;
      const distanceFromBottom =
        currentPageRef.current.scrollHeight -
        window.innerHeight -
        window.pageYOffset;

      if (Math.ceil(-distanceFromBottom) ===distanceFromTop) {
        router.push("/services");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Welcome | ADVANTIFY.IO</title>
      </Head>

      <main ref={currentPageRef} className="min-h-[130vh] w-full">
      
        <FirstSection />
      </main>
    </div>
  );
};

export default Home;
