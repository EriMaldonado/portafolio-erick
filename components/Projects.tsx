"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

function Projects({}: Props) {
  return (
    <>
      <div className="py-14" id="projects">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-semibold sm:text-4xl mb-8 mt-4">
              Proyectos
            </h3>
            <p className="text-lg mt-3 text-justify pb-4">
              Durante mi carrera he trabajado en diversos proyectos que me ha
              permitido adquirir habilidades en diferentes areas del desarrollo
              web. En está sección encontraras una selección de mis proyectos
              cada uno con su propia historia y desafíos únicos.
            </p>
          </div>

          <div
            className="max-w-7xl mx-auto  
        "
          >
            <section className="py-4 bg-red">
              <div className="max-w-screen-xl mx-auto  gap-x-12 items-center justify-around overflow-hidden md:flex md:px-8">
                <div className="flex-none space-y-5 px-2 sm:max-w-xl md:px-0 lg:max-w-xl">
                  <h1 className="text-xl font-medium">Aplicacion Web</h1>
                  <h2 className="text-3xl dark:text-[#2563EB] font-semibold md:text-5xl">
                    Muebles Maldonado
                  </h2>
                  <p className="text-lg text-justify">
                    Desarrollo web utilizando TypeScript y Next.js para el
                    frontend, Tailwind , Shadcn.UI para la interfaz de usuario,
                    Prisma como ORM para la capa de datos, y MongoDB base de
                    datos.
                  </p>
                  <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                    <a
                      href="http://mueblesmaldonado.vercel.app/ " target="_blank" 
                      className="block py-2 px-4 text-center text-white font-medium bg-[#2563EB] duration-150 hover:bg-[#2563EB] rounded-sm shadow-lg hover:shadow-none"
                    >
                      Ver Demo
                    </a>
                    <a
                      href="/ "
                      className="flex items-center justify-center gap-x-2 py-2 px-4  hover:bg-gray-400 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
                    >
                      Ver Repositorio
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex-none mt-14 md:mt-0 md:max-w-xl sm:max-w-xl ">
                  <Link href="http://mueblesmaldonado.vercel.app/ " target="_blank" >
                  <img
                    src="/mueblesmaldonado.png"
                    className=" md:rounded-tl-[108px]"
                    alt="muebles"
                  />
                  </Link>
                  
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
