'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  ArrowRight,
  Github,
  Mail,
} from 'lucide-react';
import './PortfolioCarousel.css';
import WaterTraceBackground from './WaterTraceBackground';

const PortfolioCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoplayTimer = useRef(null);
  const progressTimer = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // konstante für maus tracking
  const handleCTAMouseMove = e => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    // Berechne absolute Position der Maus relativ zum Button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Setze die Glanz-Position direkt auf die Mausposition
    button.style.setProperty('--mouse-x', `${x}px`);
    button.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCTAMouseEnter = e => {
    const button = e.currentTarget;
    // Initialisiere Position beim ersten Hover
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty('--mouse-x', `${x}px`);
    button.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCTAMouseLeave = e => {
    const button = e.currentTarget;
    // Verstecke den Glanz außerhalb des Buttons
    button.style.setProperty('--mouse-x', '-100px');
    button.style.setProperty('--mouse-y', '-100px');
  };

  // Professional Portfolio Slides (memoized for stable references)
  

  const AUTOPLAY_INTERVAL = 6000;
  const PROGRESS_INTERVAL = 50;

  // Auto-play functionality
  

  

  return (
    <>
      <section className="landing-carousel">
        {/* Custom water-like violet background with mouse tracing */}
        <WaterTraceBackground />
        {/* Background Elements */}
        <div className="landing-carousel__bg-orb landing-carousel__bg-orb--1"></div>
        <div className="landing-carousel__bg-orb landing-carousel__bg-orb--2"></div>

        {/* Main Carousel Container */}
        <div
          className="landing-carousel__container"
        >
          {/* Slides */}
          <div className="landing-carousel__slides">
              <div
                className={`landing-carousel__slide `}
              >
                

                {/* Content */}
                <div className="landing-carousel__content">
                  <div className="landing-carousel__text">
                    <p className="landing-carousel__subtitle">
                      Hi
                    </p>
                    <h1 className="landing-carousel__title">This is I</h1>
                    <p className="landing-carousel__description">
                      Something
                    </p>

                   
                  </div>
                </div>
              </div>
          </div>

         
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div
            className="scroll-arrow"
            onClick={() =>
              document
                .getElementById('ScrollToFeatures')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <ArrowRight className="scroll-arrow-icon" size={24} />
          </div>
          <span className="scroll-text">Scrollen für mehr</span>
        </div>
      </section>
    </>
  );
};

export default PortfolioCarousel;
