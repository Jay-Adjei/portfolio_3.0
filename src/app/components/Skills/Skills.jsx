'use client';

import { useState, useEffect } from 'react';
import './skill.css';

const skillsData = {
  coding: [
    { title: 'HTML5', icon: '/assets/images/about/html.webp' },
    { title: 'CSS3', icon: '/assets/images/about/css.webp' },
    { title: 'JavaScript', icon: '/assets/images/about/js.webp' },
    { title: 'React', icon: '/assets/images/about/react.webp' },
    { title: 'React Native', icon: '/assets/images/about/react.webp' },
    { title: 'Next.js', icon: '/assets/images/about/nextjs.svg' },
  ],
  tools: [
    { title: 'Git', icon: '/assets/images/about/Git.webp' },
    { title: 'GitHub', icon: '/assets/images/about/Github.webp' },
    { title: 'Visual Studio Code', icon: '/assets/images/about/VSC.webp' },
  ],
  Design: [
    { title: 'Figma', icon: '/assets/images/about/Figma.svg' },
    { title: 'Adobe Photoshop', icon: '/assets/images/about/css.webp' },
    { title: 'DaVinci Resolve', icon: '/assets/images/about/js.webp' },
  ],
};

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState('coding');
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Alle Bilder vorab laden
  useEffect(() => {
    const preloadImages = async () => {
      const allImages = Object.values(skillsData)
        .flat()
        .map(skill => skill.icon);

      try {
        await Promise.all(
          allImages.map(src => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
            });
          })
        );
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Trotzdem als geladen markieren
      }
    };

    preloadImages();
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        <div className="category-tabs">
          {Object.keys(skillsData).map(category => (
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
          {!imagesLoaded ? (
            // Loading-Zustand
            <div className="skills-loading">
              <div className="loading-spinner"></div>
              <p>Loading skills...</p>
            </div>
          ) : (
            // Skills anzeigen, wenn alle Bilder geladen sind
            skillsData[activeTab].map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {/* Füge diesen Div hinzu */}
                <div className="gradient-border"></div>

                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="skill-icon"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? 'scale(1.15) rotateZ(0deg)'
                        : 'scale(1) rotateZ(0deg)',
                  }}
                  loading="eager" // Wichtig: Sofort laden
                />
                <p className="skill-title">{skill.title}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
