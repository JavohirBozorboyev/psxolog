"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Avatar from "./avatar.jpg";
import { motion } from "framer-motion";

const easing = [0.6, -0.5, 0.01, 0.99];

const FadeInUP = {
  initial: {
    y: 60,
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Header = () => {
  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        className="  py-8   flex items-center"
      >
        <div className="container relative m-auto px-3 sm:px-3 lg:p-0 flex flex-col items-center justify-between   md:flex-row   ">
          <motion.div
            variants={stagger}
            className="w-full md:w-1/2 flex flex-col justify-between  items-start"
          >
            <motion.div
              variants={FadeInUP}
              className=" titleText text-4xl sm:text-5xl uppercase lg:text-6xl xl:text-6xl font-e mt-2 text-slate-900"
            >
              {" "}
              Dedaxanov Dilshod
              <motion.span className="text-slate-500">
                {" "}
                Toxirovich
              </motion.span>{" "}
            </motion.div>
            <motion.p
              variants={FadeInUP}
              className="mt-6 font-[600] secondText text-slate-700 text-lg lg:w-8/12"
            >
              {
                "Doktor tibbiy psxolog, psxoterapevt. 7-yillik ish tajribaga ega."
              }
            </motion.p>
            <motion.div
              variants={FadeInUP}
              className="flex gap-5 flex-wrap mt-8"
            >
              <Link
                href="/quiz"
                className="px-6 titleText  uppercase py-2 font-bold bg-slate-900 rounded-sm text-white  border-2 border-slate-900 duration-500 hover:bg-transparent hover:text-slate-900"
              >
                testni boshlash
              </Link>
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="https://youtube.com/channel/UCkB7jvRP4czJrAp7oSGPk2g"
                  className="px-6 titleText py-2 font-bold text-red-600 flex items-center  ml-16 sm:ml-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    className="mr-2 fill-red-600 animate-pulse"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                  </svg>
                  YouTube
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={FadeInUP}
            className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0 z-[500]"
          >
            <Image
              src={Avatar}
              placeholder="blur"
              alt="Shifokor, psiholog, do'ktor"
              className="w-[500px] z-20 lg:mr-10  rounded "
            />
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2,
                ease: easing,
              },
            }}
            className="bg-slate-900 w-[400px] h-[110%] absolute right-0 z-0  rounded-md hidden lg:block "
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
