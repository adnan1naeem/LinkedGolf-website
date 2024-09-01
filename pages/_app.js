import React from "react";
import Head from "next/head";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/theme"; // assuming you have a custom theme
import "../styles/globals.scss"; // Your global styles

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Linked Golf | LinkedGolf is an app designed to help you build your golf network.</title>
        <meta name="description" content="LinkedGolf is an app designed to help you build your golf network." />
        <link rel="icon" href="/linked-golf-icon.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
