import React from "react";

const Info = () => {
  return (
    <>
      <div className="py-12">
        <div className="container px-3 md:px-0 m-auto ">
          <div>
            <h1
              style={{
                clipPath:
                  " polygon(11% 0, 80% 0%, 100% 0, 100% 56%, 87% 100%, 0 100%, 0% 80%, 0 46%)",
              }}
              className="text-3xl text-slate-900 text-center  uppercase border-2 border-slate-900 py-4"
            >
              This is Demo
            </h1>
          </div>

          <div className=" flex justify-center  mt-10 px-2">
            <iframe
              className="w-full md:w-[600px] xl:w-[800px] h-[350px] xl:h-[450px] rounded-md"
              //   style={{
              //     clipPath:
              //       "polygon(5% 0%, 95% 0%, 100% 10%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
              //   }}
              src="https://www.youtube.com/embed/vo4pMVb0R6M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
