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
              <div className="p-2">
                <img
                  style={{ width: "400px" }}
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  className="z-0 rounded-md"
                />
                <div className="p-2 flex flex-col">
                  <div>
                    <Link
                      href="/"
                      className="text-xl font-bold duration-500 text-gray-900  cursor-pointer  inline-block hover:text-gray-800"
                    >
                      Hello World
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="text-sm duration-500 text-gray-600  cursor-pointer  inline-block hover:text-gray-800"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam, libero!
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="p-[6px] text-sm px-4 bg-slate-900 inline-block mt-3 rounded-md text-white"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-2">
                <img
                  style={{ width: "400px" }}
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  className="z-0 rounded-md"
                />
                <div className="p-2 flex flex-col">
                  <div>
                    <Link
                      href="/"
                      className="text-xl font-bold duration-500 text-gray-900  cursor-pointer  inline-block hover:text-gray-800"
                    >
                      Hello World
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="text-sm duration-500 text-gray-600  cursor-pointer  inline-block hover:text-gray-800"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam, libero!
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="p-[6px] text-sm px-4 bg-slate-900 inline-block mt-3 rounded-md text-white"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-2">
                <img
                  style={{ width: "400px" }}
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  className="z-0 rounded-md"
                />
                <div className="p-2 flex flex-col">
                  <div>
                    <Link
                      href="/"
                      className="text-xl font-bold duration-500 text-gray-900  cursor-pointer  inline-block hover:text-gray-800"
                    >
                      Hello World
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="text-sm duration-500 text-gray-600  cursor-pointer  inline-block hover:text-gray-800"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam, libero!
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="p-[6px] text-sm px-4 bg-slate-900 inline-block mt-3 rounded-md text-white"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-2">
                <img
                  style={{ width: "400px" }}
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  className="z-0 rounded-md"
                />
                <div className="p-2 flex flex-col">
                  <div>
                    <Link
                      href="/"
                      className="text-xl font-bold duration-500 text-gray-900  cursor-pointer  inline-block hover:text-gray-800"
                    >
                      Hello World
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="text-sm duration-500 text-gray-600  cursor-pointer  inline-block hover:text-gray-800"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam, libero!
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="p-[6px] text-sm px-4 bg-slate-900 inline-block mt-3 rounded-md text-white"
                    >
                      Read More
                    </Link>
                  </div>
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
