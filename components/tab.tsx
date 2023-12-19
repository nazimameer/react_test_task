import React from "react";

export const Tab = ({hovered, number}:TabsProps) => {
  return (
    <div className={`rounded-full w-10 h-10 flex items-center justify-center font-semibold cursor-pointer ${hovered ? "bg-[#0074fe] text-white": "bg-[#efefef] text-[#676667]"}`}>
      {number}
    </div>
  );
};
