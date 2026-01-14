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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Only show preloader on first visit to the home page per session
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
      setReady(true);
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
    setReady(true);
  };

  return (
    <div className="page home-page">
      {showPreloader && <PreLoader onFinish={handlePreloaderFinish} />}
      {(ready || !showPreloader) && (
        <>
          <PortfolioCarousel />
          <ToolsPage />
          <Features />
          {/* <CompanyCarousel /> */}
          <FeaturesInteractive />
          <CallToAction />
        </>
      )}
    </div>
  );
};

export default Home;
