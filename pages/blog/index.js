import React from "react";
import BlogCard from "../../module/Blog/BlogCard";
import BlogHeader from "../../module/Blog/BlogHeader";

const index = ({ posts }) => {
  return (
    <div>
      <BlogHeader />
      <BlogCard posts={posts} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(`${process.env.DB_HOST}/api/post/`);
  const posts = await res.json();

  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }

  return {
    props: {
      posts,
    },
  };
}
