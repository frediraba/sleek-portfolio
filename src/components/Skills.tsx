"use client";

import React, { useEffect, useRef, useState, useContext } from 'react';
import { LanguageContext, DarkModeContext } from '../components/context';

const skillsData = {
  en: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript (ES6+)', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Next.js', level: 70 },
    { name: 'Tailwind', level: 70 },
    { name: 'TypeScript', level: 65 },
    { name: 'Node.js', level: 60 },
    { name: 'MongoDB', level: 55 },
  ],
  ee: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript (ES6+)', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Next.js', level: 70 },
    { name: 'Tailwind', level: 70 },
    { name: 'TypeScript', level: 65 },
    { name: 'Node.js', level: 60 },
    { name: 'MongoDB', level: 55 },
  ],
};

const Skills: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // Kui sektsioon on nähtav, siis peatame jälgimise
          }
        });
      },
      { threshold: 0.3 } // Kui 30% sektsioonist on nähtav, siis käivitub
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const currentSkills = skillsData[language as 'en' | 'ee'];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`py-16 px-8 transition-all duration-700 ${
        darkMode ? 'bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 text-yellow-100' : 'bg-gradient-to-b from-blue-100 via-white to-blue-200 text-gray-900'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate-fade-in tracking-wide leading-snug">
        {language === 'en' ? 'Skills' : 'Oskused'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentSkills.map((skill, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-yellow-100">
              {skill.name}
            </h3>
            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-4">
              <div
                className={`bg-blue-500 dark:bg-yellow-400 h-4 rounded-full transition-all duration-1000 ease-in-out ${
                  visible ? 'w-full' : 'w-0'
                }`}
                style={{ width: visible ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
