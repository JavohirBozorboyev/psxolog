import React from "react";
import Link from "next/link";

const LinkUi = ({ children, url, cl }) => {
  return (
    <div>
      <Link
        href={`${url || "/"}`}
        className={`flex  p-2 px-6    duration-500 hover:border-teal-500 hover:text-teal-500   bg-transparent  bg-clip-text text-transparent bg-gradient-to-r   from-teal-500 to-purple-500 border-t-teal-500 border-r-teal-500 border-b-purple-500 border-l-purple-500 ${cl} `}
        style={{
          clipPath:
            " polygon(10% 0, 80% 0%, 100% 0, 100% 60%, 90% 100%, 0 100%, 0% 80%, 0 40%)",
        }}
      >
        {children}
      </Link>
    </div>
  );
};

export default LinkUi;
