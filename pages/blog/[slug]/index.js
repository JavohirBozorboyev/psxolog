import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useSWR from "swr";
import Loading from "../../../components/Loader/Loading";
import Image from "next/image";
const easing = [0.6, -0.5, 0.01, 0.99];

const FadeInUP = {
  initial: { y: -60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const BlogSlug = () => {
  const router = useRouter();
  const { data, error } = useSWR(`/api/post/${router.query.slug || ""}/`);
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <Head>
        <title>Dr.DILSHOD || {data?.title} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          property="og:title"
          content={`psxolog, doctor ${data?.body}, ${data?.title} `}
          key={`psxolog, doctor ${data?.title} `}
        />
      </Head>
      <motion.main initial="initial" animate="animate" className="py-10">
        <motion.div
          variants={stagger}
          className="container mx-auto px-3 md:px-0 flex flex-col gap-8 md:flex-row relative "
        >
          <motion.div
            variants={FadeInUP}
            className="w-full md:w-1/2 md:sticky top-[30px]  md:h-[500px]"
          >
            <Image
              width={500}
              height={500}
              placeholder="blur"

              blurDataURL={data?.photo}
              src={data?.photo}
              alt={data?.title}
              className=" shadow-xl w-full md:h-[500px] object-cover rounded-md"
            />
          </motion.div>
          <div className="w-full md:w-1/2  overflow-hidden ">
            <motion.h1
              variants={FadeInUP}
              className="text-slate-700 titleText font-bold text-2xl lg:text-4xl"
            >
              {data?.title}
            </motion.h1>
            <motion.p
              variants={FadeInUP}
              className="mt-4 secondText font-[500!important] text-slate-600 md:text-lg"
            >
              {data?.body}


            </motion.p>
          </div>
        </motion.div>
      </motion.main>
    </>
  );
};

export default BlogSlug;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://psihologictest6.pythonanywhere.com/api/post/${params.slug}/`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
