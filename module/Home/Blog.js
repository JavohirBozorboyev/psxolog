import React from "react";
import SliderHome from "../../components/Slider/SliderHome";

const BlogSlider = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-3 md:px-0 py-4">
        <div className="flex flex-col  items-center">
          <h1 className="text-slate-900 font-bold lg:text-slate-900 text-4xl uppercase text-center  ">
            My Blogs
          </h1>
          <p className="text-slate-900 mt-4 lg:text-slate-900 text-lg   text-center md:w-1/2  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis architecto corporis aut magni vel at, culpa ipsam nisi
            ducimus assumenda incidunt,
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <SliderHome />
      </div>
    </div>
  );
};

export default BlogSlider;
