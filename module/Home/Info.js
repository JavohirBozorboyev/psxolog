import React from "react";
import SectionTitle from "./SectionTitle";

const Info = () => {
  return (
    <>
      <div className=" ">
        <div className="container px-3 md:px-0 m-auto flex flex-wrap gap-10 md:gap-0 bg-slate-900 py-10 my-6 rounded-md">
          <div className=" flex flex-col justify-center items-center md:w-1/2 text-center">
            <p className="text-3xl text-white ">17+</p>
            <p className="text-xl text-gray-100 my-1">Psxalogik test</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              aperiam eaque aspernatur nihil laborum? Quia dolore fugiat vero ex
              est.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center md:w-1/2 text-center">
            <p className="text-3xl text-white ">34+</p>
            <p className="text-xl text-gray-100 my-1">My Blogs</p>
            <p className="text-gray-400">
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
