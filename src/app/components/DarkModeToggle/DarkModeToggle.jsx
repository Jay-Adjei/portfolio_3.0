import React, { useCallback } from 'react';
import styles from './DarkModeToggle.css';

const DarkModeToggle = ({ toggleDarkMode, isDarkMode }) => {
  // Memoized callback to avoid redefinition on each render
  const handleToggle = useCallback(() => {
    toggleDarkMode();
  }, [toggleDarkMode]);

  // Memoize the text of the button to avoid unnecessary re-renders
  const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode';

  return (
    <div className="darkmode-toggle">
      <button onClick={handleToggle}>
        {buttonText}
      </button>
    </div>
  );
};

// Exporte die Komponente direkt, ohne `memo`-HOC, falls Fehler auftreten
export default React.memo(DarkModeToggle);
