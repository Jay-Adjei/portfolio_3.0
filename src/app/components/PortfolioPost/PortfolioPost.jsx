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
      <div className="slider_single-project_header"
      style={{ backgroundImage: `url(${projectData.backgroundImage})` }}>
        <div className="project-hero_container">
          <div className="portfolio-meta">
            <h4 className="portfolio-above-title">{projectData.abovetitle}</h4>
            <h1 className="portfolio-title">{projectData.title}</h1>
            <p className="portfolio-excerpt">{projectData.projectTexts.heroParagraph}</p>

                          
            {/* Like / View Buttons */}
            <div className="counters-wrapper">


            <div className="counter-item view-counter">
                <span className="counter-label">Views</span>
                <button className="btn-view">
                  <div className="counter-info-row">
                    <svg
                      className="icon-view"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="translate(0,512) scale(0.1,-0.1)" stroke="none">
                        <path d="M2375 3994 c-602 -63 -1116 -314 -1570 -769 -217 -217 -360 -407
                          -397 -528 -26 -89 -22 -222 11 -309 59 -153 364 -501 621 -707 360 -290 746
                          -463 1195 -537 154 -26 496 -26 650 0 450 74 826 243 1195 536 255 203 573
                          569 626 722 28 80 26 253 -5 330 -61 155 -371 509 -621 708 -360 287 -738 459
                          -1165 531 -116 20 -440 33 -540 23z m495 -339 c569 -95 1065 -412 1463 -934
                          l72 -94 0 -67 0 -67 -72 -94 c-397 -521 -891 -836 -1468 -936 -140 -24 -471
                          -24 -610 0 -579 101 -1069 413 -1468 936 l-72 94 0 67 0 67 72 94 c405 531
                          938 865 1498 938 44 6 94 13 110 15 64 9 385 -4 475 -19z"/>
                        <path d="M2395 3346 c-315 -62 -541 -285 -606 -600 -73 -352 68 -707 346 -875
                          290 -175 734 -137 973 84 394 365 310 1065 -158 1314 -100 53 -220 82 -360 87
                          -81 2 -150 -1 -195 -10z m271 -317 c178 -32 315 -167 359 -350 52 -224 -50
                          -459 -241 -550 -132 -63 -316 -63 -448 0 -191 91 -293 326 -241 550 61 257
                          294 401 571 350z"/>
                      </g>
                    </svg>
                    <span className="counter-text">34</span>
                  </div>
                </button>
              </div>


              <div className="counter-item like-counter">
                <span className="counter-label">Likes</span>
                <button className="btn-like">
                  <div className="counter-info-row">
                    <svg
                      className="icon-like"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="translate(0,512) scale(0.1,-0.1)" stroke="none">
                        <path d="M1220 4763 c-459 -70 -834 -351 -1053 -788 -61 -123 -103 -244 -134
                          -394 -23 -109 -26 -150 -27 -311 0 -156 3 -202 22 -290 65 -300 214 -605 445
                          -913 231 -307 611 -686 1002 -998 280 -224 696 -516 936 -658 137 -81 160 -82
                          285 -8 551 328 1231 868 1622 1287 453 486 692 894 779 1329 27 132 24 402 -5
                          549 -93 465 -368 851 -751 1050 -120 63 -180 86 -306 118 -136 35 -375 44
                          -515 20 -161 -28 -357 -103 -484 -184 -156 -100 -323 -261 -418 -403 -29 -43
                          -55 -79 -58 -79 -3 0 -30 37 -60 83 -72 108 -260 296 -370 369 -165 109 -342
                          181 -526 213 -79 14 -316 19 -384 8z"/>
                      </g>
                    </svg>
                    <span className="counter-text">12</span>
                  </div>
                </button>
              </div>


            
            </div>



            
          </div>
        </div>
      </div>


