import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './LikeButton.css';

const HEART_PATH = "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z";

export default function LikeButton() {
  const [hasLiked, setHasLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);
  const [sessionId, setSessionId] = useState(null);

  // Session ID initialisieren
  useEffect(() => {
    const storedSessionId = localStorage.getItem('sessionId');
    if (!storedSessionId) {
      const newSessionId = uuidv4();
      localStorage.setItem('sessionId', newSessionId);
      setSessionId(newSessionId);
    } else {
      setSessionId(storedSessionId);
    }
  }, []);

  // Like-Status abrufen
  useEffect(() => {
    if (!sessionId) return;

    const fetchLikeStatus = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/likes?sessionId=${sessionId}`
        );
        const data = await response.json();
        
        setTotalLikes(data.totalLikes);
        setHasLiked(data.hasLiked);
      } catch (error) {
        console.error('Fehler:', error);
      }
    };

    fetchLikeStatus();
  }, [sessionId]);

  const handleLike = async () => {
    if (hasLiked) return;

    try {
      const response = await fetch('http://localhost:5000/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      });

      if (response.status === 409) {
        const data = await response.json();
        alert(data.error || 'Du hast bereits geliked!');
        setHasLiked(true);
        return;
      }

      if (!response.ok) throw new Error('Request failed');

      const data = await response.json();
      setTotalLikes(prev => prev + 1);
      setHasLiked(true);
    } catch (error) {
      console.error('Fehler:', error);
      alert('Like konnte nicht gespeichert werden');
    }
  };

  return (
    <div className={styles.likeButtonContainer}>
      <button
        className={styles.heartButton}
        onClick={handleLike}
        disabled={hasLiked}
        aria-label="Like Button"
      >
        <svg
          viewBox="0 0 20 20"
          className={styles.heartSvg}
          style={{ width: '24px', height: '24px' }}
        >
          <path
            d={HEART_PATH}
            fill={hasLiked ? "red" : "transparent"}
            stroke={hasLiked ? "red" : "black"}
            strokeWidth="1"
          />
        </svg>
      </button>

      <div className={styles.likeCounter}>
        <span>{totalLikes}</span>
      </div>
    </div>
  );
}