import Link from "next/link";

const NavLink = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Quiz",
    url: "/quiz",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="p-4 mb-[74px] m-1 rounded md:rounded-none md:m-0  md:mb-0 bg-slate-900  shadow md:px-6 md:py-8 ">
        <div className=" container mx-auto sm:flex sm:items-center sm:justify-between">
          <div className="flex titleText items-center mb-4 sm:mb-0">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Dedahanov Dilshod
            </span>
          </div>
          <dic className="flex flex-col md:flex-row flex-wrap gap-4 mt-8 md:mt-0 md:items-center mb-6 sm:mb-0">
            {NavLink.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.url}
                  className={`text-lg secondText duration-500 hover:text-white text-gray-400
                     
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </dic>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-xs secondText text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 {}
          <a href="" target="_blank" className="hover:underline mx-1 titleText">
            {"Ulug'bek Xatamjonov "}
          </a>
          and
          <a href="" target="_blank" className="hover:underline mx-1 titleText">
            {" Javohir Bozorboyev"}
          </a>
          . Createor
        </span>
      </footer>
    </>
  );
};

export default Footer;
