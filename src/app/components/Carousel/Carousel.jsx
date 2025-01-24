"use client"; // Dieser Hinweis markiert die Datei als Client-Komponente.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './carousel.css';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Track the active slide
  const autoplayTimer = useRef(null); // Ref to store autoplay timer
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endX, setEndX] = useState(null);
  const [endY, setEndY] = useState(null);

  const slides = [
    { 
      id: 1, 
      img: '/assets/img/LandingBG/OniBoy4.jpg', 
      subtitle: 'Designed to redefine the boundaries of modern creativity', 
      description: 'This project showcases a unique approach to pushing creative boundaries with innovative ideas and execution.' 
    },
    { 
      id: 2, 
      img: '/assets/img/LandingBG/OniGirl10.jpg', 
      subtitle: 'A blend of aesthetics and functionality executed with precision', 
      description: 'Combining beautiful design with seamless functionality, this project emphasizes precision and detail.' 
    },
    { 
      id: 3, 
      img: '/assets/img/LandingBG/OniBoy2_copy.jpg', 
      subtitle: 'Where technology meets creativity, turning visions into reality', 
      description: 'Bridging the gap between technology and artistry, this project transforms concepts into tangible results.' 
    },
    { 
      id: 4, 
      img: '/assets/img/LandingBG/OniGirl13.jpg', 
      subtitle: 'User-focused, innovative, and crafted with attention to detail', 
      description: 'Centered around user needs, this project integrates innovation and meticulous craftsmanship.' 
    },
    { 
      id: 5, 
      img: '/assets/img/LandingBG/OniBoy4.jpg', 
      subtitle: 'A project that seamlessly merges design and technology', 
      description: 'Highlighting the harmony between cutting-edge design and technological sophistication, this project stands out.' 
    },
  ];
  

  const autoplayInterval = 5000; // Interval in milliseconds

  // Start autoplay using setInterval
  const startAutoplay = () => {
    autoplayTimer.current = setInterval(() => {
      setActiveSlide(prev => (prev === slides.length ? 1 : prev + 1));
    }, autoplayInterval);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayTimer.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay(); // Cleanup interval on unmount
  }, []);

  const handleSwipeStart = (e) => {
    if (e.type === 'touchstart') {
      setStartX(e.touches[0].pageX);
      setStartY(e.touches[0].pageY);
    } else {
      setStartX(e.pageX);
      setStartY(e.pageY);
    }
    stopAutoplay(); // Stop autoplay while swiping
  };

  const handleSwipeEnd = (e) => {
    if (e.type === 'touchend') {
      setEndX(e.changedTouches[0].pageX);
      setEndY(e.changedTouches[0].pageY);
    } else {
      setEndX(e.pageX);
      setEndY(e.pageY);
    }

    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) {
        // Swipe right
        setActiveSlide((prev) => (prev === 1 ? slides.length : prev - 1));
      } else if (diffX < -50) {
        // Swipe left
        setActiveSlide((prev) => (prev === slides.length ? 1 : prev + 1));
      }
    }

    startAutoplay(); // Restart autoplay after swipe
  };

  return (
    <div
      className="carousel-wrapper"
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
      onMouseDown={handleSwipeStart}
      onMouseUp={handleSwipeEnd}
    >
      <div className="slide-wrapper">
        {/* Render only the active slide */}
        {slides.map((slide) => (
          <div key={slide.id} className={`slide ${activeSlide === slide.id ? 'active' : ''}`} data-slide={slide.id}>
            <div className="slide-content">
              <img
                className="slide-video"
                src={slide.img}
                alt={`Slide ${slide.id}`}
                loading="lazy" // Lazy loading for images
              />
              <div className="text-overlay">
                <div className="text-content-slider">
                  <h1 className="title-slider">Portfolio</h1>
                  <p className="subtitle-slider">{slide.subtitle}</p>
                  <p className="description-slider">{slide.description}</p>
                </div>
                <p className="background-text-slider">Welcome</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="navigation">
        {slides.map((slide) => (
          <a
            key={slide.id}
            href="#"
            className={`nav-dot ${activeSlide === slide.id ? 'active loading' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveSlide(slide.id); // Change slide when dot is clicked
              stopAutoplay(); // Stop autoplay on manual navigation
              startAutoplay(); // Restart autoplay after manual navigation
            }}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
