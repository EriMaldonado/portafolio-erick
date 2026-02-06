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
    ? "bg-[#15326F] text-white border-[#15326F] shadow-xl scale-105"
    : "bg-transparent text-gray-600 border-gray-300 dark:text-gray-400 dark:border-gray-600 hover:border-[#15326F] hover:text-[#15326F]";

  return (
    <button
      className={`${buttonStyles} border-2 font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out text-sm md:text-md cursor-pointer active:scale-95`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
