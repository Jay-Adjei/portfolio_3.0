"use client";

import { useState } from 'react';
import './skill.css';

const skillsData = {
  coding: [
    { title: "HTML5", icon: "/assets/img/skills/html.webp" },
    { title: "CSS3", icon: "/assets/img/skills/css.webp" },
    { title: "JavaScript", icon: "/assets/img/skills/js.webp" },
    { title: "React", icon: "/assets/img/skills/react.webp" },
    { title: "CSS3", icon: "/assets/img/skills/css.webp" },
    { title: "JavaScript", icon: "/assets/img/skills/js.webp" },
    { title: "CSS3", icon: "/assets/img/skills/css.webp" },
    { title: "JavaScript", icon: "/assets/img/skills/js.webp" },
  ],
  software: [
    { title: "CSS3", icon: "/assets/img/skills/css.webp" },
    { title: "JavaScript", icon: "/assets/img/skills/js.webp" },
    { title: "CSS3", icon: "/assets/img/skills/css.webp" },
    { title: "JavaScript", icon: "/assets/img/skills/js.webp" },
  ],
  tools: [
    { title: "CSS3", icon: "/assets/img/skills/css.webp" },
    { title: "JavaScript", icon: "/assets/img/skills/js.webp" },
    { title: "CSS3", icon: "/assets/img/skills/css.webp" },
    { title: "JavaScript", icon: "/assets/img/skills/js.webp" },
  ],
  Design: [
    { title: "CSS3", icon: "/assets/img/skills/css.webp" },
    { title: "JavaScript", icon: "/assets/img/skills/js.webp" },
    { title: "CSS3", icon: "/assets/img/skills/css.webp" },
    { title: "JavaScript", icon: "/assets/img/skills/js.webp" },
  ]
};

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState('coding');

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Meine Fähigkeiten</h2>
        
        <div className="category-tabs">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              className={`tab-button ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skillsData[activeTab].map((skill, index) => (
            <div 
              key={index}
              className="skill-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className="skill-icon"
                loading="lazy"
                style={{
                  transform: hoveredIndex === index 
                    ? 'scale(1.15) rotateZ(0deg)' 
                    : 'scale(1) rotateZ(0deg)'
                }}
              />
              <p className="skill-title">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
