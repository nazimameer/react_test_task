"use client";
import React from "react";
import { useRouter } from "next/navigation";
export const Tab = ({ hovered, number, route }: TabsProps) => {
  const router = useRouter();
  return (
    <div
      className={`rounded-full w-10 h-10 flex items-center justify-center font-semibold cursor-pointer ${
        hovered ? "bg-[#0074fe] text-white" : "bg-[#efefef] text-[#676667]"
      }`}
      onClick={() => router.push(`${route}`)}
    >
      {number}
    </div>
  );
};
