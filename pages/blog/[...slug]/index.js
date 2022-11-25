import React from "react";
import Head from "next/head";

const index = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Psxolog || {data.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={`psxolog, doctor ${data.body} `}
          key={`psxolog, doctor ${data.title} `}
        />
      </Head>
      <main className="py-10">
        <div className="container mx-auto px-3 md:px-0 flex flex-col gap-8 md:flex-row relative ">
          <div className="w-full md:w-1/2 md:sticky top-[30px]  md:h-[500px]">
            <img
              src={data.photo}
              alt={data.title}
              className=" shadow-xl w-full md:h-[500px] object-cover rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2  overflow-auto ">
            <h1 className="text-slate-700 font-bold text-2xl lg:text-4xl">
              {data.title}
            </h1>
            <p className="mt-4 text-slate-600 md:text-lg">{data.body}</p>
          </div>
        </div>
        <div className="container mx-auto mt-16 px-2 md:px-0 flex justify-center">
          <video
            poster={data.photo}
            src={data.video}
            controls
            className="w-full rounded-md  object-cover h-[400px]"
          ></video>
        </div>
      </main>
    </>
  );
};

export default index;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://psihologictest2.pythonanywhere.com/api/post/${params.slug}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
