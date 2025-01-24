'use client'; // Diese Direktive markiert die Datei als Client-Komponente

import React, { useState } from "react";
import Link from 'next/link'; // Korrekt
import Filter from "../components/Filter/Filter";
import HolographicCard from "../components/HolographicCard/HolographicCard";
import HeroImage from "../components/HeroImage/HeroImage";

const Portfolio = () => {
  const [category, setCategory] = useState("all"); // Zustand für Kategorie
  const [cardType, setCardType] = useState("normal"); // Zustand für Karten-Typ
  const [activeLayout, setActiveLayout] = useState(1); // Zustand für Grid-Layout

  // Beispielhafte Kartendaten
  const cardsData = [
    { imgSrc: "/assets/img/Gifs/pain-gif.gif", link: "portfolio/project", category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniGirl8.jpg", link: "portfolio/project2", category: "Design", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniBoy4.jpg", link: "/page3", category: "Design", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniGirl6.jpg", link: "/portfolio/SingleCard", category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniBoy3.jpg", link: "/page2", category: "Design", rarity: "rare holo v1" },
    { imgSrc: "/assets/img/LandingBG/OniGirl7.jpg", link: "/page3", category: "Design", rarity: "rare holo v1" },
  ];

  // Dynamische Kartenfilterung basierend auf Kategorie und Rarität
  const filteredCards = cardsData
    .filter((card) => {
      const matchesCategory = category === "all" || card.category === category;
      return matchesCategory;
    })
    .map((card) => {
      // Überschreibe Rarität, wenn `cardType` ausgewählt ist
      return {
        ...card,
        rarity: cardType !== "normal" ? cardType : card.rarity,
      };
    });

  return (
    <div>

      {/* Hero-Bild mit Overlay für die About-Seite */}
      <HeroImage 
        imageSrc="/assets/img/LandingBG/OniGirl4.jpg" 
        altText="Oni Girl Background" 
      />


      {/* Filter-Komponente */}
      <Filter
        onCategoryChange={setCategory}
        onCardTypeChange={setCardType}
        onLayoutChange={setActiveLayout}
      />

      {/* Dynamisches Karten-Grid */}
      <div className={`card-grid layout-${activeLayout}`}>
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div key={index} className="holographic__section">
              {/* Verwende Link ohne zusätzliches <a>-Tag */}
              <Link href={card.link}>
                <HolographicCard
                  imgSrc={card.imgSrc}
                  category={card.category}
                  rarity={card.rarity} // Neue Rarität anwenden
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No cards found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
