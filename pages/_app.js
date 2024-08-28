import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../utility/theme"; // Ensure you have a custom theme or use MUI's default theme
import Head from "next/head";
import "./global.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </ThemeProvider>
  );
}
