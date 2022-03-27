import React from "react";
import Head from "next/head";
import Header from "../Header/Header";

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${description}`} />
        <link rel="icon" href="../../images/devam-isotipo.svg" />
      </Head>

      <Header />

      <main>{children}</main>

      <footer></footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Alejandro Mena Portfolio | Devam",
  description: "Alejandro Mena Portfolio",
};

export { Layout };
