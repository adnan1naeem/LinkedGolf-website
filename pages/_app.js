import React from "react";
import Head from "next/head";
// Styles
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Linked Golf | LinkedGolf is an app designed to help you build your
          golf network.
        </title>
        <meta
          name="description"
          content="LinkedGolf is an app designed to help you build your golf network. Get out on the course more often by scheduling outings with your buddies whose golf availability matches yours."
        />
        <link rel="icon" href="/linked-golf-icon.png" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
