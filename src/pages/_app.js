import { Fragment } from "react";
import Head from "next/head";
import Nav from "../components/navbar";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      {Component.name == "SignIn" ? (
        <Component {...pageProps} />
      ) : (
        <div>
          <Nav />
          <Component {...pageProps} />
        </div>
      )}
    </Fragment>
  );
}

export default MyApp;
