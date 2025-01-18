'use client';

import { useState, useEffect } from 'react';

const skillsList = [
  { title: "HTML5", icon: "/assets/icons/skills/html.png" },
  { title: "CSS3", icon: "/assets/icons/skills/html.png" }, // Korrigiere Pfad für CSS
  { title: "JavaScript", icon: "/assets/icons/skills/html.png" }, // Korrigiere Pfad für JS
  { title: "React", icon: "/assets/icons/skills/html.png" }, // Korrigiere Pfad für React
];

const Skills = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Nur auf dem Client setzen
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-red-200 via-red-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Meine Fähigkeiten
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="skill-item bg-white shadow-lg rounded-xl p-8 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Nur auf dem Client das Bild laden */}
              {isClient && (
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="h-20 w-20 mb-6 transition-transform duration-200 ease-in-out transform hover:scale-110"
                  width={80}
                  height={80}
                />
              )}
              <p className="text-lg font-semibold text-gray-700">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
