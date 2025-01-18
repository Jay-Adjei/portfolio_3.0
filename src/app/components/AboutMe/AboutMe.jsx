import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMe-container">
        <h2 className="aboutMe-heading">Über mich</h2>
        <p className="aboutMe-text">
          Hallo, ich bin [Dein Name], ein leidenschaftlicher Entwickler mit
          Fokus auf Frontend-Technologien. Ich liebe es, kreative Lösungen zu
          entwickeln und dabei moderne Webtechnologien zu nutzen. In meiner
          Freizeit experimentiere ich mit neuen Tools und arbeite an
          Open-Source-Projekten.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
