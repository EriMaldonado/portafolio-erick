import React, { FC } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  src: any;
  buttonLink: string;
  LinkCode?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, src, buttonLink, LinkCode }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img src={src} className="w-full h-56 object-cover object-center" alt={title} />
          <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 rounded-tr-md">New</div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex justify-center space-x-4">
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Ver demo</a>
            {LinkCode && <a href={LinkCode} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Repositorio</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
