import Link from "next/link";

const NavLink = [
  {
    name: "Bosh Sahifa",
    url: "/",
  },
  {
    name: "Testlar",
    url: "/quiz",
  },
  {
    name: "Maqolalar",
    url: "/blog",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="p-4 mb-[74px] m-1 rounded md:rounded-none md:m-0  md:mb-0 bg-slate-900  shadow md:px-6 md:py-8 ">
        <div className=" container mx-auto sm:flex sm:items-center sm:justify-center">

          <dic className="flex flex-col md:flex-row flex-wrap gap-4 mt-4 md:mt-0 items-center mb-6 sm:mb-0">
            {NavLink.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.url}
                  className={`text-base secondText duration-500 hover:text-white text-gray-400
                     
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </dic>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-xs secondText text-gray-500 text-center dark:text-gray-400">
          © 2023 { }
          <a alt="Javohir Bozorboyev" href="https://t.me/Javohir_web_developer" target="_blank" className="hover:underline mx-1 titleText" rel="noreferrer">
            {" Javohir Bozorboyev"}
          </a>
          and
          <a href="https://t.me/UlugbekXatamjonov" alt="Ulug'bek Xatamjonov" target="_blank" className="hover:underline mx-1 titleText" rel="noreferrer">
            {"Ulug'bek Xatamjonov "}
          </a>
          . Developer
        </span>
      </footer>
    </>
  );
};

export default Footer;
