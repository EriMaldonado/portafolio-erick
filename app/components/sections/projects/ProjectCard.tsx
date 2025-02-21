import React from "react";

interface ProjectCardProps {
  content: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  return (
    <>
      <div className=" p-1">{content}</div>
    </>
  );
};

export default ProjectCard;
