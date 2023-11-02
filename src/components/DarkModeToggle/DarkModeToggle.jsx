"use client";
import { ThemeContext } from "@/context/toggleContext";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className="w-[42px]  h-[24px] rounded-[30px] border-[1.5px] relative cursor-pointer border-[#53c28b70] items-center flex justify-between p-[2px]"
    >
      <div className="text-xs">🌙</div>
      <div className="text-xs">🔆</div>
      <div
        className="w-[15px] h-[15px] rounded-full bg-[#53c28b] absolute"
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
