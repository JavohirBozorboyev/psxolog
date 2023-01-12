import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const easing = [0.6, -0.5, 0.01, 0.99];

const FadeInUP = {
  initial: { y: -60, opacity: 0 },
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

const BlogCard = ({ posts }) => {
  return (
    <motion.div initial="initial" animate="animate" className="py-8 mx-1">
      <motion.div
        variants={stagger}
        id="BlogCon"
        className="container mx-auto  md:px-0 flex flex-col gap-16"
      >
        {posts.map((item) => {
          return (
            <motion.div
              variants={stagger}
              key={item.id}
              className="cardBlog bg-slate-900 shadow-xl rounded p-3 flex justify-around flex-col items-center md:flex-row gap-4 "
            >
              <motion.div variants={FadeInUP} className="w-full md:w-1/2 left">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full lg:w-[400px] h-[300px] lg:h-[400px] xl:w-full object-cover  rounded-md overflow-hidden -mt-10"
                />
              </motion.div>
              <div className="w-full md:w-1/2 ">
                <motion.h1
                  variants={FadeInUP}
                  className="text-xl text-white titleText md:text-2xl"
                >
                  {item.title.slice(0, 80)}...
                </motion.h1>
                <motion.p
                  variants={FadeInUP}
                  className="mt-4 text-gray-400 secondText font-[500!important] text-sm md:text-base"
                >
                  {item.body.slice(0, 200)}...
                </motion.p>
                <motion.div
                  variants={FadeInUP}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  whileFocus={{ scale: 0.9 }}
                  className=" inline-block"
                >
                  <Link
                    href={`/blog/${item.slug}`}
                    className="p-2 px-4 inline-block titleText bg-slate-700 rounded-sm text-white mt-4"
                  >
                    Read More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
