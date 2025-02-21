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
    <div className="space-y-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-col-3 gap-12 px-4 pt-4">
        {TechData.map((category) => (
          <div
            key={category.category}
            className="col-span-1 flex justify-center"
          >
            <div className="bg-[#e5dec7] dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md hover:shadow-2xl transform transition-all duration-300 p-3">
              <h2 className="text-2xl font-bold text-center text-[#15326F] pb-3 dark:text-[#5872c5]">
                {category.category}
              </h2>
              <div className="grid grid-cols-3 gap-6">
                {category.items.slice(0, 9).map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-[#e5dec7] dark:bg-gray-800 
                  
                    rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 relative mx-auto mb-3">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        style={{ objectFit: "contain" }}
                        className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center">
                      <span className="text-lg text-[#333333] dark:text-white font-semibold">
                        {item.label}
                      </span>
                    </div>
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
