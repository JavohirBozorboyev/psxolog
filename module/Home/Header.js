"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Avatar from "./avatar.jpg";

const Header = () => {
  return (
    <div className="  py-8   flex items-center">
      <div className="container relative m-auto px-3 sm:px-2 md:p-0 flex flex-col items-center justify-between   md:flex-row   ">
        <div className="w-full md:w-1/2 flex flex-col justify-between  items-start">
          <span className=" text-4xl sm:text-6xl uppercase lg:text-6xl xl:text-7xl font-bold mt-2 text-slate-900">
            {" "}
            Deddahanov Dilshod
            <span className="text-slate-500"> Toxrovich</span>{" "}
          </span>
          <p className="mt-6 text-slate-700 text-lg lg:w-8/12">
            {
              "Vrach Tibbiy psixolog, psixoterapevt. 8-yillik ish tajribasiga ega  va 500 dan ortiq bemorlarga tibbiy hizmat ko'rsatgan."
            }
          </p>
          <div className="flex gap-5 flex-wrap mt-8">
            <Link
              href="/"
              className="px-6 py-2 font-bold bg-slate-900 rounded-md text-white capitalize text-lg border-2 border-slate-900 duration-500 hover:bg-transparent hover:text-slate-900"
            >
              Start Test
            </Link>
            <Link
              href="https://youtube.com/channel/UCkB7jvRP4czJrAp7oSGPk2g"
              className="px-6 py-2 font-bold text-slate-900 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="mr-2 fill-slate-900"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
              </svg>
              Watch demos
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0">
          <Image
            src={Avatar}
            placeholder="blur"
            alt="Shifokor, psiholog, do'ktor"
            className="w-[500px] z-20 lg:mr-10  rounded-md"
          />
        </div>
        <div className="bg-gradient-to-br from-slate-700 to-slate-500 w-[400px] h-[110%] absolute right-0 z-0  rounded-md hidden lg:block "></div>
      </div>
    </div>
  );
};

export default Header;
