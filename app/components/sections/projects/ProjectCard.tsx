"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";
import { Project } from "@/lib/constants/projects-data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="h-full w-full flex">
      <ProjectLayout
        image={project.image} 
        title={project.title}
        technologies={project.technologies}
        website={project.website}
        github={project.github}
      />
    </div>
  );
};

export default ProjectCard;
