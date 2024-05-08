'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <footer className="bg-[#121212] dark:bg-[#1F2937]  text-white flex flex-col  sm:p-4  mx-auto my-auto lg:flex-row lg:justify-around" >
      <div className=" max-w-5xl w-full px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            Erick<span> Maldonado </span>
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <a
              href="#home"
            className="mx-4 text-sm text-gray-300 transition-colors duration-300 hover:text-[#15326F] dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
             
              Home
            </a>

            <a
              href="#skills"
              className="mx-4 text-sm text-gray-300 transition-colors duration-300 hover:text-[#15326F] dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              {" "}
              Skills{" "}
            </a>

            <a
              href="#projects"
              className="mx-4 text-sm text-gray-300 transition-colors duration-300 hover:text-[#15326F] dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              {" "}
             Projects{" "}
            </a>

            <a
              href="#contact"
              className="mx-4 text-sm text-gray-300 transition-colors duration-300 hover:text-[#15326F] dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              {" "}
              Contact{" "}
            </a>

            
          </div>
        </div>

        <hr className="my-2 border-gray-200 md:my-4 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-200 dark:text-gray-300">
            © Copyright {currentYear}. Made in Ecuador with 💛  
          </p>

          <div className="flex -mx-2 pb-2 pt-2">

            <a
              href="https://www.linkedin.com/in/erickmaldonado1"
              target='_blank'
              className="mx-2 text-gray-300 transition-colors duration-300 dark:text-gray-300 hover:text-[#15326F] dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <FaLinkedin size={30}/>
            </a>

            <a
              href="https://github.com/EriMaldonado"
              target='_blank'
              className="mx-2 text-gray-300 transition-colors duration-300 dark:text-gray-300 hover:text-[#15326F] dark:hover:text-blue-400"
              aria-label="Github"
            >
             <FaGithub size={30}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
