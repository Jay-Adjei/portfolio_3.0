"use client";

import React from 'react';
import './Features.css';

const Card = ({ src, title, description, className, buttonHref, isGif }) => {
  const handleMouseEnter = (event) => {
    const wrapper = event.currentTarget;
    const video = wrapper.querySelector('video');
    if (video) {
      video.play().catch((e) => {
        console.error('Error playing video:', e);
      });
    }
    wrapper.style.transform = 'scale(0.95)';
  };

  const handleMouseLeave = (event) => {
    const wrapper = event.currentTarget;
    const video = wrapper.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    wrapper.style.transform = '';
  };

  return (
    <div 
      className={`card-wrapper ${className}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {isGif ? (
        <img src={src} alt={title} className="card-video" />
      ) : (
        <video
          src={src}
          loop
          muted
          className="card-video"
          onError={(e) => console.error('Error loading video:', e)}
        />
      )}
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        {description && <p className="card-description">{description}</p>}
        
        {/* Custom SVG Button */}
        <a href={buttonHref} className="custombutton1">
          <svg
            id="Ebene_3"
            data-name="Ebene 3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 50"
            width="160"
            height="50"
          >
            <polygon className="cls-1" points="12.12 .2 0 12.32 0 49.5 187.88 49.5 200 37.38 200 .2 12.12 .2"/>
            <circle className="cls-2" cx="196.48" cy="3.98" r=".9"/>
            <circle className="cls-2" cx="196.48" cy="7.52" r=".9"/>
            <circle className="cls-2" cx="193.06" cy="3.98" r=".9"/>
            <circle className="cls-2" cx="4.1" cy="45.87" r=".9"/>
            <circle className="cls-2" cx="4.1" cy="42.28" r=".9"/>
            <text className="custombutton1-text" x="50%" y="50%" dy="0.35em" text-anchor="middle" alignment-baseline="middle">
          View Project
          </text>
          </svg>
        </a>
      </div>
    </div>
  );
};


const Features = () => {
    return (
        <section className="features-section">
            <div className="featurecontainer">
                <div className="grid-largecontainer">
                    <Card
                        src="/assets/videos/video7.mp4"
                        title="Raijin"
                        description="Offer personalized workout plans with video tutorials and AI form correction."
                        className="card-large"
                        buttonHref="/project1"
                    />
                </div>
                <div className="grid-featurecontainer">
                    <Card
                        src="/assets/videos/Video3.mp4"
                        title="Nyx"
                        description="Recommend songs based on the user&lsquo;s mood using AI and sentiment analysis."
                        className="card-long"
                        buttonHref="/project2"
                    />
                    <Card
                        src="/assets/videos/video6.mp4"
                        title="Kitsune"
                        description="Develop a branching narrative game where choices affect the outcome."
                        className="card-medium"
                        buttonHref="/portfolio"
                    />
                    <Card
                        src="/assets/videos/Video1.mp4"
                        title="Oblivion"
                        description="Let users try products in AR before purchasing, such as furniture or clothes."
                        className="card-small"
                        buttonHref="/project4"
                    />
                </div>
                <div className="grid-special-container">
                    <Card
                        src="/assets/videos/Video2.mp4"
                        title="Anubis"
                        description="Offer personalized workout plans with video tutorials and AI form correction."
                        className="card-xsmall"
                        buttonHref="/project5"
                    />
                    <Card
                        src="/assets/gifs/japanworld.gif"
                        title="Arcadia"
                        description="Your Description"
                        className="card-video"
                        buttonHref="/project1"
                        isGif={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
