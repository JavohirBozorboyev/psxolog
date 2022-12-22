import React from "react";
import Head from "next/head";
import Question from "../../components/Question/Question";
import QuizCartHome from "../../module/Home/QuizCartHome";

const index = () => {
  return (
    <div>
      <Head>
        <title>Psxolog | Quiz Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="psxolog, doctor "
          key="psxolog, doctor"
        />
        <meta name="google" content="notranslate" />
      </Head>
      {/* <Question /> */}
      <main>
        <div className="container mx-auto py-20 px-3 md:px-0">
          <div className="flex flex-col  items-center">
            <h1 className="text-slate-800 titleText font-bold titleText  text-4xl uppercase text-center  ">
              My Tests
            </h1>
            <p className="text-slate-700 secondText mt-4 secondText  text-base md:text-lg   text-center md:w-1/2  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis architecto corporis aut magni vel at, culpa ipsam
              nisi ducimus assumenda incidunt,
            </p>
          </div>
        </div>
        <QuizCartHome />
      </main>
    </div>
  );
};

export default index;
