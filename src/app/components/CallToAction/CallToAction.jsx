'use client';

import React, { useState, useRef } from 'react';
import './CallToAction.css';

const CallToAction = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frameRequestRef = useRef(null);

  const handleMouseMove = (e) => {
    if (frameRequestRef.current) cancelAnimationFrame(frameRequestRef.current);
  
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    frameRequestRef.current = requestAnimationFrame(() => {
      const tiltX = ((rect.height / 2) - y) / 30; // Maus oben → positiv
      const tiltY = (x - rect.width / 2) / 30;    // Maus rechts → positiv
      setTilt({ x: tiltX, y: tiltY });
    });
  };
  
  

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-header">
            <h2 className="cta-title">
              <span className="cta-gradient-part">Crafting Digital</span>
              <span className="cta-cyber-part">EXCELLENCE</span>
            </h2>
            <p className="cta-subtitle">
              Let's engineer your vision with pixel perfection
            </p>
          </div>

          <div className="cta-visual">
            <div
              className="hologram-frame"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <img
                src="/assets/img/LandingBG/OniBoy1.webp"
                alt="Code Interface"
                className="hologram-image"
              />
              <div className="scanline-overlay"></div>
            </div>

            <div className="cta-buttons">
              <button className="neo-button" onClick={() => window.open("#")}>
                <span className="button-label">Live Demos</span>
                <span className="button-aura"></span>
              </button>
              <button className="neo-button secondary" onClick={() => window.open("#")}>
                <span className="button-label">GitHub Hub</span>
                <span className="button-aura"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
