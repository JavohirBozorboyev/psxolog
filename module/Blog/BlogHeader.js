"use client";

const BlogHeader = () => {
  return (
    <div className="  py-20   flex items-center">
      <div className="container relative m-auto px-3 sm:p-0 ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-slate-700 font-bold capitalize">
            My blogs
          </h1>
          <p className=" lg:text-xl text-center mt-6 w-full lg:w-1/2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis a
            quidem aliquid sequi assumenda ducimus, neque reprehenderit. Unde
            magni aperiam quia sed accusamus. Eos aliquid eaque, eveniet magnam
            beatae veritatis?
          </p>
        </div>
        <a href="#BlogCon" className="flex justify-center mt-20">
          <svg
            clip-rule="evenodd"
            fillRule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[100px] h-[100px] fill-slate-700 animate-bounce "
          >
            <path
              d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z"
              fillRule="nonzero"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogHeader;
