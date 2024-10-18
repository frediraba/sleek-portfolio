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
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:rotate-1 hover:shadow-2xl transition-transform duration-500 ease-in-out cursor-pointer">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="object-cover w-full h-40 transition-opacity duration-500 hover:opacity-90"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 transition-colors duration-500 hover:text-blue-500">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
