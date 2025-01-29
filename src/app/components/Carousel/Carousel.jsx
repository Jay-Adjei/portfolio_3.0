"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './carousel.css';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const autoplayTimer = useRef(null);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endX, setEndX] = useState(null);
  const [endY, setEndY] = useState(null);

  const slides = [
    { 
      id: 1, 
      type: 'video', // Type: Video
      src: '/assets/videos/Cloudy2.mp4', 
      title: 'Raijin&apos;s Fury',
      subtitle: 'Designed to redefine the boundaries of modern creativity', 
      description: 'Like Raijin&apos;s thunderous power, this project breaks boundaries with unmatched innovation. Harnessing creativity and technology, we craft bold, electrifying experiences that push the limits of design and functionality.' 
    },
    { 
      id: 2, 
      type: 'video', // Type: Video
      src: '/assets/videos/Kenshin.mp4', 
      title: 'Kitsune&apos;s Grace',
      subtitle: 'A blend of aesthetics and functionality executed with precision',
      description: 'Inspired by the elegance and adaptability of the Kitsune, this project balances aesthetic beauty and flawless functionality. Like the mythical fox, it adapts to every user&apos;s need with precision and grace.' 
    },
    { 
      id: 3, 
      type: 'video', // Type: Video
      src: '/assets/videos/Furrie.mp4',
      title: 'Shinto Spirit',
      subtitle: 'Where technology meets creativity, turning visions into reality',
      description: 'In this project, the spirit of Shinto guides our journey, blending technology with art to transform abstract ideas into reality. Every design detail is rooted in creativity and powered by technological innovation.' 
    },
    { 
      id: 4, 
      type: 'video', // Type: Video
      src: '/assets/videos/Gate.mp4',
      title: 'Kage&apos;s Craft',
      subtitle: 'User-focused, innovative, and crafted with attention to detail',
      description: 'With the stealth and craftsmanship of a shadow, this project is designed with user needs at its core. Every interaction, every detail, is meticulously crafted to offer an innovative and seamless experience.' 
    },
    { 
      id: 5, 
      type: 'video', // Type: Video
      src: '/assets/videos/Sakura.mp4',
      title: 'Raijin\'s Thunder',
      subtitle: 'A project that seamlessly merges design and technology',
      description: 'This project channels the energy of Raijin, combining raw creative power with advanced technology. It&apos;s where thunderous impact meets harmonious design, creating an experience that&apos;s as striking as it is functional.' 
    },
  ];
  
  const autoplayInterval = 7500;

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
    return () => stopAutoplay();
  }, []);

  const handleSwipeStart = (e) => {
    if (e.type === 'touchstart') {
      setStartX(e.touches[0].pageX);
      setStartY(e.touches[0].pageY);
    } else {
      setStartX(e.pageX);
      setStartY(e.pageY);
    }
    stopAutoplay();
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
        setActiveSlide((prev) => (prev === 1 ? slides.length : prev - 1));
      } else if (diffX < -50) {
        setActiveSlide((prev) => (prev === slides.length ? 1 : prev + 1));
      }
    }

    startAutoplay();
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
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className={`slide ${activeSlide === slide.id ? 'active' : ''}`}
            data-slide={slide.id}
          >
            <div className="slide-content">
              {slide.type === 'image' && (
                <img
                  className="slide-media"
                  src={slide.src}
                  alt={`Slide ${slide.id}`}
                  loading={activeSlide === slide.id ? 'eager' : 'lazy'}
                />
              )}
              {slide.type === 'video' && (
                <video
                  className="slide-media"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {slide.type === 'gif' && (
                <img
                  className="slide-media"
                  src={slide.src}
                  alt={`Slide ${slide.id}`}
                  loading={activeSlide === slide.id ? 'eager' : 'lazy'}
                />
              )}
              <div className="text-overlay">
                <div className="text-content-slider">
                  <p className="subtitle-slider">{slide.subtitle}</p>
                  <h1 className="title-slider">{slide.title}</h1>
                  <p className="description-slider">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation">
        {slides.map((slide) => (
          <a
            key={slide.id}
            href="#"
            className={`nav-dot ${activeSlide === slide.id ? 'active loading' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveSlide(slide.id);
              stopAutoplay();
              startAutoplay();
            }}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;