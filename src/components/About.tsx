"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import { LanguageContext } from '../app/layout';

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      title: 'About Me',
      description: "I'm Fredi Raba, a passionate web developer who combines creativity and technology. I build modern and responsive web applications with a focus on excellent user experience.",
    },
    ee: {
      title: 'Minust',
      description: 'Ma olen Fredi Raba, kirglik veebiarendaja, kes ühendab loomingulisuse ja tehnoloogia. Ma ehitan modernseid ja responsiivseid veebirakendusi, keskendudes suurepärasele kasutajakogemusele.',
    },
  };

  const currentText = texts[language as 'en' | 'ee'];

  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-yellow-200 py-16 px-8 flex flex-col items-center transition-all duration-500 ease-in-out">
      <h2 className="text-4xl font-bold mb-6 animate-fade-in">
        {currentText.title}
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/fredi-profile.png"
          alt="Fredi Raba"
          width={400}
          height={400}
          priority
          className="rounded-full shadow-lg animate-slide-in"
        />
        <div className="max-w-md text-center md:text-left">
          <p className="text-lg leading-relaxed">
            {currentText.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
