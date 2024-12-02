"use client";
import React, { useState, ChangeEvent } from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
type DocumentUrls = {
  es: string;
  en: string;
};

function Hero() {
  const [selectedLanguage, setSelectedLanguage] = useState<"es" | "en">("es");

  const urls: DocumentUrls = {
    es: "https://drive.google.com/file/d/1UWFc7LmGJwFZCsK0Gm6F9QUjZl1uNOQz/view?usp=sharing",
    en: "https://drive.google.com/file/d/1Ok0AyzPuDa6g4Z6Fm1dtvE1EHsCCHeOu/view?usp=sharing",
  };
  const handleDownload = () => {
    window.open(urls[selectedLanguage], "_blank");
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value as "es" | "en");
  };

  return (
    <section id="home" className="pt-20 bg-[#FFF5E6] dark:bg-[#121212]">
      <div className="max-w-5xl p-3 w-full flex flex-col sm:p-4 mx-auto my-auto lg:flex-row lg:justify-around">
        <div className="flex flex-col pt-32 pb-16 rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:text-left justify-self-start"
          >
            <div className="flex items-center">
              <img
                src="/Erick.png"
                alt="image"
                className="w-16 h-18 rounded"
                width={14}
                height={16}
                style={{ pointerEvents: "none" }}
              />

              <h1 className="text-md font-bold leading-none text-3xl ml-2">
                Hello, I&apos;m Erick 👋
                <br />
                <span className="text-[#15326F]">
                  <TypeAnimation
                    sequence={[
                      "Software Developer",
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
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
            className="col-span-1 sm:text-left justify-self-start"
          >
            <p className="mt-6 mb-6 pr-0.5 text-lg sm:mb-12 font-semibold md:text-left dark:text-gray-400">
              I am a software developer with experience in Node.js, JavaScript,
              PHP, React, Next.js, MySQL, MongoDB, Tailwind CSS and Material UI.
              I specialize in building high-performance, scalable applications
              and API integration. Passionate about continuous learning. I value
              teamwork, effective communication and organization to achieve
              objectives in any development environment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="col-span-1 sm:text-left justify-self-start"
          >
            <div className="flex items-center space-x-4 lg:justify-start">
              <button
                onClick={handleDownload}
                onMouseDown={(e) => e.preventDefault()}
                className="button dark:text-white rounded-sm"
              >
                <span className="button-text dark:text-white pl-2 pr-2">
                  Resume
                </span>
                <div className="button-fill"></div>
              </button>
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="bg-transparent font-bold border border-gray-950  rounded-sm shadow-sm dark:bg-gray-900 dark:border-gray-600 text-gray-950 dark:text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#15326F] dark:focus:ring-[#f3f2eb] transition duration-150 ease-in-out"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>

              <div className="flex flex-wrap md:flex-row p-2 items-center justify-center">
                <Link href="https://github.com/EriMaldonado" target="blank">
                  <div className="ml-2 mr-2 cursor-pointer text-[#15326F] hover:text-[#000000] dark:hover:text-[#ffffff]">
                    <FaGithub size={36} aria-label="GitHub" />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/erickmaldonado1"
                  target="blank"
                >
                  <div className="mr-2 cursor-pointer text-[#15326F] hover:text-[#000000] dark:hover:text-[#ffffff]">
                    <ImLinkedin2 size={36} aria-label="LinkedIn" />
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
              width={42}
              height={48}
              className="object-contain p-10 w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
