import React from "react";
import SliderHome from "../../components/Slider/SliderHome";

const BlogSlider = ({ posts }) => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-3 md:px-0 py-4">
        <div className="flex flex-col  items-center">
          <h1 className="text-slate-900 titleText font-bold lg:text-slate-900 text-4xl uppercase text-center  ">
            Mening Blogim
          </h1>
          <p className="text-slate-900 mt-4 secondText lg:text-slate-900 text-lg   text-center md:w-1/2  ">
            {"Inson psxologiyasiga doir maqolalar va suhbatlarni o'qing va o'zingizni salomatligingiz uchun foydali ma'lumotlarni bilib oling."}
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <SliderHome posts={posts} />
      </div>
    </div>
  );
};

export default BlogSlider;
