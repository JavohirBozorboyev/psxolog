import React from "react";

const Info = () => {
  return (
    <>
      <div className="mx-1">
        <div className="container px-3 md:px-2 m-auto flex flex-wrap justify-between gap-10 md:gap-0  py-10 rounded bg-slate-900">
          <div className=" flex flex-col justify-center items-center md:w-[46%] text-center">
            <p className="text-3xl text-white titleText">17+</p>
            <p className="text-2xl text-gray-100 my-2 titleText">
              Psxalogik test
            </p>
            <p className="text-gray-100 text-sm md:text-base secondText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              aperiam eaque aspernatur nihil laborum? Quia dolore fugiat vero ex
              est.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center md:w-[46%] text-center">
            <p className="text-3xl text-white titleText ">34+</p>
            <p className="text-2xl text-gray-100 my-2 titleText">My Blogs</p>
            <p className="text-gray-100 text-sm md:text-base secondText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              aperiam eaque aspernatur nihil laborum? Quia dolore fugiat vero ex
              est.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
