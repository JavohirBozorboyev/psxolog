import React from "react";

const Info = ({ quizLength, postLength }) => {
  return (
    <>
      <div className="mx-1">
        <div className="container px-3 md:px-2 m-auto flex flex-wrap justify-between gap-10 md:gap-0  py-10 rounded bg-slate-900">
          <div className=" flex flex-col justify-center items-center md:w-[46%] text-center">
            <p className="text-3xl text-white titleText">{quizLength}+</p>
            <p className="text-2xl text-gray-100 my-2 titleText">
              Psxologik testlar
            </p>
            <p className="text-gray-100 text-sm md:text-base secondText">
              {"Inson psxologiyasini aniqlab beruvchi va unga tibbiy ko'mak beruvchi testlar to'plami."}
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center md:w-[46%] text-center">
            <p className="text-3xl text-white titleText ">{postLength}+</p>
            <p className="text-2xl text-gray-100 my-2 titleText">My Blogs</p>
            <p className="text-gray-100 text-sm md:text-base secondText">
              {"Psxologiyaga doir qiziqarli va foydali maqolalar. Sizga qiziq bo'lgan maqolalar blog sahifamizda yoritib borilgan."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
