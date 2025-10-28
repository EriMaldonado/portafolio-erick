import React from "react";
import Image from "next/image";

const TechData = [
  {
    category: "Frontend",
    items: [
      { src: "/javascript.png", alt: "JavaScript", label: "JavaScript" },
      { src: "/typescript.png", alt: "TypeScript", label: "TypeScript" },
      { src: "/react.png", alt: "React.js", label: "React.js" },
      { src: "/nextjs.png", alt: "Next.js", label: "Next.js" },
      { src: "/python.png", alt: "Python", label: "Python" },
      { src: "/html5.png", alt: "HTML5", label: "HTML5" },
      { src: "/tailwind.png", alt: "Tailwind", label: "Tailwind" },
      { src: "/materialui.png", alt: "Material UI", label: "Material UI" },
      { src: "/bootstrap.png", alt: "Bootstrap", label: "Bootstrap" },
      { src: "/shadcn.png", alt: "Shadcn", label: "Shadcn" },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { src: "/node.png", alt: "Node.js", label: "Node.js" },
      { src: "/express.png", alt: "Express", label: "Express" },
      { src: "/php.png", alt: "PHP", label: "PHP" },
      { src: "/mysql.png", alt: "MySQL", label: "MySQL" },
      { src: "/mongodb.png", alt: "MongoDB", label: "MongoDB" },
      { src: "/apis.png", alt: "APIs", label: "APIs" },
      { src: "/firebase.png", alt: "Firebase", label: "Firebase" },
      { src: "/aws.png", alt: "AWS", label: "AWS" },
      { src: "/gcp.png", alt: "GCP", label: "GCP" },
    ],
  },
  {
    category: "Tools",
    items: [
      { src: "/visual.png", alt: "Visual Studio Code", label: "VS Code" },
      { src: "/github.png", alt: "Git", label: "Git" },
      { src: "/pycharm.png", alt: "PyCharm", label: "PyCharm" },
      { src: "/postman.png", alt: "Postman", label: "Postman" },
      { src: "/notion.png", alt: "Notion", label: "Notion" },
      { src: "/figma.png", alt: "Figma", label: "Figma" },
      { src: "/adobexd.png", alt: "Adobe XD", label: "Adobe XD" },
    ],
  },
];

const SkillsTabContent: React.FC = () => {
   return (
     <div className="space-y-10 py-6">
       <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
         {TechData.map((category) => (
           <div key={category.category} className="flex justify-center">
             <div className="bg-gradient-to-br from-[#e9e8e4]/90 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl w-full max-w-md p-4 transition-transform hover:scale-105 hover:shadow-2xl">
               <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 pb-4">
                 {category.category}
               </h2>
               <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                 {category.items.map((item, index) => (
                   <div
                     key={index}
                     className="group flex flex-col items-center bg-white dark:bg-gray-700 rounded-xl p-2 shadow-md transition-all hover:scale-105 hover:shadow-lg"
                   >
                     <div className="w-10 h-10 relative mb-1">
                       <Image
                         src={item.src}
                         alt={item.alt}
                         fill
                         style={{ objectFit: "contain" }}
                         className="transition-transform duration-500 ease-in-out transform group-hover:rotate-6"
                       />
                     </div>
                     <span className="text-sm font-semibold text-gray-700 dark:text-white text-center">
                       {item.label}
                     </span>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
};

export default SkillsTabContent;
