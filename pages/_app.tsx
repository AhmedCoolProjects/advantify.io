import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen" data-theme="wireframe">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
