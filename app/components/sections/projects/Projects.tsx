"use client";
import React, { useState, useRef } from "react";
import { useTranslation } from "@/lib/i18n";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { ProjectsData, Project } from "@/lib/constants/projects-data";

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project: Project) =>
    tag === "All" ? true : project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 48, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen pt-20" id="projects">
      <h2 className="text-center text-3xl font-bold mb-2 text-foreground">
        {t.projects.title}
      </h2>

      <div className="flex flex-row rounded-sm justify-center items-center pt-2 gap-4">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name={t.projects.all}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name={t.projects.web}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name={t.projects.mobile}
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul
        ref={ref}
        className="max-w-7xl w-full p-4 gap-8 items-stretch justify-center mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {filteredProjects.map((project: Project, index: number) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex"
          >
            <ProjectCard project={project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
