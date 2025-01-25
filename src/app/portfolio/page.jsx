'use client';
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Filter from "../components/Filter/Filter";
import HolographicCard from "../components/HolographicCard/HolographicCard";
import HeroImage from "../components/HeroImage/HeroImage";
import '../components/LazyLoadCard/LazyLoadCard.css';

const Portfolio = () => {
  const [category, setCategory] = useState("all");
  const [cardType, setCardType] = useState("normal");
  const [activeLayout, setActiveLayout] = useState(1);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4); // Number of cards visible initially
  const [isLoading, setIsLoading] = useState(false); // For managing the button loading state

  // Example card data
  const cardsData = [
    { imgSrc: "/assets/img/LandingBG/OniGirl4.jpg", link: "portfolio/project", category: "Coding", rarity: "ShineBlitz" },
    { imgSrc: "/assets/img/LandingBG/OniGirl8.jpg", link: "portfolio/project2", category: "Design", rarity: "ShineBlitz2" },
    { imgSrc: "/assets/img/LandingBG/OniBoy4.jpg", link: "/page3", category: "Design", rarity: "ShineBlitz2" },
    { imgSrc: "/assets/img/LandingBG/OniGirl6.jpg", link: "/portfolio/SingleCard", category: "Coding", rarity: "ShineBlitz2" },
    { imgSrc: "/assets/img/LandingBG/OniBoy3.jpg", link: "/page2", category: "Design", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniGirl7.jpg", link: "/page3", category: "Design", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniGirl4.jpg", link: "portfolio/project", category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniGirl8.jpg", link: "portfolio/project2", category: "Design", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniBoy4.jpg", link: "/page3", category: "Design", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniGirl6.jpg", link: "/portfolio/SingleCard", category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniBoy3.jpg", link: "/page2", category: "Design", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniGirl7.jpg", link: "/page3", category: "Design", rarity: "rare holo v1" },
    // ... (mehr Karten)
  ];

  // Dynamically filter cards based on category and rarity
  const filteredCards = useMemo(() => {
    return cardsData
      .filter((card) => {
        const matchesCategory = category === "all" || card.category === category;
        return matchesCategory;
      })
      .map((card) => {
        return {
          ...card,
          rarity: cardType !== "normal" ? cardType : card.rarity,
        };
      });
  }, [category, cardType, cardsData]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCardsCount((prevCount) => prevCount + 4); // Load 4 more cards
      setIsLoading(false); // End loading state
    }, 500); // Optional delay for a smoother loading effect
  };

  return (
    <div>
      <HeroImage 
        imageSrc="/assets/img/LandingBG/OniGirl4.jpg" 
        altText="Oni Girl Background" 
      />

      <Filter
        onCategoryChange={setCategory}
        onCardTypeChange={setCardType}
        onLayoutChange={setActiveLayout}
      />

      {/* Dynamic card grid */}
      <div className={`card-grid layout-${activeLayout}`}>
        {filteredCards.slice(0, visibleCardsCount).map((card, index) => (
          <div key={index} className={`holographic__section ${index < visibleCardsCount ? "loaded" : ""}`}>
            <Link href={card.link}>
              <HolographicCard
                imgSrc={card.imgSrc}
                category={card.category}
                rarity={card.rarity}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Load More button */}
      {filteredCards.length > visibleCardsCount && (
        <button onClick={handleLoadMore} className="load-more-btn" disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default Portfolio;
