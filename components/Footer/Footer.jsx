import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-slate-800">
        <div className="max-w-lg bg-slate-800 px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl">
            <span className="inline md:block">Bizni Ijtimoyiy</span>
            <span className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              {" "}
              Tarmoqlarda
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                {" "}
                Kuzatib boring
              </span>{" "}
            </span>
          </h1>
          <div className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
            <button className="bg-tkb border text-sm text-white py-3 px-7 rounded-full">
              Join Sahilnetic
            </button>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <footer className="bg-slate-900 pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center  sm:justify-start">
              <p className="text-white ">
                {" "}
                Creator
                <a href="" className="text-lg text-red-500  mx-2">
                  Developer Links
                </a>
                team.
              </p>
            </div>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
