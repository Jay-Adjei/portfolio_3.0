'use client';
import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-heading">
              <span className="cta-main">Why not Now?</span>
              <span className="cta-sub">Let&#39;s Create Something Amazing</span>
            </h2>
          </div>



          <div className="CallToAction-info-card">
            <h5 className="CallToAction-info-label">Inspiration</h5>
            <p className="CallToAction-info-text">hey</p>
          </div>

          <div className="cta-image-wrapper">
            <img 
              src="/assets/img/LandingBG/OniBoy1.webp" 
              alt="Professional Opportunity" 
              className="cta-image"
            />
          </div>

          <div className="CallToAction-cta-wrapper">
            <button
              className="CallToAction-cta-button"
              onClick={() => window.open("https://your-live-demo-link.com", "_blank", "noopener,noreferrer")}
            >
              Live-Demo ansehen
            </button>
            <button
              className="CallToAction-cta-button"
              onClick={() => window.open("https://github.com/your-repository", "_blank", "noopener,noreferrer")}
            >
              Zum GitHub-Repository
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
