import React from "react";
import HeroImage from "../components/HeroImage/HeroImage";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import styles from "./testing.css"; // Optional für allgemeine Stile

export default function testing() {
  return (
    <div>
      <HeroImage
        imageSrc="/assets/img/LandingBG/OniGirl6.jpg"
        altText="Oni Girl Background"
      />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
}
