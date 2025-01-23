// src/Pages/Home/Home.jsx
import React from 'react';
import Carousel from './components/Carousel/Carousel';  // Correct relative import
import Skills from "./components/Skills/Skills";
import CallToAction from './components/CallToAction/CallToAction';
import AboutMe from "./components/AboutMe/AboutMe";
import Features from './components/Features/Features';
// import CustomModel from "./components/CustomModel/CustomModel";
import './styles/home-page.css';

const Home = () => {
  return (
    <div className="page home-page">

      <AboutMe />
      <Carousel />
      <Features />
      <Skills />
      <CallToAction />
    </div>
  );
};

export default Home;
