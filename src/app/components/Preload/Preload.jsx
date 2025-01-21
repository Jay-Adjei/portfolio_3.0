'use client';

import { useState, useEffect } from 'react';
import './preload.css'; // Import the custom styles for the spinner

const Preload = ({ enablePreloader = false, onLoaded }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (enablePreloader) {
      const preloadLinks = ['/home', '/portfolio', '/about', '/testing', '/portfolio/project'];

      // Manually trigger fetch for these links to force them to load in the background
      preloadLinks.forEach((link) => {
        window.fetch(link) // Manually fetch the page in the background
          .then((res) => {
            console.log(`Fetched: ${link}`, res);
          })
          .catch((err) => {
            console.error(`Error fetching: ${link}`, err);
          });
      });

      // Simulate a loading time or preloading logic
      const timeout = setTimeout(() => {
        setIsLoaded(true);
        if (typeof onLoaded === 'function') {
          onLoaded(); // Notify parent when loading is complete
        }
      }, 5000); // Adjust the timeout as needed

      // Cleanup timeout when the component unmounts
      return () => clearTimeout(timeout);
    } else {
      setIsLoaded(true); // Set as loaded directly if no preloader
    }
  }, [enablePreloader, onLoaded]);

  // Render the spinner if the app is not loaded yet
  if (!isLoaded) {
    return (
      <div className="loading-animation">
        <div className="spinner"></div> {/* Use custom spinner from CSS */}
      </div>
    );
  }

  return null; // Return null when loading is finished
};

export default Preload;
