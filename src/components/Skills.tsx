import React from 'react';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript (ES6+)', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Next.js', level: 70 },
  { name: 'TypeScript', level: 65 },
  { name: 'Node.js', level: 60 },
  { name: 'MongoDB', level: 55 },
];

const Skills: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-gray-50 text-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Oskused</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;