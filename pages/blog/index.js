import React from "react";
import BlogCard from "../../module/Blog/BlogCard";
import BlogHeader from "../../module/Blog/BlogHeader";
import Head from "next/head";
import useSWR from "swr";
import Loading from "../../components/Loader/Loading";
import Offline from "../../components/Loader/Offline";

const Blog = () => {
  const { data: posts, error } = useSWR(`/api/post/`, {
    refreshInterval: 1000,
  });

  if (error) {
    return <Offline />;
  }

  return (
    <>
      <Head>
        <title>Dr.DILSHOD || Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="google" content="notranslate" />
      </Head>
      <main>
        <BlogHeader />
        {!posts ? <Loading /> : <BlogCard posts={posts} />}
      </main>
    </>
  );
};

export default Blog;
