import React from "react";
import Header from "../module/Home/Header";
import Info from "../module/Home/Info";
import Blog from "../module/Home/Blog";
import Contact from "../module/Home/Contact";
import Info2 from "../module/Home/Info2";
import QuizCartHome from "../module/Home/QuizCartHome";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import useSWR from "swr";
import Loading from "../components/Loader/Loading";
import Offline from "../components/Loader/Offline";

export default function Home() {
  const { data: posts, error } = useSWR("/api/post/");
  const { data: quizCategory } = useSWR("/api/category/");

  if (error) {
    return <Offline />;
  }
  return (
    <>
      <Head>
        <title>Psxolog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="psxolog, doctor "
          key="psxolog, doctor"
        />
        <meta name="google" content="notranslate" />
      </Head>
      <main>
        <AnimatePresence>
          <div>
            <Header />
            <Info />
            <div className="container mx-auto py-20 px-3 md:px-0">
              <div className="flex flex-col  items-center">
                <h1 className="text-slate-800 font-bold titleText text-4xl uppercase text-center  ">
                  My Tests
                </h1>
                <p className="text-slate-700 mt-4 secondText text-base md:text-lg   text-center md:w-1/2  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis architecto corporis aut magni vel at, culpa ipsam
                  nisi ducimus assumenda incidunt,
                </p>
              </div>
            </div>
            {!quizCategory ? (
              <Loading />
            ) : (
              <QuizCartHome quizCategory={quizCategory} />
            )}
            {!posts ? <Loading /> : <Blog posts={posts} />}
            <Info2 />
            <Contact />
          </div>
        </AnimatePresence>
      </main>
    </>
  );
}
