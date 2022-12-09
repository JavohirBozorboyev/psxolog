import React from "react";
import BlogCard from "../../module/Blog/BlogCard";
import BlogHeader from "../../module/Blog/BlogHeader";
import useSWR from "swr";

const Blog = ({ posts }) => {
  const {data, error} = useSWR()
  return (
    <div>
      <BlogHeader />
      <BlogCard posts={posts} />
    </div>
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
  };
}
