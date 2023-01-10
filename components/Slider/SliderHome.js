// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Link from "next/link";

const SliderHome = ({ posts }) => {
  return (
    <>
      <div className="py-10 relative">
        <Swiper
          key={111}
          // effect={"spring"}
          spaceBetween={10}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <div>
            {posts.slice(-5).map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="p-2">
                    <img
                      style={{ width: "400px" }}
                      src={item.photo}
                      className="z-0 rounded-sm"
                      alt={item.title}
                    />
                    <div className="p-2 flex flex-col">
                      <div>
                        <h1 className="text-xl titleText font-bold duration-500 text-gray-900  cursor-pointer  inline-block hover:text-gray-800">
                          {item.title.slice(0, 30)}...
                        </h1>
                      </div>
                      <div>
                        <p className="text-sm secondText font-[500!important] my-2 duration-500 text-gray-600  cursor-pointer  inline-block hover:text-gray-800">
                          {item.body.slice(0, 80)}...
                        </p>
                      </div>
                      <div>
                        <Link
                          href={`/blog/${item.slug}`}
                          className="p-[6px] text-sm px-4 titleText bg-slate-900 inline-block  rounded-sm text-white"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SliderHome;
