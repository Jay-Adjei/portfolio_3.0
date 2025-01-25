'use client';  // Add this line at the top of your component

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import './CallToAction.css';
import Button1 from '../../components/Buttons/Button1';

const CallToAction = () => {
  const ctaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.5 });

    const currentRef = ctaRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && ctaRef.current) {
      gsap.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }
  }, [isVisible]);

  return (
    <div 
      className="cta-container" 
      ref={ctaRef}
    >
      <div className="cta-bg-image" />
      <div className="cta-content">
        <img src="/assets/img/LandingBG/OniBoy1.jpg" className="cta-image" alt="Professional Opportunity" />
        <h2 className="cta-heading">
          <span className="cta-main-text">Why not Now?</span>
          <span className="cta-sub-text">Just Click on the Button to Contact me</span>
        </h2>
        <p className="cta-description">
          I&apos;m actively seeking new challenges in the field of Informatics. No matter the direction—whether it&apos;s development, support, or innovation—I’m ready to dive in. 
          If you like what I do, why wait? Let&apos;s connect, and I&apos;ll bring my skills to your team!
        </p>
        <Button1 href="mailto:Gylan.Salih@outlook.de">
          Contact Me
        </Button1>
      </div>
    </div>
  );
};

export default CallToAction;
