'use client';
import React, { useState, useEffect, useRef } from "react";
import './ProductNav.css';

// MenuItem Component
const MenuItem = ({ title, subtitle, index, setActiveIndex, activeIndex }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveIndex(index); // Set the active index when the item is visible
          }
        });
      },
      { threshold: 0.1 } // Adjust to trigger at 25% of the element visible
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, [index, setActiveIndex]);

  return (
    <div 
      className={`menu-item ${index === activeIndex ? 'active' : ''}`} 
      ref={menuRef}
    >
      <h2 className="menu-item__subtitle">{subtitle}</h2>
      <h1 className="menu-item__title">{title}</h1>
    </div>
  );
};

// Main ProductNav Component
const ProductNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { title: "1", subtitle: "Radiant" },
    { title: "2", subtitle: "Zigma" },
    { title: "3", subtitle: "Spectre" },
    { title: "4", subtitle: "Spectre" },
    { title: "5", subtitle: "Radiant" },
    { title: "6", subtitle: "Zigma" },
    { title: "7", subtitle: "Nexus" },
    { title: "8", subtitle: "Spectre" },
  ];

  return (
    <div className="product-nav">
      {/* Left Side with Menu Items */}
      <div className="left-side">
        {menuItems.map((item, index) => (
          <MenuItem 
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            index={index}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        ))}
      </div>

      {/* Right Side (empty for now) */}
      <div className="right-side">
        {/* This will be filled later */}
      </div>
    </div>
  );
};

export default ProductNav;
