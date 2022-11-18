import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4 mb-[60px] md:mb-0 bg-slate-900  shadow md:px-6 md:py-8 ">
        <div className=" container mx-auto sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            target="_blank"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-4 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Intent
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <Link
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="" target="_blank" className="hover:underline mx-2">
            Intent
          </a>
          . Createor
        </span>
      </footer>
    </>
  );
};

export default Footer;
