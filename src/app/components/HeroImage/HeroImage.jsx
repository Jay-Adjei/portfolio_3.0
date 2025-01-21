'use client';


// components/HeroImage.js
import './HeroImages.css'; 
export default function HeroImage({ imageSrc, altText }) {
    return (
      <div className="project-hero1">
        <div className="overlay"></div>
        <img
          src={imageSrc}
          alt={altText}
          className="hero-img"
        />
      </div>
    );
  }
  