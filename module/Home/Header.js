"use client";

import React from "react";
import Link from "next/link";
import LinkUi from "../../components/ui/LinkUi/LinkUi";

const Header = () => {
  return (
    <div className="bg-slate-900 py-8 text-white  flex items-center">
      <div className="container m-auto px-3 sm:p-0 flex flex-col items-center justify-between   md:flex-row mt-20  ">
        <div className="w-full md:w-1/2 flex flex-col justify-between  items-start">
          <span className=" text-6xl md:text-8xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
            {" "}
            Hi,
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
              {" "}
              World
            </span>{" "}
          </span>
          <p className="mt-6 text-gray-400 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab rem
            alias enim optio aperiam recusandae neque impedit porro. Adipisci
            repudiandae dignissimos repellat quibusdam quisquam inventore rerum
            iure nulla ut.
          </p>
          <div className="flex gap-5 flex-wrap mt-8">
            <LinkUi url={`/`} cl="border-4 font-bold uppercase text-lg">
              Get Started
            </LinkUi>
            <LinkUi
              url={`/`}
              cl="border-4 font-bold uppercase text-lg ml-24 sm:ml-0"
            >
              Start Test
            </LinkUi>
          </div>
          <div className="flex justify-end md:justify-start w-full mt-8 md:mt-20 gap-4">
            <a href="" className="duration-500 hover:scale-110 hover:rotate-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
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
                width="50"
                height="50"
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
                width="50"
                height="50"
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
        <div className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0">
          <img
            src="https://i.pinimg.com/originals/5a/3f/e5/5a3fe51372fceb7628c703b87c15ee1e.jpg"
            alt=""
            className="w-[500px]"
            style={{
              clipPath:
                "  polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0% 20%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
