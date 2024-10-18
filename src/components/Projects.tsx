import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
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
  ];

  return (
    <section className="py-16 px-8 bg-white text-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Projektid</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
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
