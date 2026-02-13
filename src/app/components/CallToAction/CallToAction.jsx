'use client';
import React, { useState, useRef, useEffect } from 'react';
import './CallToAction.css';
import { Coffee, Link, Frame } from 'lucide-react';

const CallToAction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = e => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
    }
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Jay-Adjei', '_blank');
  };

  const handleDemoClick = () => {
    window.open('projects', '_self');
  };

  const handleContactClick = () => {
    window.open('mailto:mr.adjei17@gmail.com', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      className={`cta-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Background Elements */}
      <div className="background-grid"></div>
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      <div className="cta-container">
        {/* Main Content Card */}
        <div
          ref={cardRef}
          className="main-card"
          onMouseMove={handleMouseMove}
          style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
          }}
        >
          <div className="card-glow"></div>

          {/* Header */}
          <div className="cta-header">
            <div className="status-indicator">
              <Coffee size={20} />
              <span>Open to new projects</span>
            </div>

            <h2 className="cta-title">
              <span className="title-line">Let&apos;s build</span>
              <span className="title-line gradient">something exceptional</span>
              <span className="title-line">together</span>
            </h2>

            <p className="cta-description">
              Thoughtful ideas. Honest work. Real results.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="cta-actions">
            <button className="primary-button" onClick={handleContactClick}>
              <span className="button-text">Start a project</span>
              <div className="button-shine"></div>
            </button>

            <div className="secondary-actions">
              <button className="secondary-button" onClick={handleDemoClick}>
                <Frame size={20} />
                <span>See my work</span>
              </button>

              <button className="secondary-button" onClick={handleGitHubClick}>
                <Link size={20} />
                <span>GitHub profile</span>
              </button>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="skills-preview">
            <div className="skill-tag">Straightforward Communication</div>
            <div className="skill-tag">Design + Logic</div>
            <div className="skill-tag">Crafted with Care</div>
            <div className="skill-tag">Client-First</div>
            <div className="skill-tag">Attention to Detail</div>
            <div className="skill-tag">Human-Centered Design</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
