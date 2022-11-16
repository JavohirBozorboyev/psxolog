"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="bg-slate-900 shadow border-b-[1px]">
        <div className="container mx-auto py-4 px-4 lg:px-0 flex items-center  justify-between ">
          <div className="flex items-center justify-between w-full ">
            <Link href="/" className=" text-2xl uppercase font-bold text-white">
              Brand Name
            </Link>
            <div className="md:hidden" onClick={handler}>
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                className="fill-white"
              >
                <path
                  d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div className="hidden md:flex text-gray-400  gap-4">
            <Link href="/" className="text-lg duration-500 hover:text-white">
              Home
            </Link>
            <Link
              href="/quiz"
              className="text-lg duration-500 hover:text-white"
            >
              Quiz
            </Link>
            <Link
              href="/blog"
              className="text-lg duration-500 hover:text-white"
            >
              Blogs
            </Link>
            <Link href="/me" className="text-lg duration-500 hover:text-white">
              Me
            </Link>
          </div>
          {/* media navbar */}
          <div
            className={`duration-500 text-gray-400  fixed bg-[#0f0f1ec0] top-0 bottom-0   z-[1500] ${
              open ? "left-0 right-0" : "left-[-100%]"
            } `}
          >
            <div className="duration-500 bg-slate-900 w-[70%] sm:w-[50%]  h-full p-4 flex flex-col justify-between relative ">
              <div>
                <Link
                  href="/"
                  className=" text-2xl uppercase font-bold text-white"
                >
                  Brand Name
                </Link>
              </div>
              <div className="flex flex-col gap-4 duration-500">
                <Link
                  href="/"
                  className="text-2xl duration-500 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/quiz"
                  className="text-2xl duration-500 hover:text-white"
                >
                  Quiz
                </Link>
                <Link
                  href="/blog"
                  className="text-2xl duration-500 hover:text-white"
                >
                  Blogs
                </Link>
                <Link
                  href="/me"
                  className="text-2xl duration-500 hover:text-white"
                >
                  Me
                </Link>
              </div>
              <div>
                <a href="tel:+998991234567">+998991234567</a>
              </div>
              <div
                onClick={handler}
                className="absolute right-0 top-[50%] bg-slate-900 p-4 -mr-8 -mt-6 rounded-full"
              >
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                  width="36"
                  height="36"
                >
                  <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
