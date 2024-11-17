"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Muebles Maldonado",
    tag: ["All", "Web"],
    content: (
      <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
        <Image
          className=" object-containt w-full h-48  "
          src="/mueblesmaldonado.png"
          alt="muebles 1"
          width={600}
          height={400}
        />

        <div className="py-1 text-center pb-2">
          <div className="block pb-1 text-md font-bold text-gray-800 dark:text-white">
            Maldonado Furniture
          </div>

          <div className="flex justify-center flex-wrap gap-2 text-xs font-semibold max-w-xs">
            {[
              "Typescript",
              "Nextjs",
              "MongoDB",
              "React",
              "Tailwind",
              "Firebase",
            ].map((tech, index) => (
              <span
                key={index}
                className="flex items-center px-2 py-1 bg-gray-300 text-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                style={{ fontSize: "0.7rem" }}
              >
                <Image
                  src={`/${tech.toLowerCase()}.png`}
                  width={20}
                  height={20}
                  alt="logo"
                  className="mr-1"
                />
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-2 text-sm justify-center ">
            <Link href="https://mueblesmaldonadoec.com/" target="blank">
              <button className=" button-card rounded-sm transition duration-300 dark:text-white hover:bg-[#15326F] hover:text-white">
                Web Site
              </button>
            </Link>
            <Link href="/" target="blank">
              <button className="button-card rounded-sm transition duration-300 dark:text-white hover:bg-[#15326F] hover:text-white">
                Github
              </button>
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Electrocréditos el Ahorro",
    tag: ["All", "Web"],
    content: (
      <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
        <Image
          className=" object-containt w-full h-48  hover:op"
          src="/electrocreditos.png"
          alt="electrocredito"
          width={600}
          height={400}
        />

        <div className="py-1 text-center pb-2">
          <div className="block pb-1 text-md font-bold text-gray-800 dark:text-white">
            Electrocredits Savings
          </div>

          <div className="flex justify-center flex-wrap gap-2 text-xs font-semibold max-w-xs">
            {[
              "Typescript",
              "Nextjs",
              "Bootstrap",
              "Tailwind",
              "MongoDB",
              "React",
            ].map((tech, index) => (
              <span
                key={index}
                className="flex items-center px-2 py-1 bg-gray-300 text-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                style={{ fontSize: "0.7rem" }}
              >
                <Image
                  src={`/${tech.toLowerCase()}.png`}
                  width={20}
                  height={20}
                  alt="logo"
                  className="mr-1"
                />
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-2 text-sm justify-center ">
            <Link href="https://electrocreditoselahorro.com/" target="blank">
              <button className=" button-card rounded-sm transition duration-300 dark:text-white hover:bg-blue-900 hover:text-white">
                Web Site
              </button>
            </Link>
            <Link href="/" target="blank">
              <button className="button-card rounded-sm transition duration-300 dark:text-white hover:bg-blue-900 hover:text-white">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Personal Portfolio",
    tag: ["All", "Web"],
    content: (
      <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
        <Image
          className=" object-cover w-full h-48  "
          src="/portafolio.png"
          alt="portfolio"
          width={600}
          height={400}
        />

        <div className="py-1 text-center pb-2">
          <div className="block pb-1 text-md font-bold text-gray-800 dark:text-white">
            Personal Portfolio
          </div>

          <div className="flex justify-center flex-wrap gap-2 text-xs font-semibold max-w-xs">
            {["Typescript", "Nextjs", "React", "Node", "apis", "Shadcn"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="flex items-center px-2 py-1 bg-gray-300 text-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  style={{ fontSize: "0.7rem" }}
                >
                  <Image
                    src={`/${tech.toLowerCase()}.png`}
                    width={20}
                    height={20}
                    alt="logo"
                    className="mr-1"
                  />
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="flex gap-2 pt-2 text-sm justify-center ">
            <Link href="https://erickmaldonado.vercel.app/" target="blank">
              <button className=" button-card rounded-sm transition duration-300 dark:text-white hover:bg-blue-900 hover:text-white">
                Web Site
              </button>
            </Link>
            <Link
              href="#"
              target="blank"
            >
              <button className="button-card rounded-sm transition duration-300 dark:text-white hover:bg-blue-900 hover:text-white">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Alura Geek",
    tag: ["All", "Web"],
    content: (
      <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
        <Image
          className=" object-containt w-full h-48  "
          src="/alura.png"
          alt="alura"
          width={600}
          height={400}
        />

        <div className="py-1 text-center pb-2">
          <div className="block pb-1 text-md font-bold text-gray-800 dark:text-white">
            AluraGeek
          </div>

          <div className="flex justify-center flex-wrap gap-2 text-xs font-semibold max-w-xs">
            {["React", "Javascript", "CSS", "html5"].map((tech, index) => (
              <span
                key={index}
                className="flex items-center px-2 py-1 bg-gray-300 text-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                style={{ fontSize: "0.7rem" }}
              >
                <Image
                  src={`/${tech.toLowerCase()}.png`}
                  width={20}
                  height={20}
                  alt="logo"
                  className="mr-1"
                />
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-2 text-sm justify-center ">
            <Link
              href="https://erimaldonado.github.io/alura-geek/"
              target="blank"
            >
              <button className=" button-card rounded-sm transition duration-300 dark:text-white hover:bg-blue-900 hover:text-white">
                Web Site
              </button>
            </Link>
            <Link
              href="https://github.com/EriMaldonado/alura-geek/tree/master"
              target="blank"
            >
              <button className="button-card rounded-sm transition duration-300 dark:text-white hover:bg-blue-900 hover:text-white">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Api Pixabay",
    tag: ["All", "Web"],
    content: (
      <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
        <Image
          className=" object-containt w-full h-48  "
          src="/api-pixabay.png"
          alt="alura"
          width={600}
          height={400}
        />

        <div className="py-1 text-center pb-2">
          <div className="block pb-1 text-md font-bold text-gray-800 dark:text-white">
            Pixabay image search
          </div>

          <div className="flex justify-center flex-wrap gap-2 text-xs font-semibold max-w-xs">
            {["React", "node", "apis", "CSS"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="flex items-center px-2 py-1 bg-gray-300 text-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  style={{ fontSize: "0.7rem" }}
                >
                  <Image
                    src={`/${tech.toLowerCase()}.png`}
                    width={20}
                    height={20}
                    alt="logo"
                    className="mr-1"
                  />
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="flex gap-2 pt-2 text-sm justify-center ">
            <Link
              href="https://erimaldonado.github.io/api-pixabay/"
              target="blank"
            >
              <button className=" button-card rounded-sm transition duration-300 dark:text-white hover:bg-blue-900 hover:text-white">
                Web Site
              </button>
            </Link>
            <Link
              href="https://github.com/EriMaldonado/api-pixabay/"
              target="blank"
            >
              <button className="button-card rounded-sm transition duration-300 dark:text-white hover:bg-blue-900 hover:text-white">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
    ),
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 48, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
<section className="bg-[#FFF5E6] dark:bg-[#121212]" id="projects">
  <h2 className="pt-24 text-center text-3xl font-semibold mb-4 md:mb-4">
    My Projects
  </h2>
  <div className="flex flex-row rounded-sm justify-center items-center gap-2 pb-2">
    <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
    <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
    <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
  </div>
  <ul
    ref={ref}
    className="max-w-5xl w-full p-8 gap-4 items-center justify-around flex-col sm:p-4 sm:justify-center sm:text-center mx-auto my-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
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
