'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  Code,
  MonitorSmartphone,
  Paintbrush2,
  Sparkles,
  CodeXml,
  FolderHeart,
  Activity,
} from 'lucide-react';
import './FeaturesInteractive.css';

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
  highlight,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = e => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`feature-card ${className} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
    >
      {/* Background Effects */}
      <div className="card-background"></div>
      <div className="hover-gradient"></div>
      <div className="particle-field">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`particle p-${i + 1}`}></div>
        ))}
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 className="feature-title">
          <span className="title-text">{title}</span>
          <span className="title-highlight">{highlight}</span>
        </h3>

        <p className="feature-description">{description}</p>

        {/* Icon - in der Box */}
        <div className="feature-icon">
          <Icon size={32} />
        </div>
      </div>

      {/* Border Effects */}
      <div className="animated-border"></div>
      <div className="corner-highlights">
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>
      </div>
    </div>
  );
};

const FeaturesInteractive = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'Clean code',
      highlight: 'Built to last',
      description:
        'Readable, well‑structured code that’s easy to test, maintain, and scale—written with modern standards.',
      icon: Code,
      className: 'card-1',
    },
    {
      title: 'Responsive design',
      highlight: 'Mobile‑first',
      description:
        'Pixel‑perfect layouts that adapt smoothly from phones to desktops for a consistent, intuitive experience.',
      icon: MonitorSmartphone,
      className: 'card-2',
    },
    {
      title: 'Design‑led UI/UX',
      highlight: 'Figma to frontend',
      description:
        'Collaborative design process—from wireframes to polished interfaces—focused on clarity, accessibility, and flow.',
      icon: Paintbrush2,
      className: 'card-3',
    },
    {
      title: 'Reliable delivery',
      highlight: 'Clear communication',
      description:
        'Proactive updates, realistic estimates, and on‑time delivery—with a solutions‑first mindset.',
      icon: Sparkles,
      className: 'card-4',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`features-section ${sectionVisible ? 'visible' : ''}`}
    >
      {/* Background Elements Blue Circle */}
      <div className="section-background">
        <div className="bg-grid"></div>
        <div className="floating-elements">
          <div className="float-orb orb-1"></div>
          <div className="float-orb orb-2"></div>
          <div className="float-orb orb-3"></div>
        </div>
      </div>

      <div className="features-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-main">Your goals,</span>
            <span className="title-accent">first.</span>
          </h2>
          <p className="section-subtitle">
            I center your needs—listening, clarifying, and delivering with
            meticulous diligence to craft intuitive, on‑brand experiences that
            serve your users.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-[900px] mx-auto">
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                style={{ '--index': index }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="features-stats">
          <div className="stat-group">
            <CodeXml size={20} />
            <span>Trusted, Secure Code</span>
          </div>
          <div className="stat-group">
            <Activity size={20} />
            <span>Crafting with Care and Passion</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesInteractive;
