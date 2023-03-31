import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components";
import Head from "next/head";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (typeof window !== "undefined") {
        const modalToggle = document.querySelector(".modal-toggle");
        modalToggle.checked = true;
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen" data-theme="wireframe">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Modal />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
