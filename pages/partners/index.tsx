import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { FourthSection } from "../../components";

const PartnersPage: NextPage = () => {
  const router = useRouter();
  const currentPageRef = useRef<HTMLDivElement>(null);
  let canNavigate = false;

  const handleScroll = () => {
    if (currentPageRef.current) {
      const rect = currentPageRef.current.getBoundingClientRect();
      const pageYOffset = window.pageYOffset;
      const distanceFromTop = rect.top + pageYOffset;
      const distanceFromBottom =
        currentPageRef.current.scrollHeight -
        window.innerHeight -
        window.pageYOffset;

      if (pageYOffset > 0) {
        canNavigate = true;
      }

      if (Math.ceil(-distanceFromBottom) ===distanceFromTop) {
        router.push("/contact-us");
      }
      if (pageYOffset === 0 && canNavigate) {
        router.push("/clients");
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
        <title>Partners | ADVANTIFY.IO</title>
      </Head>

      <main ref={currentPageRef} className="min-h-[130vh] w-full">
        <FourthSection />
      </main>
    </div>
  );
};

export default PartnersPage;
