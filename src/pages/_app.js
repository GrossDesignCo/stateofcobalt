import "../styles/props.css";
import "../styles/globals.css";
import "../styles/print.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
