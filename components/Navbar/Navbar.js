"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  return (
    <div
      className="bg-slate-900 text-white z-[1000]  fixed
     w-full"
    >
      <div className="container px-3 sm:px-0 m-auto py-3 flex flex-col items-center justify-between md:flex-row ">
        <div className="w-full flex items-center justify-between md:w-1/2 xl:w-1/3">
          <Link href="" className="text-2xl uppercase font-bold">
            Brand Name
          </Link>
          <div onClick={handler} className="md:hidden">
            {open ? (
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                width={"28"}
                height="28"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white "
              >
                <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
              </svg>
            ) : (
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                width={"28"}
                height="28"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
              >
                <path
                  d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                  fillRule="nonzero"
                />
              </svg>
            )}
          </div>
        </div>
        <div
          className={`flex     text-gray-200 fixed bg-slate-800 duration-500   top-[55px] bottom-0 z-[1000] w-full  p-4 flex-col  justify-between md:relative md:bg-transparent
           md:left-0 md:w-1/2  md:top-0 md:p-0 xl:w-1/3    ${
             open ? "left-0" : "left-[-120%]"
           } `}
        >
          <div className="flex  gap-4  font-bold flex-col md:flex-row text-2xl mt-36 md:mt-0 md:font-normal md:justify-end md:text-[16px]">
            <Link href="" className="duration-500 hover:text-teal-500">
              Blog
            </Link>
            <Link href="/quiz" className="duration-500 hover:text-teal-500">
              Imtixon
            </Link>
            <Link href="" className="duration-500 hover:text-teal-500">
              Contact
            </Link>
            <Link href="" className="duration-500 hover:text-teal-500">
              Men haqimda
            </Link>
          </div>
          <div className="flex gap-3  md:hidden  ">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-gray-200 duration-500 hover:scale-125 hover:fill-red-500  w-10 h-10 "
              >
                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-gray-200 duration-500 hover:scale-125 hover:fill-red-500  w-10 h-10"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 50 50"
                className="fill-gray-200 duration-500 hover:scale-125 w-10 h-10"
              >
                <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden xl:flex gap-3 xl:w-1/3 xl:justify-end">
          <a href="" className="duration-500 hover:scale-110 hover:rotate-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36"
              height="36"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="jm_nAfYbxsVmTlYr5N4x9a_43625_gr1"
                x1="32"
                x2="32"
                y1="6.667"
                y2="57.872"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)"
                d="M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z"
              ></path>
              <linearGradient
                id="jm_nAfYbxsVmTlYr5N4x9b_43625_gr2"
                x1="32"
                x2="32"
                y1="18.167"
                y2="45.679"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)"
                d="M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z"
              ></path>
              <linearGradient
                id="jm_nAfYbxsVmTlYr5N4x9c_43625_gr3"
                x1="46"
                x2="46"
                y1="12.75"
                y2="23.049"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)"
                d="M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z"
              ></path>
            </svg>
          </a>
          <a href="" className="duration-500 hover:scale-110 hover:rotate-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36"
              height="36"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="PMWUiMSnUf2R_PPJ6rqZea_44112_gr1"
                x1="32"
                x2="32"
                y1="10"
                y2="54.751"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#PMWUiMSnUf2R_PPJ6rqZea_44112_gr1)"
                d="M32,53.001c-6.358,0-12.716-0.195-19.299-0.584c-4.96-0.293-8.961-4.242-9.308-9.187 c-0.521-7.452-0.521-15.009-0.001-22.46c0.348-4.945,4.349-8.895,9.309-9.188c13.167-0.778,25.433-0.778,38.598,0 c4.96,0.293,8.961,4.242,9.308,9.187c0.521,7.452,0.521,15.009,0.001,22.46c-0.348,4.945-4.349,8.895-9.309,9.188l0,0 C44.716,52.806,38.358,53.001,32,53.001z M51.182,50.421l0.059,0.998L51.182,50.421c3.959-0.234,7.153-3.386,7.431-7.331 c0.515-7.358,0.515-14.821-0.001-22.181c-0.276-3.944-3.471-7.096-7.43-7.33c-13.088-0.773-25.275-0.773-38.363,0 c-3.959,0.234-7.153,3.386-7.431,7.331c-0.515,7.358-0.515,14.821,0.001,22.181c0.276,3.944,3.471,7.096,7.43,7.33 C25.906,51.194,38.094,51.194,51.182,50.421z"
              ></path>
              <linearGradient
                id="PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2"
                x1="31.72"
                x2="31.72"
                y1="24.25"
                y2="39.252"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2)"
                d="M25 39.84L25 24.16 38.44 32z"
              ></path>
              <linearGradient
                id="PMWUiMSnUf2R_PPJ6rqZec_44112_gr3"
                x1="32.212"
                x2="32.212"
                y1="10"
                y2="54.751"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#PMWUiMSnUf2R_PPJ6rqZec_44112_gr3)"
                d="M24,41.581V22.419L40.425,32L24,41.581z M26,25.901v12.197L36.456,32L26,25.901z"
              ></path>
            </svg>
          </a>
          <a href="" className="duration-500 hover:scale-110 hover:rotate-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36"
              height="36"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="EEzBmxT86u8E~6vCqQtLma_114954_gr1"
                x1="29.5"
                x2="29.5"
                y1="19.006"
                y2="46"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#EEzBmxT86u8E~6vCqQtLma_114954_gr1)"
                d="M22.007,35.25L39.022,25L27.011,37.5l10.535,8.275c1.887,0.83,2.574-0.899,2.574-0.899 l4.825-24.501c0,0,0.082-0.625,0.045-0.75c-0.344-1.168-2.228-0.325-2.227-0.324L15.206,30.188c0,0-1.304,0.449-1.201,1.278 c0.103,0.83,1.167,1.209,1.167,1.209l6.837,2.575"
              ></path>
              <linearGradient
                id="EEzBmxT86u8E~6vCqQtLmb_114954_gr2"
                x1="29.5"
                x2="29.5"
                y1="5.833"
                y2="58.262"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#EEzBmxT86u8E~6vCqQtLmb_114954_gr2)"
                d="M45.949,19.343c-0.23-0.784-0.859-1.269-1.727-1.33c-0.175-0.013-1.159,0.027-1.823,0.365 l-0.003-0.007L14.881,29.243C13.996,29.547,13.02,30.266,13,31.33c-0.002,0.084,0.003,0.171,0.014,0.26 c0.173,1.4,1.654,1.968,1.807,2.021l6.377,2.402c0.49,1.575,2.108,6.774,2.456,7.886c0.234,0.744,0.62,1.709,1.327,1.973 C25.185,45.956,25.402,46,25.628,46c0.614,0,1.014-0.312,1.163-0.447l3.903-3.89l6.235,4.897c0.065,0.052,0.138,0.096,0.215,0.129 c0.517,0.228,0.976,0.31,1.367,0.31c0.409,0,0.745-0.089,0.998-0.193c1.067-0.438,1.494-1.447,1.54-1.561 c0.022-0.057,0.04-0.116,0.052-0.176l4.835-24.564C46.047,19.669,45.987,19.472,45.949,19.343z M23.195,35.701l9.872-5.947 l-6.775,7.053c-0.12,0.124-0.188,0.279-0.229,0.442c-0.003,0.012-1.006,4.43-1.006,4.43L23.195,35.701z M43.963,20.188l-4.799,24.37 c-0.057,0.098-0.2,0.311-0.413,0.398c-0.179,0.073-0.412,0.055-0.694-0.053l-9.559-7.507l11.245-11.704 c0.348-0.361,0.374-0.925,0.061-1.316c-0.312-0.391-0.867-0.491-1.297-0.232l-16.601,10l-6.389-2.406 c-0.196-0.075-0.398-0.221-0.481-0.323c0.109-0.096,0.329-0.221,0.537-0.296L43.131,20.23c0.017-0.006,0.033-0.014,0.05-0.021 c0.251-0.11,0.59-0.192,0.803-0.205C43.974,20.104,43.963,20.187,43.963,20.188z"
              ></path>
              <linearGradient
                id="EEzBmxT86u8E~6vCqQtLmc_114954_gr3"
                x1="32"
                x2="32"
                y1="5.833"
                y2="58.262"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#EEzBmxT86u8E~6vCqQtLmc_114954_gr3)"
                d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
