import React from "react";
import HeroImage from "../components/HeroImage/HeroImage";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import styles from "./About.css"; // Optional für allgemeine Stile

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <HeroImage
        imageSrc="/assets/img/LandingBG/OniGirl3.jpg"
        altText="Oni Girl Background"
      />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
}
