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
            {posts.slice(0, 5).map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="p-2 bg-slate-900">
                    <img
                      style={{ width: "400px" }}
                      src={item.photo}
                      className="z-0 rounded-sm"
                      alt={item.title}
                    />
                    <div className="p-2 flex flex-col">
                      <div>
                        <h1 className="text-xl titleText duration-500 text-white  cursor-pointer  inline-block hover:text-gray-400">
                          {item.title.slice(0, 30)}...
                        </h1>
                      </div>
                      <div>
                        <p className="text-sm secondText font-[500!important] my-2 duration-500 text-gray-400  cursor-pointer  inline-block hover:text-gray-500">
                          {item.body.slice(0, 60)}...
                        </p>
                      </div>
                      <div>
                        <Link
                          href={`/blog/${item.slug}`}
                          className="p-2 px-4 inline-block titleText bg-slate-700 rounded-sm text-white mt-4"
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
