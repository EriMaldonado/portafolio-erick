"use client";

import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "bg-[#15326F] hover:bg-[#333333] text-white dark:bg-[#15326F] dark:text-white shadow-lg"
    : "bg-transparent hover:bg-[#15326F] hover:text-white  border-2  ";

  return (
    <button
      className={`${buttonStyles} font-semibold py-2 px-6 rounded-full transition-all duration-300 ease-in-out text-md cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
