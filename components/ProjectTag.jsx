'use client';

import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-[#15326F] text-white dark:bg-[#15326F] dark:text-white"
    : "bg-transparent hover:bg-[#15326F] hover:text-black dark:hover:text-white";
  return (
    <button
      className={`${buttonStyles}  font-semibold pr-8 pl-8 border-2 border-black text-md cursor-pointer rounded-sm`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
