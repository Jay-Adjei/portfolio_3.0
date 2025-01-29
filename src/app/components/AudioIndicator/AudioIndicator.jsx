// AudioIndicator.js
import React, { useRef, useState, useEffect } from 'react';
import style from './AudioIndicator.css'

const AudioIndicator = ({ isAudioPlaying, toggleAudioIndicator }) => {
  const audioElementRef = useRef(null);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div className="sound-wrapper">
      <button onClick={toggleAudioIndicator} className="sound-btn">
        <audio
          ref={audioElementRef}
          className="hidden"
          src="/assets/audio/mhinpang_sound.mp3"
          loop
        />
        <div className={`sound-wave ${isAudioPlaying ? 'active' : ''}`}>
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={`bar ${isIndicatorActive ? 'active' : ''}`}
              style={{
                animationDelay: `${bar * 0.1}s`,
                animationDuration: `${(bar + 1) * 150}ms`,
              }}
            />
          ))}
        </div>
      </button>
    </div>
  );
};

export default AudioIndicator;
