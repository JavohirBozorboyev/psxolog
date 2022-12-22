import Link from "next/link";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import { Alert } from "@mantine/core";

const Contact = () => {
  const ism = useRef(null);
  const yosh = useRef(null);
  const massage = useRef(null);
  const [errorM, setErrorM] = useState(false);
  const [errorI, setErrorI] = useState(false);
  const [errorY, setErrorY] = useState(false);
  const router = useRouter();

  const handle = () => {
    if (ism.current.value.length >= 2) {
      setErrorI(false);
    }
    if (yosh.current.value.length >= 1) {
      setErrorY(false);
    }
    if (massage.current.value.length > 20) {
      setErrorM(false);
    }
    if (
      massage.current.value.length > 20 &&
      ism.current.value.length >= 2 &&
      yosh.current.value.length > 1
    ) {
      axios
        .post("https://psihologictest2.pythonanywhere.com/admin-api/contact/", {
          full_name: ism.current.value,
          age: yosh.current.value,
          body: massage.current.value,
          read: false,
        })
        .then((res) => {
          if (res.status === 200) {
            showNotification({
              title: "Tabriklaymiz",
              message: "Malumotlar jo'natildi.",
              styles: (theme) => ({
                root: {
                  backgroundColor: theme.colors.blue[6],
                  borderColor: theme.colors.blue[6],
                  zIndex: "2000!important",
                  marginBottom: "60px",

                  "&::before": { backgroundColor: theme.white },
                },

                title: { color: theme.white },
                description: { color: theme.white },
                closeButton: {
                  color: theme.white,
                  "&:hover": { backgroundColor: theme.colors.blue[7] },
                },
              }),
            });
            ism.current.value = null;
            yosh.current.value = null;
            massage.current.value = null;
          }
        })
        .catch((error) => {
          showNotification({
            title: "Kechirasiz",
            message: "Malumotlar jo'natilmadi.",
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.red[6],
                borderColor: theme.colors.red[6],
                zIndex: "2000!important",
                marginBottom: "60px",

                "&::before": { backgroundColor: theme.white },
              },

              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                "&:hover": { backgroundColor: theme.colors.red[7] },
              },
            }),
          });
        });
    } else {
      if (massage.current.value.length < 20) {
        setErrorM(true);
      }
      if (ism.current.value.length <= 2) {
        setErrorI(true);
      }
      if (yosh.current.value.length <= 1) {
        setErrorY(true);
      }
    }
  };

  // 3b05cdcf2904c5ab65658a83117ade216bf016c2

  return (
    <>
      <div className="container px-3 md:px-0   mx-auto py-16 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl titleText font-bold uppercase text-slate-900">
          My Contact
        </h1>
        <p className="mt-4 secondText text-md md:text-lg w-full md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum
          perferendis numquam sit quaerat ipsam labore veniam facilis nobis
        </p>
      </div>
      <section className=" mb-6 rounded-b-md   container mx-auto  relative py-6 flex flex-wrap   justify-between ">
        <div className="w-full lg:w-2/3 flex flex-wrap justify-between gap-4">
          <div className="bg-gradient-to-br from-slate-700 to-slate-500 rounded-md p-6 py-8 flex justify-center flex-col items-center w-full sm:w-[47%]">
            <Link
              href={"tel:+998902750030"}
              className=" bg-gradient-to-br from-slate-700 to-slate-500  rounded-full p-6 duration-500 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
              </svg>
            </Link>
            <Link
              href={"tel:+998993912505"}
              className="text-white titleText  hover:text-sky-500 inline-block  w-full p-6 text-center  "
            >
              +99 890 275 00 30
            </Link>
          </div>
          <div className="bg-gradient-to-br from-slate-700 to-slate-500 rounded-md p-6 py-8 flex justify-center flex-col items-center w-full sm:w-[47%]">
            <Link
              href={"https://dedakhanovdilshodbek@gmail.com"}
              className=" bg-gradient-to-br from-slate-700 to-slate-500  rounded-full p-6 duration-500 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                className="fill-white hover:scale-105 duration-500"
              >
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
            </Link>
            <Link
              href={"https://dedakhanovdilshodbek@gmail.com"}
              className="text-white titleText hover:text-sky-500  w-full p-6 text-center  "
            >
              dedakhanovdilshodbek@gmail.com
            </Link>
          </div>
          <div className="bg-gradient-to-br from-slate-700 to-slate-500 rounded-md p-6 py-8 flex justify-center flex-col items-center w-full ">
            <Link
              href={""}
              className=" bg-gradient-to-br from-slate-700 to-slate-500  rounded-full p-6 duration-500 hover:scale-105"
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
            <p className="text-white titleText   inline-block  w-full p-6 text-center text-lg ">
              Namangan, Uzbekistan
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-[32%] mt-6 lg:mt-0 bg-gradient-to-br from-slate-700 to-slate-500 rounded-lg p-8 flex flex-col    relative z-10 shadow-md">
          <div className="relative mb-4">
            <label className="leading-7 titleText text-sm text-gray-200">
              Ism:{" "}
              {errorI ? (
                <p className="text-red-400">
                  {"Iltimos Ismingizni to'liq kiriting."}
                </p>
              ) : null}
            </label>
            <input
              ref={ism}
              type="text"
              className={`w-full bg-transparent rounded border ${
                errorI ? "border-red-500" : "border-gray-300"
              } text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 titleText text-sm text-gray-200">
              Yosh:{" "}
              {errorY ? (
                <p className="text-red-400">
                  {"Iltimos yoshingizni to'gri kiriting."}
                </p>
              ) : null}
            </label>
            <input
              ref={yosh}
              type="number"
              className={`w-full bg-transparent rounded border ${
                errorY ? "border-red-500" : "border-gray-300"
              } text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 titleText text-sm text-gray-200">
              Message{" "}
              {errorM ? (
                <p className="text-red-400">
                  {"Eng Kamida 5 so'zdan iborat matin kiriting"}
                </p>
              ) : null}
            </label>
            <textarea
              ref={massage}
              id="message"
              name="message"
              className={`w-full bg-transparent rounded border ${
                errorM ? "border-red-500" : "border-gray-300"
              } h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-gray-200 `}
            ></textarea>
          </div>
          <button
            onClick={handle}
            type="submit"
            className="text-slate-900 titleText uppercase font-extrabold duration-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
