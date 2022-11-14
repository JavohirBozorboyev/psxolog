import React from "react";
import SliderHome from "../../components/Slider/SliderHome";
import SectionTitle from "./SectionTitle";

const BlogSlider = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto relative  sm:pl-2 md:pl-6 py-4">
        <div className="text-slate-900 px-3 lg:px-0 font-bold lg:text-white text-4xl z-10 relative uppercase  ">
          My Blogs
        </div>
        <div>
          <SliderHome />
        </div>
        <div className="bg-slate-900 w-[300px] lg:w-[400px] h-full absolute top-0 left-0 rounded-md z-0 hidden lg:block "></div>
      </div>
    </div>
  );
};

export default BlogSlider;
