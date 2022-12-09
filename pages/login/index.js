import React, { useState, useRef } from "react";
import axios from "axios";

const index = () => {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const LoginFun = (e) => {
    e.preventDefault();
    let eU = username.current.value;
    let eE = email.current.value;
    let eP = password.current.value;

    console.log(eU);

    // fetch("https://psihologictest2.pythonanywhere.com/dj-rest-auth/login/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: eU,
    //     email: eE,
    //     password: eP,
    //   }),
    // });
  };

  return (
    <>
      <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
        <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
          <div className="p-6 md:p-12">
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <input
                type="text"
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Username"
                ref={username}
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                </svg>
              </svg>
              <input
                type="text"
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Email"
                ref={email}
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <input
                type="password"
                id="password"
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
                ref={password}
              />
            </div>
            <button
              type="submit"
              onClick={LoginFun}
              className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
