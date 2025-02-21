"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ProjectsData from "./ProjectData";

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 48, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      className="bg-gradient-to-r from-[#e5dec7] to-[#decfba] dark:from-[#121212] dark:to-[#1f2937] light:bg-[#F5F5F5] pt-20"
      id="projects"
    >
      <h2 className="text-center text-3xl font-bold mb-2">
        My Projects
      </h2>
      <div className="flex flex-row rounded-sm justify-center items-center pt-2 gap-4">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="max-w-7xl w-full p-4 gap-4 items-center justify-around flex-col sm:p-4 sm:justify-center sm:text-center mx-auto my-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard key={project.id} content={project.content} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
