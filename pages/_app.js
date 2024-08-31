import Head from "next/head";
import React from "react";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
