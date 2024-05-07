import React from "react";

import Link from "next/link";

interface ProjectCardProps {
  content: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  return (
    <>
      <div className="pt-4 ">
        <div className="text-black">{content}</div>
      </div>
    </>
  );
};

export default ProjectCard;
