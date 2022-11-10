import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div>
      <div className="container m-auto px-3 md:px-0">
        <div>
          <h1
            style={{
              clipPath:
                " polygon(11% 0, 80% 0%, 100% 0, 100% 56%, 87% 100%, 0 100%, 0% 80%, 0 46%)",
            }}
            className="text-3xl py-4  text-center  uppercase border-4 bg-transparent  bg-clip-text text-transparent bg-gradient-to-r font-bold  from-teal-500 to-purple-500 border-t-teal-500 border-r-teal-500 border-b-purple-500 border-l-purple-500  "
          >
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
