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
    title: "Electrocréditos el Ahorro",
    tag: ["All", "Web"],
    content: (
      <ProjectLayout
        image="/electrocreditos.png"
        title="Electrocréditos el Ahorro"
        description="Electrocréditos el Ahorro"
        technologies={[
          "Javascript",
          "Bootstrap",
          "Nextjs",
          "Node",
          "Mysql",
          "React",
        ]}
        website="https://electrocreditoselahorro.com/"
        github="#"
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
        github="#"
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
        technologies={["React", "Javascript", "CSS", "HTML5"]}
        website="https://erimaldonado.github.io/alura-geek/"
        github="https://github.com/EriMaldonado/alura-geek/tree/master"
      />
    ),
  },
  {
    id: 5,
    title: "Api Pixabay",
    tag: ["All", "Web"],
    content: (
      <ProjectLayout
        image="/api-pixabay.png"
        title="Pixabay Image Search"
        description="Búsqueda de imágenes usando la API de Pixabay"
        technologies={["Javascript", "React", "Node", "APIs", "CSS"]}
        website="https://erimaldonado.github.io/api-pixabay/"
        github="https://github.com/EriMaldonado/api-pixabay/"
      />
    ),
  },
];

export default ProjectsData;