<div className='patternpost'>


      {/* Informationen / Steckbrief über das Projekt */}
      <div className="project-info-container">
        <ul className="project-info-list">
          <li className="project-info-item">
            <span className="project-info-label">Theme</span>
            <div className="project-info-row">
              <img src="/assets/img/aboutme/code.svg" alt="Icon" className="project-info-icon" />
              <span className="project-info-text">{projectData.projectDetails.theme}</span>
            </div>
          </li>

          <li className="project-info-item">
            <span className="project-info-label">Inspiration</span>
            <div className="project-info-row">
              <img src="/assets/img/aboutme/code.svg" alt="Icon" className="project-info-icon" />
              <span className="project-info-text">{projectData.projectDetails.inspiration}</span>
            </div>
          </li>

          <li className="project-info-item">
            <span className="project-info-label">Tags</span>
            <div className="project-info-row">
              <img src="/assets/img/aboutme/code.svg" alt="Icon" className="project-info-icon" />
              <span className="project-info-text">{projectData.projectDetails.tags}</span>
            </div>
          </li>

          <li className="project-info-item">
            <span className="project-info-label">Date</span>
            <div className="project-info-row">
              <img src="/assets/img/aboutme/code.svg" alt="Icon" className="project-info-icon" />
              <span className="project-info-text">{projectData.projectDetails.date}</span>
            </div>
          </li>

          <li className="project-info-item">
            <span className="project-info-label">Future Feature</span>
            <div className="project-info-row">
              <img src="/assets/img/aboutme/code.svg" alt="Icon" className="project-info-icon" />
              <span className="project-info-text">
                Coding successful things :D Maybe coming in the future, I hope.
              </span>
            </div>
          </li>
        </ul>
      </div>


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
          <h2 className="portfolio-subheading">About The Project</h2>
          <div className="portfolio-description">
            <p className="portfolio-fulltext">{projectData.projectTexts.description}</p>
          </div>
        </div>
      </section>


      {/* Live Demo / GitHub Buttons */}
      <div className="ive-demo-content">

        <div className="ive-demo-item live-demo-counter">
          <span className="ive-demo-label">Live Demo</span>
          <button className="btn-live-demo">
            <div className="ive-demo-info-row">
              <svg
                className="icon-live-demo"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(0,512) scale(0.1,-0.1)" stroke="none">
                  <path d="M2375 3994 c-602 -63 -1116 -314 -1570 -769 -217 -217 -360 -407
                    -397 -528 -26 -89 -22 -222 11 -309 59 -153 364 -501 621 -707 360 -290 746
                    -463 1195 -537 154 -26 496 -26 650 0 450 74 826 243 1195 536 255 203 573
                    569 626 722 28 80 26 253 -5 330 -61 155 -371 509 -621 708 -360 287 -738 459
                    -1165 531 -116 20 -440 33 -540 23z m495 -339 c569 -95 1065 -412 1463 -934
                    l72 -94 0 -67 0 -67 -72 -94 c-397 -521 -891 -836 -1468 -936 -140 -24 -471
                    -24 -610 0 -579 101 -1069 413 -1468 936 l-72 94 0 67 0 67 72 94 c405 531
                    938 865 1498 938 44 6 94 13 110 15 64 9 385 -4 475 -19z"/>
                  <path d="M2395 3346 c-315 -62 -541 -285 -606 -600 -73 -352 68 -707 346 -875
                    290 -175 734 -137 973 84 394 365 310 1065 -158 1314 -100 53 -220 82 -360 87
                    -81 2 -150 -1 -195 -10z m271 -317 c178 -32 315 -167 359 -350 52 -224 -50
                    -459 -241 -550 -132 -63 -316 -63 -448 0 -191 91 -293 326 -241 550 61 257
                    294 401 571 350z"/>
                </g>
              </svg>
              <span className="ive-demo-text">34</span>
            </div>
          </button>
        </div>

        <div className="ive-demo-item github-repo-counter">
          <span className="ive-demo-label">GitHub Repo</span>
          <button className="btn-github-repo">
            <div className="ive-demo-info-row">
              <svg
                className="icon-github-repo"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(0,512) scale(0.1,-0.1)" stroke="none">
                  <path d="M1220 4763 c-459 -70 -834 -351 -1053 -788 -61 -123 -103 -244 -134
                    -394 -23 -109 -26 -150 -27 -311 0 -156 3 -202 22 -290 65 -300 214 -605 445
                    -913 231 -307 611 -686 1002 -998 280 -224 696 -516 936 -658 137 -81 160 -82
                    285 -8 551 328 1231 868 1622 1287 453 486 692 894 779 1329 27 132 24 402 -5
                    549 -93 465 -368 851 -751 1050 -120 63 -180 86 -306 118 -136 35 -375 44
                    -515 20 -161 -28 -357 -103 -484 -184 -156 -100 -323 -261 -418 -403 -29 -43
                    -55 -79 -58 -79 -3 0 -30 37 -60 83 -72 108 -260 296 -370 369 -165 109 -342
                    181 -526 213 -79 14 -316 19 -384 8z"/>
                </g>
              </svg>
              <span className="ive-demo-text">12</span>
            </div>
          </button>
        </div>

      </div>


      {/* Tech-Stack Abschnitt */}
      <section className="portfolio-gallery-section">
              <h5 className="portfolio-Gallery-title">Media</h5>
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
 </div>
      
    </>
  );
};

export default SingleCard;
