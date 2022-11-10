import React from "react";
import SliderHome from "../../components/Slider/SliderHome";
import SectionTitle from "./SectionTitle";

const BlogSlider = () => {
  return (
    <div className="bg-slate-900 py-10 pt-16">
      <SectionTitle>My Blogs</SectionTitle>
      <SliderHome />
    </div>
  );
};

export default BlogSlider;
