/* eslint-disable jsx-a11y/alt-text */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "./Logo.png";
const NavLink = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Quiz",
    url: "/quiz",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];

const easing = [0.6, -0.5, 0.01, 0.99];

const FadeInUPNav = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};
const LinkPar = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: 0 },
  },
};
const LinkAnim = {
  open: {
    y: 0,
    opacity: 1,

    transition: {
      y: { stiffness: 1000, velocity: 100 },
    },
  },
  closed: {
    y: 0,
    opacity: 0,

    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handler = () => {
    setOpen(!open);
  };
  return (
    <div>
      <motion.nav className="bg-slate-900 m-1 md:m-0 md:rounded-none rounded shadow border-b-[1px] relative">
        <div className="container mx-auto py-4 px-4 lg:px-0 flex flex-wrap items-center  justify-between ">
          <div className="flex items-center justify-between w-full md:w-1/3 ">
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className=" titleText text-white flex gap-2 items-center "
            >
              <Image src={Logo} alt="Dedahanov Dilshod" width={40} height={40} /> <span className="uppercase font-bold text-xl">Dedahanov</span>
            </Link>
            <div className=" md:hidden " onClick={handler}>
              {open ? (
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  className="fill-white active:rotate-180 duration-500"
                  type="button"
                >
                  <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
              ) : (
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  className="fill-white  active:rotate-180 duration-500"
                  type="button"
                >
                  <path
                    d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                    fillRule="nonzero"
                  />
                </svg>
              )}
            </div>
          </div>
          <div
            className={`  w-full mt-10 md:flex flex-col gap-1 md:w-1/3 md:mt-0 md:flex-row md:justify-center ${open ? "flex" : "hidden"
              } `}
          >
            {NavLink.map((link, index) => {
              return (
                <Link
                  key={index}
                  onClick={handler}
                  href={link.url}
                  className={`text-lg block text-gray-400 secondText duration-500 hover:bg-slate-700 hover:text-white  p-4 rounded md:p-2 md:px-4 ${router.route === link.url ? "text-white bg-slate-700" : null
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div
            className={` w-full mt-2 md:flex duration-500  items-center gap-2 md:w-1/3 md:mt-0 md:justify-end  md:gap-1 ${open ? "flex" : "hidden"
              } `}
          >
            <a
              href="https://t.me/tibbiypsixologiyauz"
              target={"_blank"}
              className="bg-slate-700 p-4 md:py-2 rounded hover:-mt-2 duration-500" rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24" height="24"
                viewBox="0 0 30 30"
                className="fill-gray-100 duration-500 hover:scale-110 hover:rotate-12"
              >
                <path d="M 25.154297 3.984375 C 24.829241 3.998716 24.526384 4.0933979 24.259766 4.2011719 C 24.010014 4.3016357 23.055766 4.7109106 21.552734 5.3554688 C 20.048394 6.0005882 18.056479 6.855779 15.931641 7.7695312 C 11.681964 9.5970359 6.9042108 11.654169 4.4570312 12.707031 C 4.3650097 12.746607 4.0439208 12.849183 3.703125 13.115234 C 3.3623292 13.381286 3 13.932585 3 14.546875 C 3 15.042215 3.2360676 15.534319 3.5332031 15.828125 C 3.8303386 16.121931 4.144747 16.267067 4.4140625 16.376953 C 5.3912284 16.775666 8.4218473 18.015862 8.9941406 18.25 C 9.195546 18.866983 10.29249 22.222526 10.546875 23.044922 C 10.714568 23.587626 10.874198 23.927519 11.082031 24.197266 C 11.185948 24.332139 11.306743 24.45034 11.453125 24.542969 C 11.511635 24.579989 11.575789 24.608506 11.640625 24.634766 L 11.644531 24.636719 C 11.659471 24.642719 11.67235 24.652903 11.6875 24.658203 C 11.716082 24.668202 11.735202 24.669403 11.773438 24.677734 C 11.925762 24.726927 12.079549 24.757812 12.216797 24.757812 C 12.80196 24.757814 13.160156 24.435547 13.160156 24.435547 L 13.181641 24.419922 L 16.191406 21.816406 L 19.841797 25.269531 C 19.893193 25.342209 20.372542 26 21.429688 26 C 22.057386 26 22.555319 25.685026 22.875 25.349609 C 23.194681 25.014192 23.393848 24.661807 23.478516 24.21875 L 23.478516 24.216797 C 23.557706 23.798129 26.921875 6.5273437 26.921875 6.5273438 L 26.916016 6.5507812 C 27.014496 6.1012683 27.040303 5.6826405 26.931641 5.2695312 C 26.822973 4.8564222 26.536648 4.4608905 26.181641 4.2480469 C 25.826669 4.0352506 25.479353 3.9700339 25.154297 3.984375 z M 24.966797 6.0742188 C 24.961997 6.1034038 24.970391 6.0887279 24.962891 6.1230469 L 24.960938 6.1347656 L 24.958984 6.1464844 C 24.958984 6.1464844 21.636486 23.196371 21.513672 23.845703 C 21.522658 23.796665 21.481573 23.894167 21.439453 23.953125 C 21.379901 23.91208 21.257812 23.859375 21.257812 23.859375 L 21.238281 23.837891 L 16.251953 19.121094 L 12.726562 22.167969 L 13.775391 17.96875 C 13.775391 17.96875 20.331562 11.182109 20.726562 10.787109 C 21.044563 10.471109 21.111328 10.360953 21.111328 10.251953 C 21.111328 10.105953 21.035234 10 20.865234 10 C 20.712234 10 20.506484 10.14875 20.396484 10.21875 C 18.963383 11.132295 12.671823 14.799141 9.8515625 16.439453 C 9.4033769 16.256034 6.2896636 14.981472 5.234375 14.550781 C 5.242365 14.547281 5.2397349 14.548522 5.2480469 14.544922 C 7.6958673 13.491784 12.47163 11.434667 16.720703 9.6074219 C 18.84524 8.6937992 20.838669 7.8379587 22.341797 7.1933594 C 23.821781 6.5586849 24.850125 6.1218894 24.966797 6.0742188 z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100082679889109&mibextid=ZbWKwL"
              target={"_blank"}
              className="bg-slate-700 p-4 md:py-2 rounded hover:-mt-2 duration-500" rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-100 duration-500 hover:scale-110 hover:rotate-12" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" /></svg>
            </a>
            <a
              href="https://www.instagram.com/p/ClgUShIIyjD/?utm_source=ig_web_copy_link"
              target={"_blank"}
              className="bg-slate-700 p-4 md:py-2 rounded hover:-mt-2 duration-500" rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                className="fill-gray-100 duration-500 hover:scale-110 hover:rotate-12"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </a>
            <a
              href={"https://www.youtube.com/channel/UCkB7jvRP4czJrAp7oSGPk2g"}
              target={"_blank"}
              className="bg-slate-700 p-4 md:py-2 rounded hover:-mt-2 duration-500" rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                className="fill-gray-100 duration-500 hover:scale-110 hover:rotate-12"
              >
                <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
