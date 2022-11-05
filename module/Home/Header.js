"use client";

import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-900 py-8 text-white  flex items-center">
      <div className="container m-auto px-3 sm:p-0 flex flex-col items-center justify-between   md:flex-row mt-20  ">
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-6xl text-red-500 border-b-2 py-4 border-red-500">
            Hello World
          </h1>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab rem
            alias enim optio aperiam recusandae neque impedit porro. Adipisci
            repudiandae dignissimos repellat quibusdam quisquam inventore rerum
            iure nulla ut.
          </p>
          <a
            href=""
            className="mt-8 flex p-2 px-6 font-bold text-lg uppercase bg-white  duration-500 hover:border-red-500 hover:text-red-500 border-4 bg-transparent "
            style={{
              clipPath:
                " polygon(11% 0, 80% 0%, 100% 0, 100% 56%, 87% 100%, 0 100%, 0% 80%, 0 46%)",
            }}
          >
            Get Started
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0">
          <img
            src="https://i.pinimg.com/originals/5a/3f/e5/5a3fe51372fceb7628c703b87c15ee1e.jpg"
            alt=""
            className="w-[500px]"
            style={{
              clipPath:
                "  polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0% 20%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
