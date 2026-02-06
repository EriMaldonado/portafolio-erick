export interface Project {
  id: number;
  title: string;
  tag: string[];
  image: string[];
  description: string;
  technologies: string[];
  website: string;
  github: string;
}

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: "Muebles Maldonado",
    tag: ["All", "Web"],
    image: ["/projects/mueblesmaldonado.jpg", "/projects/mueblesmaldonado1.jpg"],
    description:
      "Plataforma e-commerce personalizada para una fábrica de muebles de alta calidad, enfocada en la experiencia de usuario y catálogo dinámico.",
    technologies: [
      "Typescript",
      "Nextjs",
      "Node",
      "MongoDB",
      "React",
      "Tailwind",
      "Firebase",
      "MaterialUI",
    ],
    website: "https://mueblesmaldonadoec.com/",
    github: "#",
  },
  {
    id: 2,
    title: "Pixabay-Clone",
    tag: ["All", "Web"],
    image: ["/projects/pixabayclone.jpg"],
    description:
      "Buscador de imágenes de alta resolución que consume la API de Pixabay. Permite filtrar y visualizar contenido multimedia en tiempo real.",
    technologies: ["Javascript", "React", "Node", "APIs", "CSS", "HTML5"],
    website: "https://erimaldonado.github.io/pixabay-clone/",
    github: "https://github.com/EriMaldonado/pixabay-clone/",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    tag: ["All", "Web"],
    image: ["/projects/portafolio.jpg", "/projects/portafolio1.jpg"],
    description:
      "Portafolio profesional moderno con soporte para multi-lenguaje, modo oscuro y optimización SEO.",
    technologies: [
      "Typescript",
      "Nextjs",
      "React",
      "Tailwind",
      "Shadcn",
      "EmailJS",
    ],
    website: "https://erickmaldonado.vercel.app/",
    github: "https://github.com/EriMaldonado/portafolio-erick",
  },
  {
    id: 4,
    title: "Alura Geek",
    tag: ["All", "Web"],
    image: ["/projects/alura.jpg"],
    description:
      "Aplicación tipo tienda para entusiastas del mundo geek, con gestión de productos y diseño responsivo.",
    technologies: ["React", "Javascript", "Mysql", "CSS", "HTML5"],
    website: "https://erimaldonado.github.io/alura-geek/",
    github: "https://github.com/EriMaldonado/alura-geek/tree/master",
  },
];
