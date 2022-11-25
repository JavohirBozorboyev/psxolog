import React from "react";
import Link from "next/link";

const BlogCard = ({ posts }) => {
  console.log(posts);
  return (
    <div className="py-8">
      <div
        id="BlogCon"
        className="container mx-auto px-3 md:px-0 flex flex-col gap-16"
      >
        {posts.map((item) => {
          return (
            <div
              key={item.id}
              className="cardBlog bg-white shadow-xl rounded-md p-3 flex justify-around flex-col items-center md:flex-row gap-4 "
            >
              <div className="w-full md:w-1/2 left">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full lg:w-[400px] h-[300px] lg:h-[400px] xl:w-full object-cover  rounded-md overflow-hidden -mt-10"
                />
              </div>
              <div className="w-full md:w-1/2 ">
                <h1 className="text-xl md:text-2xl">
                  {item.title.slice(0, 80)}
                </h1>
                <p className="mt-4 text-sm md:text-base">
                  {item.body.slice(0, 200)}
                </p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="p-2 px-4 inline-block bg-slate-700 rounded-md text-white mt-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCard;
