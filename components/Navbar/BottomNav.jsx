import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const BottomNav = () => {
  const router = useRouter();
  const active = router.asPath;
  return (
    <div>
      <section className="block fixed inset-x-0 bottom-0 z-[1000] bg-slate-900 md:hidden shadow shadow-white">
        <div className="flex justify-between py-3">
          <Link
            href="/"
            className="w-full duration-500  flex flex-col justify-center items-center  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 48 48"
              className={`duration-500 fill-gray-400 hover:fill-white ${
                active == "/" ? "fill-white" : null
              }`}
            >
              <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
            </svg>
          </Link>
          <Link
            href="/blog"
            className="w-full duration-500  flex flex-col justify-center items-center  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 50 50"
              className={`duration-500 fill-gray-400 hover:fill-white ${
                active == "/blog" ? "fill-white" : null
              }`}
            >
              <path d="M 9 4 C 6.239 4 4 6.239 4 9 L 4 41 C 4 43.761 6.239 46 9 46 L 41 46 C 43.761 46 46 43.761 46 41 L 46 9 C 46 6.239 43.761 4 41 4 L 9 4 z M 20 12 L 25 12 C 29.42 12 33.033 15.632547 33 20.060547 C 32.991 21.141547 33.919 22 35 22 L 36 22 C 37.105 22 38 22.895 38 24 L 38 30 C 38 34.4 34.4 38 30 38 L 20 38 C 15.6 38 12 34.4 12 30 L 12 25 L 12 20 C 12 15.6 15.6 12 20 12 z M 20 18 C 18.9 18 18 18.9 18 20 C 18 21.1 18.9 22 20 22 L 25 22 C 26.1 22 27 21.1 27 20 C 27 18.9 26.1 18 25 18 L 20 18 z M 20 28 C 18.9 28 18 28.9 18 30 C 18 31.1 18.9 32 20 32 L 30 32 C 31.1 32 32 31.1 32 30 C 32 28.9 31.1 28 30 28 L 20 28 z"></path>
            </svg>
          </Link>
          <Link
            href="/quiz"
            className="w-full duration-500  flex flex-col justify-center items-center  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 50 50"
              className={`duration-500 fill-gray-400 hover:fill-white ${
                active == "/quiz" ? "fill-white" : null
              }`}
            >
              <path d="M 13 4 C 8.038 4 4 8.037 4 13 L 4 37 C 4 41.963 8.038 46 13 46 L 37 46 C 41.962 46 46 41.963 46 37 L 46 13 C 46 8.037 41.962 4 37 4 L 13 4 z M 13 11 C 15.206 11 17 12.794 17 15 C 17 17.206 15.206 19 13 19 C 10.794 19 9 17.206 9 15 C 9 12.794 10.794 11 13 11 z M 13 12 C 11.346 12 10 13.346 10 15 C 10 16.654 11.346 18 13 18 C 14.654 18 16 16.654 16 15 C 16 13.346 14.654 12 13 12 z M 13 13 C 14.105 13 15 13.895 15 15 C 15 16.105 14.105 17 13 17 C 11.895 17 11 16.105 11 15 C 11 13.895 11.895 13 13 13 z M 21 14 L 39 14 C 39.553 14 40 14.447 40 15 C 40 15.553 39.553 16 39 16 L 21 16 C 20.447 16 20 15.553 20 15 C 20 14.447 20.447 14 21 14 z M 13 21 C 15.206 21 17 22.794 17 25 C 17 27.206 15.206 29 13 29 C 10.794 29 9 27.206 9 25 C 9 22.794 10.794 21 13 21 z M 13 22 C 11.346 22 10 23.346 10 25 C 10 26.654 11.346 28 13 28 C 14.654 28 16 26.654 16 25 C 16 23.346 14.654 22 13 22 z M 13 23 C 14.105 23 15 23.895 15 25 C 15 26.105 14.105 27 13 27 C 11.895 27 11 26.105 11 25 C 11 23.895 11.895 23 13 23 z M 21 24 L 39 24 C 39.553 24 40 24.447 40 25 C 40 25.553 39.553 26 39 26 L 21 26 C 20.447 26 20 25.553 20 25 C 20 24.447 20.447 24 21 24 z M 13 31 C 15.206 31 17 32.794 17 35 C 17 37.206 15.206 39 13 39 C 10.794 39 9 37.206 9 35 C 9 32.794 10.794 31 13 31 z M 13 32 C 11.346 32 10 33.346 10 35 C 10 36.654 11.346 38 13 38 C 14.654 38 16 36.654 16 35 C 16 33.346 14.654 32 13 32 z M 13 33 C 14.105 33 15 33.895 15 35 C 15 36.105 14.105 37 13 37 C 11.895 37 11 36.105 11 35 C 11 33.895 11.895 33 13 33 z M 21 34 L 39 34 C 39.553 34 40 34.447 40 35 C 40 35.553 39.553 36 39 36 L 21 36 C 20.447 36 20 35.553 20 35 C 20 34.447 20.447 34 21 34 z"></path>
            </svg>
          </Link>
          <Link
            href="/me"
            className="w-full duration-500  flex flex-col justify-center items-center  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`duration-500 fill-gray-400 hover:fill-white ${
                active == "/me" ? "fill-white" : null
              }`}
            >
              <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BottomNav;
