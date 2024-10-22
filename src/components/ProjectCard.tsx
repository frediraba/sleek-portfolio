"use client";

import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-700 hover:scale-105 hover:shadow-2xl hover:rotate-1 cursor-pointer">
      <div className="relative w-full h-40 md:h-48 lg:h-56">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg transition-opacity duration-500 hover:opacity-90"
        />
      </div>
      <div className="p-4 text-gray-800 dark:text-yellow-200">
        <h3 className="text-2xl font-bold mb-2 transition-colors duration-500 hover:text-blue-500 dark:hover:text-yellow-400">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-yellow-300 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute top-2 right-2 bg-blue-500 dark:bg-yellow-400 text-white dark:text-black py-1 px-3 rounded-full text-sm font-semibold transition-transform duration-500 hover:scale-110">
        {title.split(' ')[0]}
      </div>
    </div>
  );
};

export default ProjectCard;

