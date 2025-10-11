'use client';

import { useState, useEffect } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import Navbar from '../Navbar/Navbar';
import Mouse from '../Mouse/Mouse';
import PreLoader from '../Preloader/Preloder';

export default function ClientLayout({ children, enablePreloader = false }) {
  const { isDarkMode, toggleDarkMode, isInitialized } = useDarkMode();
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  // Handle Preloader logic
  useEffect(() => {
    if (enablePreloader) {
      // Fallback: if the Preloader component doesn't call onLoaded, ensure app shows after timeout
      const t = setTimeout(() => setIsAppLoaded(true), 10000);
      return () => clearTimeout(t);
    }
    setIsAppLoaded(true); // Directly set app as loaded if no preloader
  }, [enablePreloader]);

  // Toggle a body class so global elements (like the footer) can be hidden until the app is ready
  useEffect(() => {
    if (isAppLoaded) {
      document.body.classList.add('app-loaded');
    } else {
      document.body.classList.remove('app-loaded');
    }
  }, [isAppLoaded]);

  // Don't render until dark mode is initialized to prevent hydration mismatch
  if (!isInitialized) {
    return null;
  }

  return (
    <>
  {/* Show preloader if enabled and app is not loaded */}
  {enablePreloader && !isAppLoaded && (
    <PreLoader onFinish={() => setIsAppLoaded(true)} />
  )}
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Mouse />
      <main>{children}</main>
    </>
  );
}
