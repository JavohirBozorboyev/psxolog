// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Link from "next/link";

const SliderHome = () => {
  return (
    <>
      <div className="py-10 relative">
        <Swiper
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
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                className="z-0"
              />
              <div className="px-2 absolute z-50 left-0 bottom-0 right-0 top-0 bg-[#0000008c] flex items-end">
                <div>
                  <Link
                    href="/"
                    className="text-sm duration-500 text-gray-300 mb-4 cursor-pointer  inline-block hover:text-white"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, libero!
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                className="z-0"
              />
              <div className="px-2 absolute z-50 left-0 bottom-0 right-0 top-0 bg-[#0000008c] flex items-end">
                <div>
                  <Link
                    href="/"
                    className="text-sm duration-500 text-gray-300 mb-4 cursor-pointer  inline-block hover:text-white"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, libero!
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                className="z-0"
              />
              <div className="px-2 absolute z-50 left-0 bottom-0 right-0 top-0 bg-[#0000008c] flex items-end">
                <div>
                  <Link
                    href="/"
                    className="text-sm duration-500 text-gray-300 mb-4 cursor-pointer  inline-block hover:text-white"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, libero!
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "400px" }}
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                className="z-0"
              />
              <div className="px-2 absolute z-50 left-0 bottom-0 right-0 top-0 bg-[#0000008c] flex items-end">
                <div>
                  <Link
                    href="/"
                    className="text-sm duration-500 text-gray-300 mb-4 cursor-pointer  inline-block hover:text-white"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, libero!
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SliderHome;
