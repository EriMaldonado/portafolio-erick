"use client";

import React, { useState } from "react";
import ModeDark from "./ModeDark";

interface NavBarItem {
  title: string;
  path: string;
}

const NavBar: React.FC = () => {
  const [state, setState] = useState(false);

  const NavBar: NavBarItem[] = [
    { title: "Inicio", path: "/" },
    { title: "Proyectos", path: "#projects" },
    { title: "Habilidades", path: "#skills" },
    { title: "Certificaciones", path: "#certifications" },
  ];

  return (
    <nav className="w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-3">
          <div className="md:hidden">
            <button
              className=" outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
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
          <a href="javascript:void(0)">
            <img src="./logo.png" width={80} height={60} alt="logo" />
          </a>
          <div className="pl-4 md:hidden">
            <ModeDark />
          </div>

          <div className={`md:hidden ${state ? "block" : "hidden"}`}>
            <a
              href="javascript:void(0)"
              className="py-3 px-4 text-white bg-[#767779] hover:bg-[#15326F] rounded-md shadow block mb-2"
            >
              Contacto
            </a>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NavBar.map((item, idx) => (
              <li key={idx} className={`text-semibold`}>
                <a className="text-semibold" href={item.path}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:inline-block">
          <a
            href="#contact"
            className="py-3 px-4 text-white bg-[#15326F] hover:bg-[#767779] rounded-md shadow"
          >
            Contacto
          </a>
        </div>
        <div className="pl-4 md:block hidden">
          <ModeDark />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
