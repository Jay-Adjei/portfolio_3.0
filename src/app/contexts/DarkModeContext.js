'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      const darkMode = savedMode ? savedMode === 'true' : true; // Default to true (dark mode)
      setIsDarkMode(darkMode);
      setIsInitialized(true);

      // Keep both classes in sync: custom CSS uses "dark-mode", Tailwind uses "dark"
      if (darkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newState = !prev;

      // Store the updated dark mode value in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', newState.toString());

        // Keep both classes in sync: custom CSS uses "dark-mode", Tailwind uses "dark"
        if (newState) {
          document.documentElement.classList.add('dark-mode');
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark-mode');
          document.documentElement.classList.remove('dark');
        }
      }
      return newState;
    });
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
    isInitialized,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
