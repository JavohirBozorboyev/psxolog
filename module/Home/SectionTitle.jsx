import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div>
      <div className="container m-auto px-3 md:px-0">
        <div>
          <h1 className="text-3xl font-bold text-center text-teal-500  uppercase border-b-2 inline border-purple-500  ">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
