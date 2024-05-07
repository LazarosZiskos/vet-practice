import Link from "next/link";
import React from "react";

const MyButton = ({ title, style, href, icon }) => {
  return (
    <Link href={href}>
      <button
        className={`${style} + pt-2 pb-2 pl-5 pr-5 uppercase text-sm
      font-semibold transition-all ease-in-out duration-500 md:pb-3 md:pl-10 md:pt-3 md:pr-10 md:text-md `}
      >
        {title}
        {icon}
      </button>
    </Link>
  );
};

export default MyButton;
