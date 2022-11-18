import Link from "next/link";
import React from "react";

const QuizCartHome = () => {
  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="flex flex-col  items-center">
          <h1 className="text-slate-800 font-bold  text-4xl uppercase text-center  ">
            My Tests
          </h1>
          <p className="text-slate-700 mt-4  text-lg   text-center md:w-1/2  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis architecto corporis aut magni vel at, culpa ipsam nisi
            ducimus assumenda incidunt,
          </p>
        </div>
      </div>
      <div className="container mx-auto py-2 px-3 md:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Link
            href={"/"}
            className="overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-700 to-slate-500 p-4 lg:p-12"
          >
            <div className="flex items-center text-blue-100">
              <p className="text-sm font-bold uppercase">Feature 1</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <h2 className="mt-4 text-3xl font-semibold text-slate-100">
              This is an Amazing Feature
            </h2>

            <p className="mt-4 text-lg text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Link>
          <Link
            href={"/"}
            className="overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-700 to-slate-500 p-4 lg:p-12"
          >
            <div className="flex items-center text-blue-100">
              <p className="text-sm font-bold uppercase">Feature 1</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <h2 className="mt-4 text-3xl font-semibold text-slate-100">
              This is an Amazing Feature
            </h2>

            <p className="mt-4 text-lg text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCartHome;
