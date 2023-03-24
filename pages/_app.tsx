import { useEffect, useState } from 'react';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
const pages = ['/', '/services', '/clients', '/partners', '/contact-us'];
const [activePage, setActivePage] = useState(0);



  return (
    <div className="min-h-screen" data-theme="wireframe">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
