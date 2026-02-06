"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

interface ActionButtonProps {
  link: string;
  text: string;
  direction: "left" | "right";
}

interface ProjectLayoutProps {
  image: string[];
  title: string;
  technologies: string[];
  website: string;
  github: string;
}

const ActionButton = ({ link, text, direction }: ActionButtonProps) => {
  if (link === "#" || !link) return null;

  return (
    <Link href={link} target="_blank" className="z-20">
      <Button
        variant="hero"
        className={`transition-all duration-500 ease-out transform group-hover:translate-x-0 ${
          direction === "left"
            ? "-translate-x-8 opacity-0 group-hover:opacity-100"
            : "translate-x-8 opacity-0 group-hover:opacity-100"
        }`}
      >
        {text}
      </Button>
    </Link>
  );
};

const Technologies = ({ techs }: { techs: string[] }) => (
  <div className="flex justify-center flex-wrap gap-2 mb-2">
    {techs.map((tech, index) => (
      <span
        key={`${tech}-${index}`}
        className="flex items-center px-2 py-1 bg-gray-200/50 text-gray-900 rounded-lg dark:bg-gray-700/50 dark:text-white border border-transparent text-[0.7rem] sm:text-[0.75rem]"
      >
        <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5">
          <Image
            src={`/tech/${tech.toLowerCase().replace(/\s+/g, "")}.png`}
            fill
            alt={tech}
            className="object-contain"
          />
        </div>
        {tech}
      </span>
    ))}
  </div>
);

const ProjectLayout = ({
  image,
  title,
  technologies,
  website,
  github,
}: ProjectLayoutProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col w-full h-full bg-[#e9e8e4]/90 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-border/40 hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700 shrink-0">
        <Image
          className={`object-cover w-full h-full transition-all duration-700 ease-in-out ${
            isHovered && image.length > 1
              ? "opacity-0 scale-105"
              : "opacity-100 scale-100"
          }`}
          src={image[0]}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />

        {image.length > 1 && (
          <Image
            className={`object-cover w-full h-full absolute inset-0 transition-all duration-700 ease-in-out ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            src={image[1]}
            alt={`${title} view 2`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10 p-2">
          <ActionButton link={website} text="Web Site" direction="left" />
          <ActionButton link={github} text="Github" direction="right" />
        </div>
      </div>

      <div className="flex flex-col flex-grow p-5 text-center justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-1">
            {title}
          </h3>
          <Technologies techs={technologies} />
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
