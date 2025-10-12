// src/Pages/Home/Home.jsx
import React from 'react';
import PortfolioCarousel from './components/PortfolioCarousel/PortfolioCarousel';
import Skills from './components/Skills/Skills';
import CallToAction from './components/CallToAction/CallToAction';
import AboutMe from './components/AboutMe/AboutMe';
import Features from './components/Features/Features';
import CompanyCarousel from './components/CompanyCarousel/CompanyCarousel.jsx';
import TextCarousel from './components/TextCarousel/TextCarousel';
// import CustomModel from "./components/CustomModel/CustomModel";
import './styles/home-page.css'; // nur für home
import FeaturesInteractive from './components/FeatureInteractive/FeaturesInteractive';
import TestimonialsGrid from './components/TestimonialsGrid/TestimonialsGrid';
import ToolsPage from './tools/page';

const Home = () => {
  return (
    <div className="page home-page">
      <PortfolioCarousel />
      <ToolsPage />
      <Features />
      {/* <CompanyCarousel /> */}
      <FeaturesInteractive />
      <TestimonialsGrid />
      <CallToAction />
    </div>
  );
};

export default Home;
