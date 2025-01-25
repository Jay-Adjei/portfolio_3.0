'use client';

import React from 'react';
import './Features.css';
import Button1 from '../../components/Buttons/Button1';

const Card = ({ src, title, description, className, buttonClass, buttonHref, isGif }) => {
  const handleMouseEnter = (event) => {
    const wrapper = event.currentTarget;
    const video = wrapper.querySelector('video');
    if (video) {
        video.play(); // Startet das Video
    }
    wrapper.style.transform = 'scale(0.95)'; // Skaliert die Karte
};

const handleMouseLeave = (event) => {
    const wrapper = event.currentTarget;
    const video = wrapper.querySelector('video');
    if (video) {
        video.pause(); // Pausiert das Video
        video.currentTime = 0;
    }
    wrapper.style.transform = ''; // Entfernt die Skalierung
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
            <video src={src} loop muted className="card-video" />
        )}
        <div className="card-content">
            <h1 className="card-title">{title}</h1>
            {description && <p className="card-description">{description}</p>}
            <Button1 className={buttonClass} href={buttonHref} />
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
                        buttonClass="buttonfeaturelarge"
                        buttonHref="/project1"
                    />
                </div>
                <div className="grid-featurecontainer">
                    <Card
                        src="/assets/videos/Video3.mp4"
                        title="Nyx"
                        description="Recommend songs based on the user&lsquo;s mood using AI and sentiment analysis."
                        className="card-long"
                        buttonClass="buttonfeaturelong"
                        buttonHref="/project2"
                    />
                    <Card
                        src="/assets/videos/video6.mp4"
                        title="Kitsune"
                        description="Develop a branching narrative game where choices affect the outcome."
                        className="card-medium"
                        buttonClass="buttonfeaturesmall"
                        buttonHref="/portfolio"
                    />
                    <Card
                        src="/assets/videos/Video1.mp4"
                        title="Oblivion"
                        description="Let users try products in AR before purchasing, such as furniture or clothes."
                        className="card-small"
                        buttonClass="buttonfeaturesmall"
                        buttonHref="/project4"
                    />
                </div>
                <div className="grid-special-container">
                    <Card
                        src="/assets/videos/Video2.mp4"
                        title="Anubis"
                        description="Offer personalized workout plans with video tutorials and AI form correction."
                        className="card-xsmall"
                        buttonClass="buttonfeaturesmall"
                        buttonHref="/project5"
                    />
                    <Card
                        src="/assets/gifs/japanworld.gif"
                        title="Arcadia"
                        description="Your Description"
                        className="card-video"
                        buttonClass="buttonfeaturesmall"
                        buttonHref="/project1"
                        isGif={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
