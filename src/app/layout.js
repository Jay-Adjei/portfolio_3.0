'use client'; // Füge diese Zeile hinzu, um die Komponente als Client-Komponente zu kennzeichnen.

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import Preload from './components/Preload/Preload';
import './styles/aboutme-page.css';
import './fonts/fonts.css';
import './styles/cardgrid.css';
import './styles/globals.css';
import './styles/viewsinglecard.css';

export default function Layout({ children, enablePreloader = false }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    // Lade den Dark Mode Zustand aus dem localStorage
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }

    // Simuliere den Ladeprozess, um den Preloader anzuzeigen
    if (!isAppLoaded) {
      setTimeout(() => setIsAppLoaded(true), 5000); // 5 Sekunden warten, um den Preloader anzuzeigen
    }
  }, [isAppLoaded]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newState = !prev;
      localStorage.setItem('darkMode', newState);
      return newState;
    });
  };

  return (
    <html lang="de">
      <body className={isDarkMode ? 'dark-mode' : ''}>
        {/* Zeige den Preloader, wenn die Seite noch nicht vollständig geladen ist */}
        {enablePreloader && !isAppLoaded && <Preload onLoaded={() => setIsAppLoaded(true)} />}

        {/* Cursor und Navbar immer anzeigen */}
        <Cursor />
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        {/* Der Rest des Seiteninhalts */}
        <main>{children}</main>

        {/* Footer wird immer angezeigt */}
        <Footer />
      </body>
    </html>
  );
}
