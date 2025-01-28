'use client'; // Diese Zeile hinzufügen

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Verwende useParams für App Router
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import HolographicCard from '../../components/HolographicCard/HolographicCard';
import HeroImage from '../../components/HeroImage/HeroImage';
import LikeButton from "../../components/LikeButton/LikeButton";
import './portfolioposts.css';

const SingleCard = () => {
  const params = useParams(); // Verwende useParams, um den Slug zu erhalten
  const slug = params.slug; // Extrahiere den Slug aus den Parametern
  const [projectData, setProjectData] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Setze den Client-State
  }, []);

  useEffect(() => {
    if (slug) {
      const fetchProjectData = async () => {
        try {
          const response = await fetch('/data/portfoliopost.json');
          const data = await response.json();
          const project = data.find(p => p.slug === slug); // Finde das Projekt mit dem entsprechenden Slug
          setProjectData(project);
        } catch (error) {
          console.error('Error loading project data:', error);
        }
      };

      fetchProjectData();
    }
  }, [slug]); // Wenn sich der Slug ändert, wird das Projekt neu geladen

  if (!projectData) return <div>Loading...</div>; // Ladeanzeige, während die Daten geladen werden

  
  return (
    <>
      {/* Project Header Section */}
      <div className="section_project_header">
        <HeroImage 
          imageSrc={projectData.heroImage} 
          altText={`${projectData.title} Background`} 
        />

        <div className="project-hero_container">
          <div className="card-grid2">
            <HolographicCard
              imgSrc={projectData.holographicCard}
              category={projectData.category}
              rarity="ShineBlitz"
            />
          </div>

          <div className="project_hero_blurb_container">
            <h4 className="heading-4">{projectData.year}</h4>
            <h1 className="heading-1">{projectData.title}</h1>
            <p className="bio-paragraph">{projectData.projectTexts.heroParagraph}</p>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="section_project_cast">
        <div className="Descriptioncontainer">
          <h2 className="heading-2">Project Includes</h2>
          <div className="cast_includes_div">
            {projectData.projectDetails.map((detail, index) => (
              <div className="cast_block" key={index}>
                <h5>{detail.title}</h5>
                <p className="Cast Names">{detail.content}</p>
              </div>
            ))}
            <div className="smalldescription">
              <LikeButton />
              <h5>Description</h5>
              <p className="Cast Names">{projectData.projectTexts.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {isClient && (
        <div className="gallery">
          {projectData.galleryImages.map((image, index) => (
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
      )}
    </>
  );
};

export default SingleCard;