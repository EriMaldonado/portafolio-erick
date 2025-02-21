"use client";

import React, { useState } from "react";
import ModeDark from "../providers/ModeDark";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface NavBarItem {
  title: string;
  path: string;
}

const NavBar: React.FC = () => {
  const [state, setState] = useState(false);

  const NavBar: NavBarItem[] = [
    { title: "Home", path: "#home" },
    { title: "Skills", path: "#skills" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#e5dec7] dark:bg-[#121212]  shadow-md z-50 transition-all duration-300 ease-in-out">
      <div className="items-center px-3 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:py-2">
          <div className="md:hidden">
            <button
              className="outline-none p-1 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
              aria-label={state ? "Cerrar menú" : "Abrir menú"}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/erick.jpg"
                alt="Avatar"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <span className="block text-gray-900 dark:text-white font-bold">
                Erick Maldonado
              </span>
              <span className="block text-gray-700 dark:text-gray-400 text-sm">
                Software Developer | IT Engineer
              </span>
            </div>
          </div>
          <div className="pl-1 md:hidden flex items-center">
            <ModeDark />
            <div className="flex p-1 items-center">
              <Link href="https://github.com/EriMaldonado" target="blank">
                <div className="ml-2 cursor-pointer text-gray-700  hover:text-black dark:text-white dark:hover:text-gray-700 transition-all duration-300">
                  <FaGithub size={35} aria-label="GitHub" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-10 md:space-y-0">
            {NavBar.map((item, idx) => (
              <li
                key={idx}
                className="text-bold border-b-4 border-transparent hover:border-[#15326F] dark:hover:border-[#ffffff] transition-all duration-300 ease-in-out"
              >
                <Link
                  href={item.path}
                  className="font-semibold text-gray-900 hover:text-[#15326F] dark:text-white dark:hover:text-[#ffffff] transition-all duration-300 ease-in-out text-xl md:text-xl"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-4 md:block hidden">
          <ModeDark />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
