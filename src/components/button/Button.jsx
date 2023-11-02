import Link from "next/link";
import React from "react";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="bg-[#53c28b] px-5 py-2  rounded-lg w-max text-white cursor-pointer">{text}</button>
    </Link>
  );
};

export default Button;
