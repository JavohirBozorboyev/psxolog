import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";
import { useRouter } from "next/router";

const AppLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <Head lang="en">
        <title>Psxolog</title>
        <meta name="description" content="psxolog, test, Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {router.route !== "/login" ? <Navbar /> : null}
        <div>{children}</div>
        {router.route !== "/login" ? <BottomNav /> : null}
        {router.route !== "/login" ? <Footer /> : null}
      </main>
    </div>
  );
};

export default AppLayout;
