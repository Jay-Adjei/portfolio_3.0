// src/Pages/Home/Home.jsx
import React from 'react';
import Carousel from './Components/Carousel/Carousel';  // Correct relative import
import Skills from "./components/Skills/Skills";
import CallToAction from './components/CallToAction/CallToAction';
import AboutMe from "./components/AboutMe/AboutMe";
import CustomModel from "./components/CustomModel/CustomModel";
import './styles/home-page.css';

const Home = () => {
  return (
    <div className="page home-page">


      <Carousel />
      <CustomModel />
      
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi! I&apos;m a passionate developer who loves building creative solutions. Explore my work and learn more about my skills and journey!</p>
      </header>

      <AboutMe />
      <Skills />
      <CallToAction />


    </div>
  );
};

export default Home;
