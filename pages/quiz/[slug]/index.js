/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Head from "next/head";
import QuizSlugCard from "../../../module/Quiz/QuizSlugCard";
import useSWR from "swr";
import Loading from "../../../components/Loader/Loading";
import { useRouter } from "next/router";
import Offline from "../../../components/Loader/Offline";
import Question from "../../../components/Question/Question";

const index = ({}) => {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState(false);
  const [cardData, setCardData] = useState();
  const [activeQuestionCard, setActiveQuestionCard] = useState(false);
  const { data, error } = useSWR(`/api/category/`);
  const { data: obj } = useSWR(`/api/category/${router.query.slug || ""}/`);

  if (error) {
    return <Offline />;
  }

  console.log(activeModal, cardData);
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
      <main className="py-8">
        <div className="container mx-auto py-10 px-3 md:px-0">
          <div className="flex flex-col  items-center">
            <h1 className="text-slate-800 titleText font-bold titleText  text-2xl uppercase text-center  ">
              {obj?.name}
            </h1>
            <p className="text-slate-700 secondText mt-4 secondText  text-base md:text-lg   text-center md:w-1/2  ">
              {obj?.body}
            </p>
          </div>
        </div>
        {!data || !obj ? (
          <Loading />
        ) : (
          <QuizSlugCard
            data={data}
            obj={obj}
            setActiveModal={setActiveModal}
            setCardData={setCardData}
          />
        )}
        {/* <Question /> */}
      </main>
    </div>
  );
};

export default index;
