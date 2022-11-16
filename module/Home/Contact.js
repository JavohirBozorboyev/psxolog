import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container bg-white rounded-t-md mx-auto py-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold uppercase text-slate-900">
          My Contact
        </h1>
        <p className="mt-4  text-lg w-full md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum
          perferendis numquam sit quaerat ipsam labore veniam facilis nobis
        </p>
      </div>
      <section className="bg-white mb-6 rounded-b-md  px-3 md:px-2 container mx-auto  relative py-6 flex flex-wrap   justify-between ">
        <div className="w-full md:w-2/3 flex flex-wrap justify-between gap-10">
          <div className="bg-slate-900 rounded-md p-4 py-8 flex justify-center flex-col items-center w-full sm:w-[47%]">
            <Link
              href={"tel:+998991234567"}
              className=" bg-slate-900  rounded-full p-4 duration-500 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
              </svg>
            </Link>
            <Link
              href={"tel:+998993912505"}
              className="text-white  hover:text-sky-500 inline-block  w-full p-4 text-center text-lg "
            >
              +99 899 123 45 67
            </Link>
          </div>
          <div className="bg-slate-900 rounded-md p-4 py-8 flex justify-center flex-col items-center w-full sm:w-[47%]">
            <Link
              href={""}
              className=" bg-slate-900  rounded-full p-4 duration-500 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                className="fill-white hover:scale-105 duration-500"
              >
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
            </Link>
            <Link
              href={""}
              className="text-white  hover:text-sky-500 inline-block  w-full p-4 text-center text-lg "
            >
              abs@gamil.com
            </Link>
          </div>
          <div className="bg-slate-900 rounded-md p-4 py-8 flex justify-center flex-col items-center w-full ">
            <Link
              href={""}
              className=" bg-slate-900  rounded-full p-4 duration-500 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                className="fill-white hover:scale-105 duration-500"
              >
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
            </Link>
            <p className="text-white   inline-block  w-full p-4 text-center text-lg ">
              Namangan, Uzbekistan
            </p>
          </div>
        </div>
        <div className=" w-full md:w-[32%] mt-6 sm:mt-0 bg-slate-900 rounded-lg p-8 flex flex-col    relative z-10 shadow-md">
          <h2 className="text-gray-100 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-300">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-white focus:ring-2 focus:ring-white h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-gray-200"
            ></textarea>
          </div>
          <button className="text-white duration-500 bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
