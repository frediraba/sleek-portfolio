"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import { DarkModeContext, LanguageContext } from '../components/context';

const Hero: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  const texts: Record<string, { title: string; subtitle: string; buttonText: string }> = {
    en: {
      title: 'Designing the Future of Web Experiences',
      subtitle: 'Web applications created with passion and creativity',
      buttonText: 'Explore My Work',
    },
    ee: {
      title: 'Kujundan tuleviku veebikogemusi',
      subtitle: 'Kire ja loomingulisusega loodud veebirakendused',
      buttonText: 'Avasta minu tööd',
    },
  };

  const currentText = texts[language as keyof typeof texts];

  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen p-8 md:p-16 transition-all duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'
      }`}
    >
      <div className="relative z-10 text-center max-w-3xl space-y-8 mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide animate-fade-in">
          {currentText.title}
        </h1>
        <p className="text-lg md:text-2xl font-light animate-fade-in delay-150">
          {currentText.subtitle}
        </p>
        <a
          href="https://github.com/frediraba?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl animate-bounce-once"
        >
          {currentText.buttonText}
        </a>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={darkMode ? "/images/coding-image2.jpg" : "/images/coding-image.jpg"}
          alt="Koodimise pilt"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          loading="lazy"
          className="opacity-30"
        />
      </div>
    </section>
  );
};

export default Hero;
