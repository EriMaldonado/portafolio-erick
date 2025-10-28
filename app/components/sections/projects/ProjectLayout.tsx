import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  link: string;
  text: string;
  direction: "left" | "right";
}

interface TechnologiesProps {
  techs: string[];
}

interface ProjectLayoutProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  website: string;
  github: string;
}

const Button = ({ link, text, direction }: ButtonProps) => (
  <Link href={link} target="_blank">
    <button
      className={`py-1 px-4 rounded-xl bg-gray-800 text-white font-medium transition duration-1000 transform group-hover:translate-x-0 hover:bg-[#333333] hover:scale-105 hover:shadow-xl ${
        direction === "left"
          ? "translate-x-[-100%] group-hover:translate-x-0"
          : "translate-x-[100%] group-hover:translate-x-0"
      }`}
    >
      {text}
    </button>
  </Link>
);

const Technologies = ({ techs }: TechnologiesProps) => (
  <div className="flex justify-center flex-wrap gap-2 mb-4 text-md font-semibold">
    {techs.map((tech, index) => (
      <span
        key={index}
        className="flex items-center px-2 py-1 bg-gray-200 text-gray-900 rounded-xl dark:bg-gray-700 dark:text-white "
        style={{ fontSize: "0.8rem" }}
      >
        <Image
          src={`/${tech.toLowerCase()}.png`}
          width={14}
          height={14}
          alt="logo"
          className="mr-1"
        />
        {tech}
      </span>
    ))}
  </div>
);

const ProjectLayout = ({
  image,
  title,
  description,
  technologies,
  website,
  github,
}: ProjectLayoutProps) => (
  <div className="relative flex flex-col items-center bg-[#e9e8e4]/90 rounded-xl shadow-lg dark:bg-gray-800 overflow-hidden">
    <div className="relative group w-full">
      <Image
        className="object-cover w-full h-64 md:h-64 lg:h-64 transition-transform duration-500 group-hover:scale-105"
        src={image}
        alt={title}
        width={600}
        height={400}
      />

      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-between gap-4 w-full max-w-[300px] ">
          <Button link={website} text="Web Site" direction="left" />
          <Button link={github} text="Github" direction="right" />
        </div>
      </div>
    </div>
    <div className="py-2 px-2 text-center">
      <div className="text-xl font-bold text-gray-800 dark:text-white mb-2">
        {title}
      </div>
      <Technologies techs={technologies} />
    </div>
  </div>
);

export default ProjectLayout;
