'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import { useDarkMode } from '../../contexts/DarkModeContext';
import NavLinks from '../NavLinks/NavLinks';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import gsap from "gsap";
import Logo from '../Logo/Logo'; 
import AudioIndicator from '../AudioIndicator/AudioIndicator';
import { debounce } from '../../lib/utils';
import { ANIMATION_DURATIONS } from '../../lib/constants';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  // Zustand für Sticky-Navigation und Scroll-Position
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Zustand für Audio-Indikator (Play/Pause)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll(); // Ermittelt die aktuelle Scroll-Position

  const transparencyThreshold = 10; // Schwellenwert für Transparenz beim Scrollen
  
  // Scroll-Logik, um Navbar bei Scroll zu animieren
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (currentScrollY <= transparencyThreshold) {
        gsap.to(navContainerRef.current, {
          y: 0,
          opacity: 1,
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)", 
          duration: ANIMATION_DURATIONS.NORMAL / 1000,
          ease: "power3.inOut",
        });
      } else {
        if (currentScrollY > lastScrollY) {
          gsap.to(navContainerRef.current, {
            y: -80,
            opacity: 0,
            backdropFilter: "blur(0px)",
            backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)",
            duration: ANIMATION_DURATIONS.NORMAL / 1000, 
            ease: "power2.out",
          });
        } else {
          gsap.to(navContainerRef.current, {
            y: 0,
            opacity: 1,
            backdropFilter: "blur(10px)",
            backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)",
            duration: ANIMATION_DURATIONS.NORMAL / 1000,
            ease: "power2.inOut",
          });
        }
      }
  
      setLastScrollY(currentScrollY);
    }, 16); // 60fps optimiert
  
    handleScroll();

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentScrollY, isDarkMode, lastScrollY]);
  
  // Funktion zum Umschalten des Audio-Indikators (Play/Pause)
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prevState) => !prevState);
  };

  return (
    <header
      ref={navContainerRef}
      className={`navbar 
        ${isSticky ? 'sticky' : ''} 
        ${isSticky && isDarkMode ? 'dark-mode' : ''} 
        ${isSticky && !isDarkMode ? 'light-mode' : ''}
      `}
    >
      <div className="navbar-container">

        <Logo isDarkMode={isDarkMode} />
        <NavLinks isDarkMode={isDarkMode} />
        <HamburgerMenu />
        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <AudioIndicator isAudioPlaying={isAudioPlaying} toggleAudioIndicator={toggleAudioIndicator} />


      </div>
    </header>
  );
};

export default Navbar;
