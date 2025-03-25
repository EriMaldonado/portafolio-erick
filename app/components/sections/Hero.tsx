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
    es: "https://drive.google.com/file/d/1MoKWNrj46P3Q6yxAXrYUUq_cLz7McTZO/view?usp=sharing",
    en: "https://drive.google.com/file/d/1paakfVImhyyT1P_U0wxQDlewN7WP274L/view?usp=sharing",
  };

  const handleDownload = () => {
    window.open(urls[selectedLanguage], "_blank");
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value as "es" | "en");
  };

  return (
    <section
      id="home"
      className="pt-10 bg-gradient-to-r from-[#e5dec7] to-[#decfba] dark:from-[#121212] dark:to-[#1f2937] light:bg-[#F5F5F5] min-h-screen flex items-center"
    >
      <div className="max-w-6xl p-3 w-full flex flex-col sm:p-6 mx-auto my-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col pt-32 pb-16 rounded-lg lg:w-3/5 xl:w-3/5 lg:text-left text-white sm:text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:text-center lg:text-left"
          >
            <div className="flex items-center space-x-2 justify-center md:justify-center lg:justify-start">
              <h1 className="text-4xl sm:text-5xl font-bold leading-none dark:text-white text-[#333333] text-center md:text-left lg:text-left">
                Hello, I&apos;m Erick 👋
                <br />
                <span className="text-[#15326F] dark:text-gray-400 ">
                  <TypeAnimation
                    sequence={[
                      "IT Engineer ",
                      1400,
                      "Software Developer",
                      1400,
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
            className="col-span-1 sm:text-center lg:text-left"
          >
            <p className="mt-6 mb-6 text-lg sm:mb-8 font-semibold md:text-left dark:text-gray-300 text-[#333333]">
              Software developer with experience in Node.js, PHP, JavaScript,
              TypeScript, React.js, Next.js, SQL Server, MySQL, MongoDB,
              Tailwind CSS, and modern frameworks. Passionate about continuous
              learning, focused on creating innovative and efficient solutions.
              I value collaboration, effective communication, and organization
              to achieve objectives and improve processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="col-span-1 sm:text-center lg:text-left"
          >
            <div className="flex items-center space-x-4 lg:justify-start sm:justify-center">
              <button
                onClick={handleDownload}
                onMouseDown={(e) => e.preventDefault()}
                className="relative px-6 py-2 text-white font-semibold  bg-[#15326F] hover:bg-[#333333] dark:bg-[#000000] dark:hover:bg-gray-700 transition duration-300 ease-in-out rounded-xl"
              >
                Resume
                <div className="absolute inset-0  rounded-full opacity-0 hover:opacity-100 transition duration-300"></div>
              </button>

              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="bg-transparent font-bold border border-gray-950 rounded-xl shadow-sm dark:bg-[#000000] text-gray-950 dark:text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#15326F] dark:focus:ring-[#3B82F6] transition duration-150 ease-in-out "
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>

              <div className="flex items-center space-x-4">
                <Link href="https://github.com/EriMaldonado" target="_blank">
                  <FaGithub
                    size={36}
                    className="text-[#15326F] hover:text-gray-700 dark:text-white dark:hover:text-black"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/erickmaldonado1"
                  target="_blank"
                >
                  <ImLinkedin2
                    size={36}
                    className="text-[#15326F] hover:text-gray-700 dark:text-white dark:hover:text-black"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center p-6 mt-12 lg:mt-0 lg:w-2/5 xl:w-2/5">
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="col-span-1 sm:text-center lg:text-left"
          >
            <Image
              src="/developer.svg"
              alt="developer illustration"
              width={420}
              height={480}
              className="object-contain p-10 w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
