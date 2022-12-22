import React from "react";

const Info2 = () => {
  return (
    <div className=" py-6">
      <div
        className="container mx-auto p-3  bg-cover bg-center md:rounded-md min-h-[300px] flex justify-center flex-col items-center bg-gradient-to-tr from-slate-700 to-slate-500"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,245,131,0.6755077030812324) 0%, rgba(63,65,77,0.8015581232492998) 0%, url(https://ardenthealth.com/sites/default/files/portfolio/BSA%2001.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-2xl md:text-3xl  font-bold md:w-1/2 text-center titleText">
          Bizning hizmatlarimmizdan foydalanganizdan hursandmiz
        </h1>
        <p className="text-center secondText mt-4 text-gray-50 text-md  md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis
          ipsum mollitia consequuntur exercitationem asperiores, culpa hic
          obcaecati, voluptate illo dignissimos totam. Voluptate hic neque earum
          voluptatibus atque tenetur dolores?
        </p>
      </div>
    </div>
  );
};

export default Info2;

// url(https://ardenthealth.com/sites/default/files/portfolio/BSA%2001.jpg)
