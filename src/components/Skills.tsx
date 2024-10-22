"use client";

import React, { useEffect, useRef, useState, useContext } from 'react';
import { LanguageContext } from '../app/layout';

const skillsData = {
  en: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript (ES6+)', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Next.js', level: 70 },
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
    { name: 'TypeScript', level: 65 },
    { name: 'Node.js', level: 60 },
    { name: 'MongoDB', level: 55 },
  ],
};

const Skills: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const { language } = useContext(LanguageContext);

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
      className="py-16 px-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-yellow-200 transition-all duration-500 ease-in-out"
    >
      <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
        {language === 'en' ? 'Skills' : 'Oskused'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2 dark:text-yellow-300">
              {skill.name}
            </h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
              <div
                className={`bg-blue-500 dark:bg-yellow-500 h-4 rounded-full transition-all duration-1000 ease-in-out ${
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
