"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#121212] to-[#1F2937] text-white py-12 dark:bg-[#121212] dark:text-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#"
              className="text-3xl font-bold  hover:text-gray-400 transition-transform duration-300 transform hover:scale-105"
            >
              Erick Maldonado
            </a>

            <p className="mt-3 text-xl text-gray-400 dark:text-gray-300">
              Software Developer | IT Engineer
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-300 dark:text-gray-200 mb-4">
              Quick Links
            </h3>
            <a
              href="#skills"
              className="text-xl text-gray-300 hover:text-[#15326F] transition-all duration-300 mb-2 dark:text-gray-400 dark:hover:text-[#4C92D8]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-xl text-gray-300 hover:text-[#15326F] transition-all duration-300 mb-2 dark:text-gray-400 dark:hover:text-[#4C92D8]"
            >
              Projects
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-300 dark:text-gray-200 mb-4">
              Contact
            </h3>
            <div className="flex gap-4 mt-3">
              <a
                href="https://www.linkedin.com/in/erickmaldonado1"
                target="_blank"
                className="text-gray-300 hover:text-[#15326F] transition-all duration-300 dark:text-gray-400 dark:hover:text-[#4C92D8]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/EriMaldonado"
                target="_blank"
                className="text-gray-300 hover:text-[#15326F] transition-all duration-300 dark:text-gray-400 dark:hover:text-[#4C92D8]"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="mailto:erickgabrielmaldonado1@gmail.com"
                className="text-gray-300 hover:text-[#15326F] transition-all duration-300 dark:text-gray-400 dark:hover:text-[#4C92D8]"
                aria-label="Email"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 dark:border-gray-600 mb-4" />
        <div className="text-center text-xl text-gray-400 dark:text-gray-300">
          <p>© {currentYear} Erick Maldonado. Made with 💛 in Ecuador</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
