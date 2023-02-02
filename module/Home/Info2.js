import React from "react";

const Info2 = () => {
  return (
    <div className="m-1 md:m-0 py-6 relative">
      <div className="container mx-auto p-3   z-10 relative  min-h-[300px] flex justify-center flex-col items-center">
        <h1 className="text-white text-2xl md:text-3xl  font-bold md:w-1/2 text-center titleText">
          Bizning hizmatlarimizdan foydalanganingizdan hursandmiz !
        </h1>
        <p className="text-center secondText mt-4 text-gray-50 text-md  md:text-lg">
          {
            "Agar o'zingizda biror psxologik o'zgarishlar sezadigan bo'lsangiz yoki o'zingizni ruhiy holatizdan tashvishlanayotgan bo'lsangiz bizning testlarimmizni ishlab ko'ring va Men bilan bog'laning.."
          }
        </p>
      </div>
      <div
        className=" min-h-[300px] absolute w-full top-0  blur-md z-0"
        style={{
          background:
            " url(https://ardenthealth.com/sites/default/files/portfolio/BSA%2001.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Info2;

// url(https://ardenthealth.com/sites/default/files/portfolio/BSA%2001.jpg)
