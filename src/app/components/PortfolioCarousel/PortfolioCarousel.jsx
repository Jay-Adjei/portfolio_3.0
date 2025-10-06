'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import './PortfolioCarousel.css';
import WaterTraceBackground from './WaterTraceBackground';

const PortfolioCarousel = () => {
  return (
    <>
      <section className="landing-carousel">
        {/* Custom water-like violet background with mouse tracing */}
        <WaterTraceBackground />
        {/* Background Elements */}
        <div className="landing-carousel__bg-orb landing-carousel__bg-orb--1"></div>
        <div className="landing-carousel__bg-orb landing-carousel__bg-orb--2"></div>

        {/* Main Carousel Container */}
        <div className="landing-carousel__container">
          {/* Slides */}
          <div className="landing-carousel__slides">
            <div
              className={`landing-carousel__slide landing-carousel__slide--active`}
            >
              {/* Content */}
              <div className="landing-carousel__content">
                <div className="landing-carousel__text">
                  <p className="landing-carousel__subtitle">
                    Frontend • Backend • Web • Mobile
                  </p>
                  <h1 className="landing-carousel__title">
                    I build fast, polished web experiences
                  </h1>
                  <p className="landing-carousel__description">
                    I design and ship interfaces with Next.js, React, and React
                    Native. Clean, accessible, and focused on real results.
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
          <span className="scroll-text">Click to scroll</span>
        </div>
      </section>
    </>
  );
};

export default PortfolioCarousel;
