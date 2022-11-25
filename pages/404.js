import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="container mx-auto h-[80vh] uppercase flex justify-center flex-col items-center">
      <h1 className="text-6xl lg:text-8xl font-bold text-slate-700 text-center">
        404 Page
      </h1>
      <Link
        href="/"
        className=" text-lg inline-block  mt-10 bg-slate-700 p-4 px-8 font-bold rounded-md text-white"
      >
        Go back home
      </Link>
    </div>
  );
}
