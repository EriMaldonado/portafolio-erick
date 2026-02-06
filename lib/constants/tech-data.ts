export interface TechItem {
  src: string;
  alt: string;
  label: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export const TechData: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { src: "/tech/typescript.png", alt: "TypeScript", label: "TypeScript" },
      { src: "/tech/react.png", alt: "React.js", label: "React.js" },
      { src: "/tech/nextjs.png", alt: "Next.js", label: "Next.js" },
      { src: "/tech/javascript.png", alt: "JavaScript", label: "JavaScript" },
      { src: "/tech/python.png", alt: "Python", label: "Python" },
      { src: "/tech/html5.png", alt: "HTML5", label: "HTML5" },
      { src: "/tech/tailwind.png", alt: "Tailwind", label: "Tailwind" },
      { src: "/tech/materialui.png", alt: "Material UI", label: "Material UI" },
      { src: "/tech/shadcn.png", alt: "Shadcn", label: "Shadcn" },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { src: "/tech/node.png", alt: "Node.js", label: "Node.js" },
      { src: "/tech/express.png", alt: "Express", label: "Express" },
      { src: "/tech/php.png", alt: "PHP", label: "PHP" },
      { src: "/tech/mysql.png", alt: "MySQL", label: "MySQL" },
      { src: "/tech/mongodb.png", alt: "MongoDB", label: "MongoDB" },
      { src: "/tech/apis.png", alt: "APIs", label: "APIs" },
      { src: "/tech/firebase.png", alt: "Firebase", label: "Firebase" },
      { src: "/tech/aws.png", alt: "AWS", label: "AWS" },
      { src: "/tech/gcp.png", alt: "GCP", label: "GCP" },
    ],
  },
  {
    category: "Tools",
    items: [
      { src: "/tech/visual.png", alt: "Visual Studio Code", label: "VS Code" },
      { src: "/tech/github.png", alt: "Git", label: "Git" },
      { src: "/tech/pycharm.png", alt: "PyCharm", label: "PyCharm" },
      { src: "/tech/postman.png", alt: "Postman", label: "Postman" },
      { src: "/tech/notion.png", alt: "Notion", label: "Notion" },
      { src: "/tech/figma.png", alt: "Figma", label: "Figma" },
      { src: "/tech/adobexd.png", alt: "Adobe XD", label: "Adobe XD" },
    ],
  },
];
