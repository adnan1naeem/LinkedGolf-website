import "../styles/global.css";


export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
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
    </div>
  );
}
