// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style>
            {`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family:
                  Inter,
                  -apple-system,
                  BlinkMacSystemFont,
                  Segoe UI,
                  Roboto,
                  Oxygen,
                  Ubuntu,
                  Cantarell,
                  Fira Sans,
                  Droid Sans,
                  Helvetica Neue,
                  Barlow-Medium,
                  Quicksand-Bold,
                  Barlow-Regular,
                  sans-serif;
              }

              a {
                color: inherit;
                text-decoration: none;
              }

              * {
                box-sizing: border-box;
              }

              img {
                max-width: 100%;
                height: auto;
              }

              :root {
                --foreground-rgb: 0, 0, 0;
                --background-start-rgb: 214, 219, 220;
                --background-end-rgb: 255, 255, 255;
              }

              @media (prefers-color-scheme: dark) {
                :root {
                  --foreground-rgb: 255, 255, 255;
                  --background-start-rgb: 0, 0, 0;
                  --background-end-rgb: 0, 0, 0;
                }
              }

              body {
                color: rgb(var(--foreground-rgb));
                background: linear-gradient(
                    to bottom,
                    transparent,
                    rgb(var(--background-end-rgb))
                  )
                  rgb(var(--background-start-rgb));
              }

              body {
                background-color: red;
              }

              @layer utilities {
                .text-balance {
                  text-wrap: balance;
                }
              }

              @font-face {
                font-family: "Barlow-Medium";
                src: local("Barlow-Medium"),
                     url("/Barlow-Medium.ttf") format("truetype");
              }

              @font-face {
                font-family: "Barlow-Regular";
                src: local("Barlow-Regular"),
                     url("/Barlow-Regular.ttf") format("truetype");
              }

              @font-face {
                font-family: "Quicksand-Bold";
                src: local("Quicksand-Bold"),
                     url("/Quicksand-Bold.ttf") format("truetype");
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
