"use client";

import Link from "next/link";
import React from "react";

function Hero() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1vEOl_hcCPQwwGAWGsJVSnXgkNkbpOc3x/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="p-0">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-10 lg:py-16 lg:flex-row lg:justify-around">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-2xl font-bold leading-none sm:text-6xl">
            Bienvenidos a mi
            <span className="text-blue-600"> portafolio personal</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-justify">
            ¡Hola! Soy un profesional apasionado de las Tecnologías de la
            Información. Me distingo por mi compromiso y enfoque proactivo. Para
            mí, el trabajo en equipo es la clave para alcanzar resultados
            excepcionales en cualquier proyecto. Encaro los desafíos como
            oportunidades de crecimiento y aprendizaje.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              onClick={handleDownload}
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-semibold rounded border border-black dark:text-black dark:bg-white "
            >
              Ver Hoja de Vida
            </button>
            <Link href="/contact">
            <button
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-semibold bg-[#15326F] rounded text-white "
            >
              Contacto
            </button>
            </Link>
            
          </div>
        </div>
        <div className="flex items-center justify-center p-12 mt-12 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-120 2xl:h-128">
          <img
            src="./developer.svg"
            alt=""
            className="object-contain h-82 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
