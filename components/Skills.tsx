"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Skills: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="" id="skills">
      <div className="container flex flex-col justify-center">
        <div className="">
          <h2 className="text-3xl text-center p-8">Habilidades Técnicas</h2>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-justify">
            Soy un desarrollador web con experiencia en Javascript, Node.js,
            React.js, Typescript, Python, HTML5, CSS, Tailwind, MySQL, SQL
            Server y MongoDB. Mis habilidades incluyen el diseño con Figma y
            Adobe Illustrator, así como el análisis de datos utilizando PowerBI.
            Soy competente en Visual Studio Code, Prisma ORM y he trabajado en
            entornos de colaboración como AWS, GCP y Oracle Cloud. Mi enfoque se
            centra en la aplicación innovadora de tecnologías para resolver
            problemas eficientemente.
          </p>
          <div className="w-full p-auto relative">
            <Carousel
              responsive={responsive}
              infinite={true}
              className="mt-8"
              autoPlay={true}
              autoPlaySpeed={2000}
              showDots={false} // Ocultar los puntos indicadores
              arrows={true} // Ocultar las flechas de navegación
              itemClass="px-12" // Agregar espacio entre elementos
            >
              <div className="item flex flex-col items-center">
                <Image
                  src="/front.png"
                  alt="front"
                  width={60}
                  height={60}
                  className=" p-2"
                />
                <h5 className="mt-2 text-center">Front end</h5>
              </div>
              <div className="item">
                <Image
                  className=" p-2"
                  src="/typescript.png"
                  alt="typescript"
                  width={60}
                  height={60}
                />

                <h5>Typescript</h5>
              </div>
              <div className="item">
                <Image
                  className=" p-2"
                  src="/nextjs.png"
                  alt="nextjs"
                  width={60}
                  height={60}
                />
                <h5>Nextjs</h5>
              </div>
              <div className="item">
                <Image
                  className="p-2"
                  src="/node.png"
                  alt="node"
                  width={60}
                  height={60}
                />
                <h5>Nodejs</h5>
              </div>
              <div className="item">
                <Image
                  className=" p-2"
                  src="/react.png"
                  alt="react"
                  width={60}
                  height={60}
                />
                <h5>React</h5>
              </div>
              <div className="item">
                <Image
                  className="  p-2"
                  src="/javascript.png"
                  alt="javascript"
                  width={60}
                  height={60}
                />
                <h5>Javascript</h5>
              </div>
              <div className="item">
                <Image
                  className=" p-2"
                  src="/mysql.png"
                  alt="mysql"
                  width={60}
                  height={60}
                />
                <h5>MySQL</h5>
              </div>
              <div className="item">
                <Image
                  className=" p-2"
                  src="/css.png"
                  alt="css"
                  width={60}
                  height={60}
                />
                <h5>CSS</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
