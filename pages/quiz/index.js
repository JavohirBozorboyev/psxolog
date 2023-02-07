/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Head from "next/head";
import QuizCartHome from "../../module/Home/QuizCartHome";
import useSWR from "swr";
import Loading from "../../components/Loader/Loading";
import Offline from "../../components/Loader/Offline";
import QuizHeader from "../../module/Quiz/QuizHeader";

const index = () => {
  const { data: quizCategory, error } = useSWR(`/api/category/`, {
    refreshInterval: 1000,
  });

  if (error) {
    return <Offline />;
  }
  return (
    <div>
      <Head>
        <title>Dr.DILSHOD | Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="psxolog, doctor "
          key="psxolog, doctor"
        />
        <meta name="google" content="notranslate" />
      </Head>
      
      <main>
        <QuizHeader />
        <div className="pb-10">
          {!quizCategory ? (
            <Loading />
          ) : (
            <QuizCartHome quizCategory={quizCategory} />
          )}
        </div>
        
      </main>
    </div>
  );
};

export default index;
