import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Head lang="en">
        <title>Test Rejimida</title>
        <meta name="description" content="psxolog, test," />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div>{children}</div>
        <BottomNav />
        <Footer />
      </main>
    </div>
  );
};

export default AppLayout;
