import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components";
import Head from "next/head";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     if (typeof window !== "undefined") {
  //       const modalToggle = document.querySelector(".modal-toggle");
  //       modalToggle.checked = true;
  //     }
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  const [currentSection, setCurrentSection] = useState<string>("hero");

  const handleClickScroll = (itemId: string) => {
    const element = document.getElementById(itemId);
    if (element) {
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - 65,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen" data-theme="wireframe">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        currentSectionId={currentSection}
        handleClickScroll={handleClickScroll}
      />
      {/* <Modal /> */}
      <Component
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        {...pageProps}
      />
      <Footer />
    </div>
  );
}

export default MyApp;
