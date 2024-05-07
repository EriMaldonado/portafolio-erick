"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className=" grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="gap-4 ">
          <h1 className="text-[#15326F] pb-4 pr-8 font-bold dark:text-[#5872c5]">
            Frontend
          </h1>
          <ul className="flex flex-wrap pb-6 gap-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/javascript.png"
                    alt="javascript"
                    className="p-1 "
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>JavaScript</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/typescript.png"
                    alt="typescript"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>TypeScript</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/react.png"
                    alt="react"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>React</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/nextjs.png"
                    alt="javascript"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Nextjs</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/python.png"
                    alt="python"
                    className="p-2"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Python</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/HTML5.png"
                    alt="javascript"
                    className="p-2"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>HTML5</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/tailwind.png"
                    alt="tailwind"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Tailwind CSS</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/material.png"
                    alt="material"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Material UI</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/bootstrap.png"
                    alt="bootstrap"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Bootstrap</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/shadcn.png"
                    alt="shadcn"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Shadcn UI</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ul>
        </div>
        <div className="gap-8 ">
          <h1 className="text-[#15326F] pb-4 pr-8 font-bold dark:text-[#5872c5]">
            Backend
          </h1>
          <ul className="flex flex-wrap pb-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/node.png"
                    alt="node"
                    className="p-1"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Nodejs</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/express.png"
                    alt="express"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Express</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/django.png"
                    alt="django"
                    className="p-2"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Django</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/mysql.png"
                    alt="mysql"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>MySQL</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/mongodb.png"
                    alt="mongodb"
                    className="p-1"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>MongoDB</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/apis.png"
                    alt="api"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>RESTful APIs</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/firebase.png"
                    alt="figma"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Firebase</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/aws.png"
                    alt="figma"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Amazon Web Services</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/gcp.png"
                    alt="figma"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Google Cloud Platform</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ul>
        </div>
        <div className="gap-8 ">
          <h1 className="text-[#15326F] pb-4 pr-8 font-bold dark:text-[#5872c5]">
            Development Tools
          </h1>
          <ul className="flex flex-wrap pb-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/visual.png"
                    alt="mysql"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Visual Studio Code</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/pycharm.png"
                    alt="mysql"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Pycharm</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/github.png"
                    alt="figma"
                    className="p-3"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/figma.png"
                    alt="figma"
                    className="p-2"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>Figma</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/adobexd.png"
                    alt="figma"
                    className="p-1"
                    width={80}
                    height={80}
                  />
                </TooltipTrigger>
                <TooltipContent>AdobeXD</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-2">
        <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
          <Image
            className="object-cover w-full h-48"
            src="/itin.png"
            alt="avatar"
            width={600}
            height={400}
          />

          <div className="py-1 text-center">
            <a
              href="/#skills"
              className="block text-md font-bold text-gray-800 dark:text-white"
              role="link"
            >
              Information Technology{" "}
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              {" "}
              2024 - ESPE{" "}
            </span>
          </div>
        </div>

        <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
          <Image
            className="object-cover w-full h-48"
            src="/frontend-g4.png"
            alt="avatar"
            width={600}
            height={400}
          />

          <div className="py-1 text-center">
            <a
              href="/#skills"
              className="block text-md font-bold text-gray-800 dark:text-white"
              role="link"
            >
              Frontend Developer{" "}
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              {" "}
              2023 - Oracle One-Alura Latam
            </span>
          </div>
        </div>

        <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
          <Image
            className="object-cover w-full h-48"
            src="/curso-python.png"
            alt="avatar"
            width={600}
            height={400}

/>

          <div className="py-1 text-center">
            <a
              href="/#skills"
              className="block text-md font-bold text-gray-800 dark:text-white"
              role="link"
            >
              Python Professional Course{" "}
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              {" "}
              2023 - Código Facilito{" "}
            </span>
          </div>
        </div>

        <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
          <Image
            className="object-cover w-full h-48"
            src="/machine-learning.png"
            alt="avatar"
            width={600}
            height={400}
          />

          <div className="py-1 text-center">
            <a
              href="/#skills"
              className="block text-md font-bold text-gray-800 dark:text-white"
              role="link"
            >
              Machine Learning - Sklearn{" "}
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              {" "}
              2023 - Alura Latam{" "}
            </span>
          </div>
        </div>

        <div className="w-full max-w-xs overflow-hidden bg-[#E7DAC5] rounded-sm shadow-lg dark:bg-gray-800">
          <Image
            className="object-cover w-full h-48"
            src="/tecnologico.jpg"
            alt="avatar"
            width={600}
            height={400}
          />

          <div className="py-1 text-center">
            <a
              href="/#skills"
              className="block text-md font-bold text-gray-800 dark:text-white"
              role="link"
            >
              Technologist in Business Administration
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              2019 - Tecnológico Pichincha
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="  pt-16 flex bg-[#FFF5E6] dark:bg-[#121212] "
      id="skills"
    >
      <div className="max-w-screen-4xl mx-auto md:px-4 items-center marker:grid grid-cols-1 gap-2  xl:gap-4 sm:py-8 xl:px-8 ">
        <div className="col-span-1">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Technical Skills
            </h2>
          </div>
        </div>

        <div className="col-span-1">
          <div className="max-w-7xl gap-8 mx-auto text-center flex flex-row items-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education & Certifications
            </TabButton>
          </div>

          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
