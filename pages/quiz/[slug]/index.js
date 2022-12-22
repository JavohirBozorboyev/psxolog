import React from "react";
import Head from "next/head";
import QuizSlugCard from "../../../module/Quiz/QuizSlugCard";

const index = () => {
  return (
    <div>
      <Head>
        <title>Psxolog | Slug Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="psxolog, doctor "
          key="psxolog, doctor"
        />
        <meta name="google" content="notranslate" />
      </Head>
      <QuizSlugCard />
    </div>
  );
};

export default index;
