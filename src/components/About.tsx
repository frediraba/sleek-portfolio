"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import { LanguageContext, DarkModeContext } from '../components/context';

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  const texts = {
    en: {
      title: 'About Me',
      description:
        "I'm Fredi Raba, a passionate web developer who combines creativity and technology. I build modern and responsive web applications with a focus on excellent user experience. I'm always eager to learn new technologies and strive to create innovative solutions that make a difference.",
    },
    ee: {
      title: 'Minust',
      description:
        'Ma olen Fredi Raba, kirglik veebiarendaja, kes ühendab loomingulisuse ja tehnoloogia. Ma ehitan modernseid ja responsiivseid veebirakendusi, keskendudes suurepärasele kasutajakogemusele. Olen alati valmis õppima uusi tehnoloogiaid ja püüan luua innovatiivseid lahendusi, mis muudavad midagi paremaks.',
    },
  };

  const currentText = texts[language as 'en' | 'ee'];

  return (
    <section
      id="about"
      className={`relative flex flex-col md:flex-row items-center justify-center min-h-screen py-20 px-8 transition-all duration-700 ${
        darkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-yellow-100' : 'bg-gradient-to-b from-blue-50 via-white to-blue-200 text-gray-900'
      }`}
    >
      <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-10 md:mb-0">
        <Image
          src="/images/fredi-profile.png"
          alt="Fredi Raba"
          width={400}
          height={400}
          loading="lazy"
          className="rounded-full shadow-lg transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="max-w-xl md:ml-10 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide leading-snug">
          {currentText.title}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          {currentText.description}
        </p>
      </div>
    </section>
  );
};

export default About;
