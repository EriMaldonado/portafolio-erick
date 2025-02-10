"use client";

import React, { useState } from "react";
import ModeDark from "./ModeDark";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

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
  ];

  return (
    <nav className=" fixed  border-b w-full md:border-0 pt-2 pb-2 bg-[#e7dac5] dark:bg-[#121212]">
      <div className="items-center px-3 max-w-screen-xl mx-auto md:flex md:px-8 ">
        <div className="flex items-center justify-between py-2 md:py-2">
          <div className="md:hidden">
            <button
              className=" outline-none p-1 rounded-md focus:border-gray-400 focus:border"
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
          <div className="flex justify-center items-center gap-x-2">
            <a
              href="https://drive.google.com/file/d/1r1ro_WBzVy9ourkRDzxFyCOeuDOyNBVR/view?usp=sharing"
              target="_blank"
              className="text-sm text-gray-900 hover:text-gray-900 dark:hover:text-white"
            >
              <div>
                <span className="block dark:text-white font-bold">
                  Erick Maldonado
                </span>

                <span className="block dark:text-gray-400 text-sm ">
                  Software Developer | IT Engineer.
                </span>
              </div>
            </a>
          </div>
          <div className="pl-1 md:hidden flex items-center">
            <ModeDark />
            <div className="flex p-1 items-center ">
              <Link href="https://github.com/EriMaldonado" target="blank">
                <div className="ml-2  cursor-pointer text-[#757575] hover:text-[#000000] ">
                  <FaGithub size={35} aria-label="GitHub" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
            {NavBar.map((item, idx) => (
              <li
                key={idx}
                className={`text-bold border-b-4 border-transparent  hover:border-[#15326F] dark:hover:border-[#ffffff]`}
              >
                <a className="font-bold" href={item.path}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:inline-block">
          <Link href="#contact">
            <button
              onMouseDown={(e) => e.preventDefault()}
              className="button rounded-sm dark:text-white"
            >
              <span className="button-text  dark:text-white pl-4 pr-4">
                Contact
              </span>
              <div className="button-fill"></div>
            </button>
          </Link>
        </div>

        <div className="pl-4 md:block hidden  ">
          <ModeDark />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
