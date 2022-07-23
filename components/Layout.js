import Header from "./header/Header";
import Footer from "./footer/Footer";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>B.D.S</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Business Developmetn & Strategy , BDS is a company born to offer the customer the maximum experience and professionalism."
        />
        <meta
          name="keywords"
          content="BDS , Business Developmetn  Strategy,  BDS is a company born to offer the customer the maximum experience and professionalism."
        />

        <meta property="og:title" content="B.D.S" />
        <meta property="og:type" content="product.group" />
        <meta property="og:url" content="https://bds-silk.vercel.app" />

        <meta property="og:image:url" content="https://bds-silk.vercel.app/img/Preview1.png" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
