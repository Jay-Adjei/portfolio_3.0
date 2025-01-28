'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from "next/link";
import Filter from "../../components/Filter/Filter";
import HolographicCard from "../../components/HolographicCard/HolographicCard";
import HeroImage from "../../components/HeroImage/HeroImage";

const Portfolio = () => {
  const [cardsData, setCardsData] = useState([]); // State für die Portfolio-Daten
  const [category, setCategory] = useState("all");
  const [cardType, setCardType] = useState("normal");
  const [activeLayout, setActiveLayout] = useState(1);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  // Laden der Portfolio-Daten
  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const response = await fetch('/data/portfoliogrid.json'); // Hier wird die JSON geladen
        const data = await response.json();
        setCardsData(data);  // Daten in den State setzen
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      }
    };

    loadPortfolio();
  }, []); // Der Effekt läuft nur einmal nach dem initialen Rendern

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
      setVisibleCardsCount((prevCount) => prevCount + 4);
      setIsLoading(false);
    }, 500);
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

      <div className={`card-grid layout-${activeLayout}`}>
        {filteredCards.slice(0, visibleCardsCount).map((card, index) => (
          <div key={index} className={`holographic__section ${index < visibleCardsCount ? "loaded" : ""}`}>
            <Link href={`/portfolio/${card.slug}`}>
              <HolographicCard
                imgSrc={card.imgSrc}
                category={card.category}
                rarity={card.rarity}
              />
            </Link>
          </div>
        ))}
      </div>

      {filteredCards.length > visibleCardsCount && (
        <button onClick={handleLoadMore} className="load-more-btn" disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default Portfolio;
