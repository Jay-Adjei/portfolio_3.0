'use client';

import React, { useEffect } from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import HolographicCard from '../../components/HolographicCard/HolographicCard';
import HeroImage from '../../components/HeroImage/HeroImage';

const SingleCard = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      infinite: false,
      toolbar: true,
      arrows: true,
    });

    return () => Fancybox.destroy();
  }, []);

  const projectDetails = [
    { title: 'Topic', content: 'Coding' },
    { title: 'Inspiration', content: 'Behance' },
    { title: 'Tags', content: 'HTML/CSS, JS' },
    { title: 'Date', content: '31.05.2024' },
  ];

  const galleryImages = [
    'New1.jpeg',
    'New2.jpeg',
    'New3.jpeg',
    'New4.jpg',
    'New5.jpeg',
    'New6.jpeg',
    'New7.jpg',
    'redsword-img.png',
  ];

  const projectTexts = {
    heroParagraph: `
      I created this website with great dedication and effort.
      It represents countless hours of learning, research, and trial and error.
      Every detail, from design to functionality, reflects my passion for web development and my commitment to delivering a high-quality user experience. This project has been an incredible journey, allowing me to grow my skills, overcome challenges, and bring my vision to life.
    `,
    description: `
    This website is a showcase of my passion for web development and creative design.
    It features a sleek dark mode theme, providing a modern and immersive user experience.
    Throughout the project, I've utilized advanced technologies such as Three.js to bring 3D models and animations to life. The interactive visuals are designed to captivate and engage the audience.

    Many of the 3D models on the site were crafted and refined using Blender, a process that involved countless hours of dedication and attention to detail. This website is not just a collection of my technical work—it's a reflection of my ability to combine both aesthetics and functionality into a seamless experience. Every aspect, from the design to the animations, was built with care, research, and continuous learning.
    `,
  };

  const imageSources = {
    heroImage: '/assets/img/LandingBG/OniGirl11.jpg',
    holographicCard: '/assets/img/LandingBG/OniGirl1.jpg',
  };

  return (
    <>
      {/* Project Header Section */}
      <div className="section_project_header">
        <HeroImage 
          imageSrc={imageSources.heroImage} 
          altText="Oni Girl Background" 
        />

        <div className="project-hero_container">
          <div className="card-grid2">
            <HolographicCard
              imgSrc={imageSources.holographicCard}
              category="Coding"
              rarity="radiant"
            />
          </div>

          <div className="project_hero_blurb_container">
            <h1 className="heading-1">My First Project</h1>
            <h4 className="heading-4">2024</h4>
            <p className="bio-paragraph">{projectTexts.heroParagraph}</p>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="section_project_cast">
        <div className="Descriptioncontainer">
          <h2 className="heading-2">Project Includes</h2>
          <div className="cast_includes_div">
            {projectDetails.map((detail, index) => (
              <div className="cast_block" key={index}>
                <h5>{detail.title}</h5>
                <p className="Cast Names">{detail.content}</p>
              </div>
            ))}
            <div className="smalldescription">
              <h5>Description</h5>
              <p className="Cast Names">{projectTexts.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <a
            key={index}
            data-fancybox="gallery"
            href={`/assets/img/reduced_images/${image}`}
          >
            <img
              src={`/assets/img/reduced_images/${image}`}
              alt={`Thumbnail ${index + 1}`}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default SingleCard;
