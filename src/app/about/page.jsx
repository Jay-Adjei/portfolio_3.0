import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import styles from './About.css'; // Optional für allgemeine Stile

export default function About() {
  return (
    <section className="aboutcssPage" aria-label="About Japhet Adofo-Adjei">
      <AboutMe />
      <Skills />
    </section>
  );
}
