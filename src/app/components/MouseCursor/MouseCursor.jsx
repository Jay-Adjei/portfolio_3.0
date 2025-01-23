// src/app/components/MouseCursor/MouseCursor.jsx

'use client';  // Direktive, um diese Datei nur auf der Client-Seite auszuführen

import React, { useEffect, useState } from "react";
import './MouseCursor.css'; // Make sure to rename the CSS file if it exists

const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    let animationFrameId;

    // Update MouseCursor und Follower Position
    const updateCursorPosition = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) / 9,
        y: prev.y + (mousePosition.y - prev.y) / 9,
      }));

      // Request next animation frame
      animationFrameId = requestAnimationFrame(updateCursorPosition);
    };

    // Mausbewegungs-Event-Listener
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", () => setIsMouseDown(true));
    window.addEventListener("mouseup", () => setIsMouseDown(false));

    // Starte die MouseCursor-Bewegung
    animationFrameId = requestAnimationFrame(updateCursorPosition);

    // Aufräumen beim Verlassen des Effekts
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mousePosition]);

  return (
    <>
      <div
        className={`mouse-cursor ${isMouseDown ? "active" : ""}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
      <div
        className={`mouse-cursor-follower ${isMouseDown ? "active" : ""}`}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
        }}
      ></div>
    </>
  );
};

export default MouseCursor;
