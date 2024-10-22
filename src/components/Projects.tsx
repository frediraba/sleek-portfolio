"use client";

import React, { useContext } from 'react';
import ProjectCard from './ProjectCard';
import { LanguageContext } from '../app/layout';

const Projects: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const projectsData = {
    en: [
      {
        title: 'AI-based Weather App',
        description: 'Interactive weather app that uses artificial intelligence to provide personalized weather forecasts.',
        imageUrl: '/images/weather-app.jpg',
      },
      {
        title: 'Virtual Portfolio',
        description: 'Innovative portfolio website featuring interactive animations and dynamic content.',
        imageUrl: '/images/portfolio-app.jpg',
      },
      {
        title: 'E-commerce Product Cards',
        description: 'E-commerce solution displaying dynamic product cards using React and Framer Motion.',
        imageUrl: '/images/ecommerce-app.jpg',
      },
    ],
    ee: [
      {
        title: 'AI-põhine Ilmarakendus',
        description: 'Interaktiivne ilmarakendus, mis kasutab tehisintellekti, et pakkuda personaliseeritud ilmaprognoose.',
        imageUrl: '/images/weather-app.jpg',
      },
      {
        title: 'Virtuaalne Portfell',
        description: 'Innovatiivne portfoolio veebileht, mis sisaldab interaktiivseid animatsioone ja dünaamilist sisu.',
        imageUrl: '/images/portfolio-app.jpg',
      },
      {
        title: 'E-kaubanduse Tootekaardid',
        description: 'E-kaubanduse lahendus, mis kuvab dünaamilisi tootekaardid, kasutades Reacti ja Framer Motion’it.',
        imageUrl: '/images/ecommerce-app.jpg',
      },
    ],
  };

  const currentProjects = projectsData[language as 'en' | 'ee'];

  return (
    <section id="projects" className="py-16 px-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-yellow-200 transition-all duration-500 ease-in-out">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-yellow-200 animate-fade-in">
        {language === 'en' ? 'Projects' : 'Projektid'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
