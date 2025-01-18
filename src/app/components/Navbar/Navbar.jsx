'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  
import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import NavLinks from '../NavLinks/NavLinks'; 
import styles from './Navbar.css';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [clientRendered, setClientRendered] = useState(false);

  const router = useRouter();  

  useEffect(() => {
    setClientRendered(true);  // Setze den Zustand, wenn der Client gerendert ist
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 35) {
      setIsSticky(true);
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    } else {
      setIsSticky(false);
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const logo = isDarkMode ? '/assets/img/logo/logo_white.png' : '/assets/img/logo/logo_black.png';

  if (!clientRendered) {
    return null;  // Verhindere das Rendern, bis der Client vollständig geladen ist
  }

  return (
    <header
      className={`navbar 
                  ${isSticky ? 'sticky' : ''} 
                  ${isSticky && isDarkMode ? 'dark-mode' : ''} 
                  ${isSticky && !isDarkMode ? 'light-mode' : ''} 
                  ${hasScrolled ? '' : 'no-transition'}
                  `}
    >
      <div className="navbar-container">
        <div className="logo">
          <Link href="/" passHref>
            <img
              src={logo}
              alt={isDarkMode ? 'Dark Mode Logo' : 'Light Mode Logo'}
            />
          </Link>
        </div>

        {/* Übergebe den Dark Mode Zustand an NavLinks */}
        <NavLinks isDarkMode={isDarkMode} />

        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
    </header>
  );
};

export default Navbar;
