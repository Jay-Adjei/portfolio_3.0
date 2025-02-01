'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import HolographicCard from '../../components/HolographicCard/HolographicCard';
import HeroImage from '../../components/HeroImage/HeroImage';
import LikeButton from "../../components/LikeButton/LikeButton";
import './portfolioposts.css';

const SingleCard = () => {
  const params = useParams();
  const slug = params.slug;
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Thumbs: {
        type: "modern",
      },
      Toolbar: {
        display: {
          middle: ["zoomIn", "zoomOut", "toggle1:1"],
          right: ["slideshow", "thumbs", "close"],
        },
      },
      Carousel: {
        Navigation: true,
      },
    });

    return () => Fancybox.destroy();
  }, [projectData]);

  useEffect(() => {
    if (slug) {
      const fetchProjectData = async () => {
        try {
          const response = await fetch('/data/portfoliopost.json');
          const data = await response.json();
          const project = data.find(p => p.slug === slug);
          setProjectData(project);
        } catch (error) {
          console.error('Error loading project data:', error);
        }
      };
      fetchProjectData();
    }
  }, [slug]);

  if (!projectData) return <div>Loading...</div>;

  return (
    <>


        {/* Unveränderter Header-Bereich */}
        <div className="section_project_header"
        style={{ backgroundImage: `url(${projectData.backgroundImage})` }}>
          <div className="project-hero_container">
            <div className="portfolio-meta">
              <h4 className="portfolio-above-title">{projectData.abovetitle}</h4>
              <h1 className="portfolio-title">{projectData.title}</h1>
              <p className="portfolio-excerpt">{projectData.projectTexts.heroParagraph}</p>

              
              {/* Buttons */}
              <div className="like-view-wrapper">
                <button className="btn-like">Like 12</button>
                <button className="btn-view">View 34</button>
              </div>
              
            </div>
          </div>
        </div>


      

      {/* Projekt-Details Abschnitt */}
      <section className="portfolio-section">
        <div className="portfolio-content-block">
          <h2 className="portfolio-subheading">Projektinhalte</h2>
          <div className="portfolio-grid">
            <div className="portfolio-info-card">
              <h5 className="portfolio-info-label">Thema</h5>
              <p className="portfolio-info-text">{projectData.projectDetails.theme}</p>
            </div>
            <div className="portfolio-info-card">
              <h5 className="portfolio-info-label">Inspiration</h5>
              <p className="portfolio-info-text">{projectData.projectDetails.inspiration}</p>
            </div>
            <div className="portfolio-info-card">
              <h5 className="portfolio-info-label">Tags</h5>
              <p className="portfolio-info-text">{projectData.projectDetails.tags}</p>
            </div>
            <div className="portfolio-info-card">
              <h5 className="portfolio-info-label">Datum</h5>
              <p className="portfolio-info-text">{projectData.projectDetails.date}</p>
            </div>
          </div>
        </div>
      </section>



      {/* Lernprozess Abschnitt */}
      <section className="portfolio-section">
        <div className="portfolio-content-block">
          <div className="portfolio-learning-grid">
            <div className="portfolio-learning-card">
              <h5 className="portfolio-learning-label">Frameworks & Bibliotheken</h5>
              <p className="portfolio-learning-text">{projectData.projectDetails.techStack}</p>
            </div>
            <div className="portfolio-learning-card">
              <h5 className="portfolio-learning-label">Herausforderungen</h5>
              <p className="portfolio-learning-text">{projectData.projectDetails.challenges}</p>
            </div>
            <div className="portfolio-learning-card">
              <h5 className="portfolio-learning-label">Erfahrungen & Learnings</h5>
              <p className="portfolio-learning-text">{projectData.projectDetails.solutions}</p>
            </div>
          </div>
        </div>
      </section>

            {/* Beschreibungsabschnitt */}
            <section className="portfolio-section">
        <div className="portfolio-content-block">
          <h2 className="portfolio-subheading">Beschreibung</h2>
          <div className="portfolio-description">
            <p className="portfolio-fulltext">{projectData.projectTexts.description}</p>
          </div>
        </div>
      </section>


      {/* Live-Demo Abschnitt */}
      <section className="portfolio-section">
          <div className="portfolio-content-block">
            <h2 className="portfolio-subheading">Live-Demo</h2>
            <div className="portfolio-cta-wrapper">
              <button
                className="portfolio-cta-button"
                onClick={() => window.open(projectData.projectDetails.liveDemoLink, "_blank")}
              >
                Live-Demo ansehen
              </button>
              <button
                className="portfolio-cta-button"
                onClick={() => window.open(projectData.projectDetails.codeRepositoryLink, "_blank")}
              >
                Zum GitHub-Repository
              </button>
            </div>
          </div>
        </section>



      {/* Tech-Stack Abschnitt */}
      <section className="portfolio-section-button">
        <div className="portfolio-content-block">
          <div className="portfolio-tech-wrapper">
            <div className="portfolio-tech-card">
              <h5 className="portfolio-tech-label">Gallery</h5>
              <p className="portfolio-tech-list">You might like these too</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie (unveränderter Container) */}
      <div className="gallery">
        {projectData.galleryImages.map((image, index) => (
          <a
            key={index}
            data-fancybox="gallery"
            href={`/assets/img/PortfolioPost/${image}`}
            data-caption={`Image ${index + 1}`}
            className="portfolio-media-thumbnail"
          >
            <img
              src={`/assets/img/PortfolioPost/${image}`}
              alt={`Projektvorschau ${index + 1}`}
              loading="lazy"
              className="portfolio-media-image"
            />
          </a>
        ))}
      </div>

      
    </>
  );
};

export default SingleCard;
