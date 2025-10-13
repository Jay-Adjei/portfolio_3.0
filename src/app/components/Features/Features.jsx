'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Features.css';
import AnimatedTitle from '../Animations/AnimatedTitle';

const Card = ({ src, title, description, className, buttonHref, isGif }) => {
  const [isClient, setIsClient] = useState(false);
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsClient(true); // Clientseitig einschalten
  }, []);

  // Mouse tracking for glow effect
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMouseMove = e => {
      const rect = wrapper.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      wrapper.style.setProperty('--mouse-x', `${x}%`);
      wrapper.style.setProperty('--mouse-y', `${y}%`);
    };

    wrapper.addEventListener('mousemove', handleMouseMove);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video && !isGif) {
      video.play().catch(e => {
        console.error('Error playing video:', e);
      });
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video && !isGif) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`card-home-features-wrapper ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isGif ? (
        <img src={src} alt={title} className="card-home-features-video" />
      ) : // Nur clientseitig das Video rendern, sonst null (kein Server-Video)
      isClient ? (
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          className="card-home-features-video"
          onError={e => console.error('Error loading video:', e)}
        />
      ) : null}

      {/* Content bleibt gleich */}
      <div className="card-home-features-content">
        <div>
          <h3 className="card-home-features-title">{title}</h3>
          {description && (
            <p className="card-home-features-description">{description}</p>
          )}
        </div>

        {!buttonHref || buttonHref === 'null' || buttonHref === '#' ? (
          <button
            type="button"
            className="card-home-features-button"
            aria-disabled="true"
            onClick={e => e.preventDefault()}
          >
            View Project
            <ArrowUpRight
              className="card-home-features-button-icon"
              size={16}
            />
          </button>
        ) : (
          <a
            href={buttonHref}
            className="card-home-features-button"
            aria-label={`View ${title} project`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <ArrowUpRight
              className="card-home-features-button-icon"
              size={16}
            />
          </a>
        )}
      </div>
    </div>
  );
};

const CardHomeFeatures = () => {
  return (
    <section className="card-home-features-section">
      {/* Floating Background Elements */}
      <div className="card-home-features-orb card-home-features-orb-1"></div>
      <div className="card-home-features-orb card-home-features-orb-2"></div>

      <div className="card-home-features-container">
        {/* Header Section */}
        <header className="card-home-features-intro" id="ScrollToFeatures">
          <AnimatedTitle
            text="Featured Projects"
            className="card-home-features-intro-text"
            wordSpace="px-2"
          />
          <p className="card-home-features-intro-description">
            A hand-picked collection of my best work showcasing my skills in
            both mobile and web development.
          </p>
        </header>
        {/* Large Featured Card */}
        <div className="card-home-features-grid-large">
          <Card
            src="/assets/videos/drift.mp4"
            title="ClassClock-Web"
            description="Monitor and manage student attendance with geolocation and QR verification and real-time reporting."
            className="card-home-features-large"
            buttonHref="https://github.com/Jay-Adjei/classClock-Web"
          />
        </div>
        {/* Main Feature Grid */}
        <div className="card-home-features-grid-feature">
          <Card
            src="/assets/videos/Video3.mp4"
            title="ClassClock-App"
            description="Mobile attendance tracking with geolocation, QR verification, and real-time reporting for secure student check-ins."
            className="card-home-features-long"
            buttonHref="https://github.com/Jay-Adjei/classClock-app"
          />
          <Card
            src="/assets/videos/Video2.mp4"
            title="CDN ModuFetch"
            description="Fetch and download your content directly from your AWS S3 bucket with simple, reliable downloads."
            className="card-home-features-medium"
            buttonHref={null}
          />
          <Card
            src="/assets/videos/redfire.mp4"
            title="Promptopia"
            description="AI-Powered Prompt Management Platform for Developers and Creatives."
            className="card-home-features-small"
            buttonHref="https://github.com/Jay-Adjei/share_prompts-web-app"
          />
        </div>
        {/* Special Grid Section */}
        <div className="card-home-features-grid-large">
          <Card
            src="/assets/animations/gifs/eyes.gif"
            title="Coming Soon"
            description="Exciting projects are on the horizon. Stay tuned for updates!"
            className="card-home-features-large"
            buttonHref={null}
            isGif={true} // ← wichtig!
          />
        </div>
      </div>
    </section>
  );
};

export default CardHomeFeatures;
