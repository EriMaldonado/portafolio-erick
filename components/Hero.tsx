"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image"; 
import Link from "next/link";
function Hero() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1lV947iYORpZk8hVBtUPVSFJQPfgh8WTt/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="home" className="pt-24  bg-[#FFF5E6] dark:bg-[#121212]">
    <div className="max-w-5xl p-3 w-full flex flex-col  sm:p-4  mx-auto my-auto lg:flex-row lg:justify-around">
      <div className="flex flex-col pt-32 pb-16 rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 sm:text-left justify-self-start"
        >
          <h1 className="text-md font-bold leading-none text-3xl">
            Hello, I&apos;m Erick 👋
            <br />
            <span className="text-[#15326F]">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "Information Technologies",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
              />
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="col-span-1 sm:text-left justify-self-start"
        >
          <p className="mt-6 mb-8 pr-1 text-lg sm:mb-12 font-semibold md:text-left dark:text-gray-400 ">
           I focus on continuous learning. I recognize the importance of teamwork, effective communication and organization as essential elements to achieve objectives in any environment.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="col-span-1 sm:text-left justify-self-start"
        >
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              onClick={handleDownload}
              onMouseDown={(e) => e.preventDefault()}
              className="button dark:text-white rounded-sm"
            >
              <span className="button-text dark:text-white pl-4 pr-4">Resume</span>
              <div className="button-fill"></div>
            </button>
            <div className="flex flex-col md:flex-row p-2 items-center">
            <Link href="https://github.com/EriMaldonado" target="blank">
              <div className="ml-2 mr-2 cursor-pointer text-[#15326F] hover:text-[#000000] dark:hover:text-[#ffffff]">
                <FaGithub size={36} />
              </div>
              </Link>
              <Link href="https://www.linkedin.com/in/erickmaldonado1" target="blank">
              <div className="mr-2 cursor-pointer text-[#15326F] hover:text-[#000000] dark:hover:text-[#ffffff]">
                <ImLinkedin2 size={36} />
              </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
  
      <div className="flex items-center justify-center p-6 mt-12 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="col-span-1 sm:text-left justify-self-start"
        >
          <Image
            src="./developer.svg"
            alt="image"
            width={48}
            height={48}
            className="object-contain p-8 w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-md "
          />
        </motion.div>
      </div>
    </div>
  </section>
  
  );
}

export default Hero;
