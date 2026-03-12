// src/Pages/Home/Home.jsx
'use client';
import React, { useEffect, useState } from 'react';
import PortfolioCarousel from './components/PortfolioCarousel/PortfolioCarousel';
import Skills from './components/Skills/Skills';
import CallToAction from './components/CallToAction/CallToAction';
import AboutMe from './components/AboutMe/AboutMe';
import Features from './components/Features/Features';
import CompanyCarousel from './components/CompanyCarousel/CompanyCarousel.jsx';
import TextCarousel from './components/TextCarousel/TextCarousel';
import './styles/home-page.css'; // nur für home
import FeaturesInteractive from './components/FeatureInteractive/FeaturesInteractive';
import PreLoader from './components/Preloader/Preloder';
import ToolsPage from './tools/page';

const Home = () => {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasSeen =
      typeof window !== 'undefined' &&
      sessionStorage.getItem('homePreloaderSeen');
    if (!hasSeen) {
      document.body.classList.remove('app-loaded');
      document.body.classList.add('preloading');
      setShowPreloader(true);
    } else {
      document.body.classList.remove('preloading');
      document.body.classList.add('app-loaded');
    }
  }, []);

  const handlePreloaderFinish = () => {
    try {
      sessionStorage.setItem('homePreloaderSeen', '1');
    } catch (e) {
      // Ignore sessionStorage errors (e.g., in private browsing mode)
    }
    document.body.classList.add('app-loaded');
    document.body.classList.remove('preloading');
    setShowPreloader(false);
  };

  // Always render main content so hero is in DOM (enables LCP); preloader overlays on top when shown
  return (
    <div className="page home-page">
      {showPreloader && <PreLoader onFinish={handlePreloaderFinish} />}
      <>
        <PortfolioCarousel />
        <ToolsPage />
        <Features />
        <FeaturesInteractive />
        <CallToAction />
      </>
    </div>
  );
};

export default Home;
