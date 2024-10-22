"use client";

import React, { useContext } from 'react';
import ProjectCard from './ProjectCard';
import { LanguageContext } from '../components/context';

const Projects: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const projectsData = {
    en: [
      {
        title: 'AI-based Weather App',
        description: 'Interactive weather app that uses artificial intelligence to provide personalized weather forecasts. Built with modern technologies for the best user experience.',
        imageUrl: '/images/weather-app.jpg',
      },
      {
        title: 'Virtual Portfolio',
        description: 'Innovative portfolio website featuring interactive animations, dynamic content, and showcasing development skills in a creative format.',
        imageUrl: '/images/portfolio-app.jpg',
      },
      {
        title: 'E-commerce Product Cards',
        description: 'E-commerce solution displaying dynamic product cards using React and Framer Motion to enhance user engagement and drive sales.',
        imageUrl: '/images/ecommerce-app.jpg',
      },
    ],
    ee: [
      {
        title: 'AI-põhine Ilmarakendus',
        description: 'Interaktiivne ilmarakendus, mis kasutab tehisintellekti, et pakkuda personaliseeritud ilmaprognoose. Ehitatud kaasaegsete tehnoloogiatega parima kasutuskogemuse saavutamiseks.',
        imageUrl: '/images/weather-app.jpg',
      },
      {
        title: 'Virtuaalne Portfell',
        description: 'Innovatiivne portfoolio veebileht, mis sisaldab interaktiivseid animatsioone ja dünaamilist sisu ning näitab arendusoskusi loomingulises vormis.',
        imageUrl: '/images/portfolio-app.jpg',
      },
      {
        title: 'E-kaubanduse Tootekaardid',
        description: 'E-kaubanduse lahendus, mis kuvab dünaamilisi tootekaardid, kasutades Reacti ja Framer Motion’it, et suurendada kasutajate seotust ja müüki.',
        imageUrl: '/images/ecommerce-app.jpg',
      },
    ],
  };

  const currentProjects = projectsData[language as 'en' | 'ee'];

  return (
    <section
      id="projects"
      className="py-20 px-10 bg-gradient-to-b from-blue-50 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-yellow-100 transition-all duration-700"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide leading-snug">
        {language === 'en' ? 'Projects' : 'Projektid'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
