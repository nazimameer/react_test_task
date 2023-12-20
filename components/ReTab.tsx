'use client'
/**
 * Tab component for navigation tabs.
 * @module Components
 * @exports Tab - The Tab React component.
 */

import React from "react";
import { useRouter } from "next/navigation";

/**
 * @typedef {Object} TabsProps - Props for the Tab component.
 * @property {boolean} hovered - Indicates whether the tab is hovered.
 * @property {number} number - The number to be displayed on the tab.
 * @property {string} route - The route to navigate when the tab is clicked.
 */

/**
 * React component for navigation tabs.
 * @function Tab
 * @param {TabsProps} props - The props for the Tab component.
 * @returns {JSX.Element} The JSX representation of the component.
 */
export const Tab: React.FC<TabsProps> = ({ hovered, number, route }: TabsProps): JSX.Element => {
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
