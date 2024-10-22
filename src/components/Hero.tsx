"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import { DarkModeContext, LanguageContext } from '../app/layout'; // Muudetud importimise tee

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
      className={`relative ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-600 to-blue-800'
      } text-white h-screen flex flex-col justify-center items-center transition-all duration-500`}
    >
      <Image
        src={darkMode ? "/images/coding-image2.jpg" : "/images/coding-image.jpg"}
        alt="Koodimise pilt"
        fill
        className={`absolute inset-0 w-full h-full object-cover object-center ${
          darkMode ? 'opacity-20' : 'opacity-30'
        } transition-opacity duration-500`}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">{currentText.title}</h1>
        <p className="text-2xl mb-8">{currentText.subtitle}</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-md font-semibold transition duration-300 transform hover:scale-105 hover:bg-purple-500 hover:text-white">
          {currentText.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
