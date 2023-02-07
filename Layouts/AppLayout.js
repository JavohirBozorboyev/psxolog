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
        <title>Dr.DILSHOD</title>
        <meta
          name="description"
          content="psxolog, test, Blogs, Quzi,  Dedahanov Dilshod Tohirovich,"
        />
        <meta name="google" content="notranslate" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Psxolog" />

        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="yes" />
        <meta name="author" content="Bozorboyev Javohir" />
        <meta name="copyright" content="Dedahanov Dilshod" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon1.png" />
        <link rel="manifest" href="/manifest.json" />
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
