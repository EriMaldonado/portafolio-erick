"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import { FaGithub, FaArrowUp } from "react-icons/fa";
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
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<"es" | "en">("es");
  const [isZoomed, setIsZoomed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const urls: DocumentUrls = {
    es: "https://drive.google.com/file/d/1ZSq0sgob4d1_W4oXa8hXYua0wxyFVJJV/view?usp=sharing",
    en: "https://drive.google.com/file/d/1sV59UxhyURTVYYrotaMxnS7-YNzJt7IU/view?usp=sharing",
  };

  const handleDownload = () => {
    window.open(urls[selectedLanguage], "_blank");
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value as "es" | "en");
  };

  const handleClick = (section: "skills" | "projects") => {
    setIsZoomed(true);
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsZoomed(false);
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-10 flex items-center overflow-hidden bg-gradient-to-r light:bg-[#EAB308] min-h-screen"
    >
      <div className="max-w-6xl p-3 w-full flex flex-col sm:p-6 mx-auto my-auto lg:flex-row lg:justify-between">
        {/* Texto de presentación */}
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
                <span className="text-gray-800 dark:text-gray-400">
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
                className="relative px-6 py-2 text-white font-semibold bg-gray-800 hover:bg-[#333333] dark:bg-[#000000] dark:hover:bg-gray-700 transition duration-300 ease-in-out rounded-xl"
              >
                Resume
              </button>

              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="bg-transparent font-bold border border-gray-950 rounded-xl shadow-sm dark:bg-[#000000] text-gray-950 dark:text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-[#333333] transition duration-150 ease-in-out"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>

              <div className="flex items-center space-x-4">
                <Link href="https://github.com/EriMaldonado" target="_blank">
                  <FaGithub
                    size={36}
                    className="text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-black"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/erickmaldonado1"
                  target="_blank"
                >
                  <ImLinkedin2
                    size={36}
                    className="text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-black"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Imagen interactiva */}
        <div className="flex items-center justify-center p-12 mt-12 lg:mt-0 lg:w-2/5 xl:w-2/5 relative">
          <div
            className="relative z-10 cursor-pointer w-full"
            onMouseLeave={() => setHoverSide(null)}
          >
            <motion.div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                setMousePos({ x, y });
                setHoverSide(x < 0 ? "left" : "right");
              }}
              animate={{
                rotateY: mousePos.x / 20 + (hoverSide === "right" ? 180 : 0),
                rotateX: -mousePos.y / 20,
                scale: 1.05,
                boxShadow: `0 0 10px rgba(0,255,255,0.5)`,
              }}
              initial={{ rotateY: -15 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <Image
                src="/developer.svg"
                alt="developer"
                width={400}
                height={400}
                className="object-contain w-full max-w-[400px]"
                onClick={() => {
                  if (hoverSide === "left") handleClick("skills");
                  else if (hoverSide === "right") handleClick("projects");
                }}
              />

              {/* Botón dinámico en la parte superior */}
              {hoverSide && (
                <motion.div
                  className="absolute top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-gray-800 hover:bg-gray-600 text-white px-6 py-2 rounded-xl shadow-lg text-center cursor-pointer"
                    animate={{ rotateY: hoverSide === "right" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() =>
                      handleClick(hoverSide === "left" ? "skills" : "projects")
                    }
                    whileHover={{ scale: 1.1 }}
                  >
                    {hoverSide === "left" ? "Skills" : "Projects"}
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {isZoomed && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 20, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 w-40 h-40 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 z-20"
            />
          )}
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </section>
  );
}

export default Hero;
