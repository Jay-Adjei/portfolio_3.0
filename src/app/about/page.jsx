import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import styles from './About.css'; // Optional für allgemeine Stile

export const metadata = {
  title: 'About | Japhet Adofo-Adjei',
  description: 'Learn more about Japhet Adofo-Adjei, a passionate Software Developer.',
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
    <section className="aboutcssPage" aria-label="About Japhet Adofo-Adjei">
      <AboutMe />
      <Skills />
    </section>
  );
}
