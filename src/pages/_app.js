import React from "react";
import App from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import "../../src/css/tailwind.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <AnimatePresence>
        <Head key="Head">
          <title>React Kanban Board</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="flex flex-col font-poppins subpixel-antialiased min-h-screen">
          <Component {...pageProps} key={router.route} />
        </div>
      </AnimatePresence>
    );
  }
}

export default MyApp;
