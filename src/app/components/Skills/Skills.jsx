'use client';

import { useState, useEffect } from 'react';
import './skill.css';

const skillsList = [
  { title: "HTML5", icon: "/assets/icons/skills/html.png" },
  { title: "CSS3", icon: "/assets/icons/skills/css.png" },
  { title: "JavaScript", icon: "/assets/icons/skills/js.png" },
  { title: "React", icon: "/assets/icons/skills/react.png" },
  { title: "React", icon: "/assets/icons/skills/nextjs.svg" },
];

const Skills = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Nur auf dem Client setzen
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Meine Fähigkeiten</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-item">
              {/* Nur auf dem Client das Bild laden */}
              {isClient && (
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="skill-icon"
                />
              )}
              <p className="skill-title">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
