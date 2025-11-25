import ProjectLayout from "./ProjectLayout";

const ProjectsData = [
  {
    id: 1,
    title: "Muebles Maldonado",
    tag: ["All", "Web"],
    content: (
      <ProjectLayout
        image="/mueblesmaldonado.png"
        title="Muebles Maldonado"
        description="Muebles Maldonado"
        technologies={[
          "Typescript",
          "Nextjs",
          "Node",
          "MongoDB",
          "React",
          "Tailwind",
          "Firebase",
          "MaterialUI",
        ]}
        website="https://mueblesmaldonadoec.com/"
        github="#"
      />
    ),
  },
  {
    id: 2,
    title: "Pixabay-Clone",
    tag: ["All", "Web"],
    content: (
      <ProjectLayout
        image="/pixabayclone.jpg"
        title="Pixabay Clone Image Search"
        description="Búsqueda de imágenes usando la API de Pixabay"
        technologies={["Javascript", "React", "Node", "APIs", "CSS", "HTML5"]}
        website="https://erimaldonado.github.io/pixabay-clone/"
        github="https://github.com/EriMaldonado/pixabay-clone/"
      />
    ),
  },

  {
    id: 3,
    title: "Personal Portfolio",
    tag: ["All", "Web"],
    content: (
      <ProjectLayout
        image="/portafolio.png"
        title="Personal Portfolio"
        description="Portfolio personal de Erick Maldonado"
        technologies={[
          "Typescript",
          "Nextjs",
          "React",
          "CSS",
          "apis",
          "Shadcn",
        ]}
        website="https://erickmaldonado.vercel.app/"
        github="https://github.com/EriMaldonado/portafolio-erick"
      />
    ),
  },
  {
    id: 4,
    title: "Alura Geek",
    tag: ["All", "Web"],
    content: (
      <ProjectLayout
        image="/alura.png"
        title="AluraGeek"
        description="Proyecto de Alura Geek"
        technologies={["React", "Javascript", "Mysql", "CSS", "HTML5"]}
        website="https://erimaldonado.github.io/alura-geek/"
        github="https://github.com/EriMaldonado/alura-geek/tree/master"
      />
    ),
  },
];

export default ProjectsData;
