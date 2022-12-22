import React from "react";
import BlogCard from "../../module/Blog/BlogCard";
import BlogHeader from "../../module/Blog/BlogHeader";
import Head from "next/head";

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Psxolog || Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="psxolog, doctor Blogs  "
          key="psxolog, doctor"
        />
        <meta name="google" content="notranslate" />
      </Head>
      <main>
        <BlogHeader />
        <BlogCard posts={posts} />
      </main>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const res = await fetch(
    "https://psihologictest2.pythonanywhere.com/api/post/"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
