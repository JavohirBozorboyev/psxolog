import React from "react";
import SliderHome from "../../components/Slider/SliderHome";

const BlogSlider = () => {
  return (
    <div className="bg-slate-900 py-10 pt-16">
      <div className="container m-auto px-3 md:px-0">
        <div>
          <h1
            style={{
              clipPath:
                " polygon(11% 0, 80% 0%, 100% 0, 100% 56%, 87% 100%, 0 100%, 0% 80%, 0 46%)",
            }}
            className="text-3xl text-white text-center  uppercase border-2 border-white py-4"
          >
            My Blogs
          </h1>
        </div>
      </div>
      <SliderHome />
    </div>
  );
};

export default BlogSlider;
