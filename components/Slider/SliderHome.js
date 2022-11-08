// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const SliderHome = () => {
  return (
    <>
      <div className="py-10 relative">
        <Swiper
          effect={"coverflow"}
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
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <div className="container m-auto">
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
              <div className="p-2">
                <h1 className="text-sm text-slate-800 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  libero!
                </h1>
                <a
                  href=""
                  className="p-2 link px-4 border-2 border-slate-900  text-slate-900 font-bold mb-2 inline-block duration-500 hover:border-red-500 hover:text-red-500"
                >
                  Read More
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
              <div className="p-2">
                <h1 className="text-sm text-slate-800 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  libero!
                </h1>
                <a
                  href=""
                  className="p-2 link px-4 border-2 border-slate-900  text-slate-900 font-bold mb-2 inline-block duration-500 hover:border-red-500 hover:text-red-500"
                >
                  Read More
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
              <div className="p-2">
                <h1 className="text-sm text-slate-800 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  libero!
                </h1>
                <a
                  href=""
                  className="p-2 link px-4 border-2 border-slate-900  text-slate-900 font-bold mb-2 inline-block duration-500 hover:border-red-500 hover:text-red-500"
                >
                  Read More
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
              <div className="p-2">
                <h1 className="text-sm text-slate-800 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  libero!
                </h1>
                <a
                  href=""
                  className="p-2 link px-4 border-2 border-slate-900  text-slate-900 font-bold mb-2 inline-block duration-500 hover:border-red-500 hover:text-red-500"
                >
                  Read More
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
              <div className="p-2">
                <h1 className="text-sm text-slate-800 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  libero!
                </h1>
                <a
                  href=""
                  className="p-2 link px-4 border-2 border-slate-900  text-slate-900 font-bold mb-2 inline-block duration-500 hover:border-red-500 hover:text-red-500"
                >
                  Read More
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
              <div className="p-2">
                <h1 className="text-sm text-slate-800 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  libero!
                </h1>
                <a
                  href=""
                  className="p-2 link px-4 border-2 border-slate-900  text-slate-900 font-bold mb-2 inline-block duration-500 hover:border-red-500 hover:text-red-500"
                >
                  Read More
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
              <div className="p-2">
                <h1 className="text-sm text-slate-800 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  libero!
                </h1>
                <a
                  href=""
                  className="p-2 link px-4 border-2 border-slate-900  text-slate-900 font-bold mb-2 inline-block duration-500 hover:border-red-500 hover:text-red-500"
                >
                  Read More
                </a>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SliderHome;
