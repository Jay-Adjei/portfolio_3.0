'use client';
import { useState, useEffect } from 'react';
import './Preload.css';

const Preload = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 300);
      }
      setProgress(Math.min(current, 100));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsVisible(false);
    setTimeout(() => onLoaded?.(), 800);
  };

  if (!isVisible) return null;

  return (
    <div className={`preloader ${!isVisible ? 'loaded' : ''}`}>
      <div className="kanji-overlay">
        <div className="kanji">暴</div>
        <div className="kanji">走</div>
        <div className="kanji">族</div>
      </div>

      <div className="loader-core">
        <div className="glow-effect" />
        
        <div className="quantum-ring">
          <div className="kanji-rotator">電</div>
          <div className="kanji-rotator">光</div>
          <div className="kanji-rotator">火</div>
        </div>

        <div className="quantum-ring" style={{ animationDelay: '-4s' }}>
          <div className="kanji-rotator">疾</div>
          <div className="kanji-rotator">風</div>
          <div className="kanji-rotator">迅</div>
        </div>

        <div className="progress-hud">
          <div className="progress-percent">
            {Math.round(progress)}%
          </div>
          
          <div className="gif-container">
            <img
              src="/assets/img/preload/gifpreload2.gif"
              className="hologram-gif"
              alt="loading"
            />
          </div>
          
          <button
            className={`enter-portal ${isLoaded ? 'visible' : ''}`}
            onClick={handleEnter}
            disabled={!isLoaded}
          >
            <span className="japanese-text">起動</span>
            <span className="english-text">Enter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preload;