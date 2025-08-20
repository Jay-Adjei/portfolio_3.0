'use client';

import { useState } from 'react';
import PokeCard from './components/pokecards';
import './pokecard.css';

export default function PokeCardPage() {
  const [isVisible, setIsVisible] = useState(false);

  // Animation beim Laden
  useState(() => {
    setIsVisible(true);
  });

  return (
    <div className={`pokecard-wrapper ${isVisible ? 'visible' : ''}`}>
      {/* Background Elements */}
      <div className="pokecard-background-grid"></div>
      <div className="pokecard-floating-orb pokecard-orb-1"></div>
      <div className="pokecard-floating-orb pokecard-orb-2"></div>
      <div className="pokecard-floating-orb pokecard-orb-3"></div>

      {/* Hero Header */}
      <div className="pokecard-hero-section">
        <div className="pokecard-hero-content">
          <span>Coming Soon</span>

          <h1 className="pokecard-hero-title">
            <span className="pokecard-title-line">PokeCard</span>
            <span className="pokecard-title-line gradient">Collection</span>
          </h1>

          <p className="pokecard-hero-description">
            Eine interaktive Sammlung von Pokémon-Karten mit modernem Design und 
            spannenden Animationen. Wir arbeiten daran, diese Seite bald für dich zu veröffentlichen.
          </p>
        </div>
      </div>

      <div className="pokecard-container">
        {/* Feature Preview */}
        <div className="pokecard-feature-preview">
          <div className="pokecard-feature-card">
            <div className="pokecard-feature-icon">🎴</div>
            <h3 className="pokecard-feature-title">Interaktive Karten</h3>
            <p className="pokecard-feature-description">
              Sammle und interagiere mit verschiedenen Pokémon-Karten in einem 
              modernen, responsiven Interface.
            </p>
          </div>

          <div className="pokecard-feature-card">
            <div className="pokecard-feature-icon">✨</div>
            <h3 className="pokecard-feature-title">Animationen</h3>
            <p className="pokecard-feature-description">
              Smooth Animationen und Hover-Effekte für ein immersives 
              Sammelerlebnis.
            </p>
          </div>

          <div className="pokecard-feature-card">
            <div className="pokecard-feature-icon">🎮</div>
            <h3 className="pokecard-feature-title">Gaming Features</h3>
            <p className="pokecard-feature-description">
              Verschiedene Spielmodi und Features für echte Pokémon-Fans.
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="pokecard-progress-section">
          <h2 className="pokecard-progress-title">Entwicklungsfortschritt</h2>
          <div className="pokecard-progress-bar">
            <div className="pokecard-progress-fill" style={{ width: '35%' }}></div>
          </div>
          <p className="pokecard-progress-text">35% abgeschlossen</p>
        </div>

        {/* Pokemon Cards Demo */}
        <div className="pokecard-demo-section">
          <h2 className="pokecard-demo-title">Demo: Pokemon-Karten</h2>
          <p className="pokecard-demo-description">
            Hier siehst du eine Vorschau der Pokemon-Karten, an denen wir arbeiten:
          </p>
          
          <div className="pokecard-demo-grid">
            <PokeCard 
              pokemon={{
                id: 25,
                name: 'Pikachu',
                type: 'Electric',
                hp: 100,
                attack: 55,
                defense: 40,
                speed: 90,
                description: 'Ein süßes, gelbes Pokémon, das Elektrizität speichern kann.'
              }}
            />
            
            <PokeCard 
              pokemon={{
                id: 6,
                name: 'Charizard',
                type: 'Fire',
                hp: 120,
                attack: 84,
                defense: 78,
                speed: 100,
                description: 'Ein mächtiges Feuer-Pokémon mit beeindruckenden Flügeln.'
              }}
            />
            
            <PokeCard 
              pokemon={{
                id: 9,
                name: 'Blastoise',
                type: 'Water',
                hp: 130,
                attack: 83,
                defense: 100,
                speed: 78,
                description: 'Ein robustes Wasser-Pokémon mit starken Panzern.'
              }}
            />
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="pokecard-coming-soon">
          <div className="pokecard-coming-soon-icon">🚀</div>
          <h3 className="pokecard-coming-soon-title">Bald verfügbar!</h3>
          <p className="pokecard-coming-soon-text">
            Wir arbeiten hart daran, die PokeCard-Collection für dich zu entwickeln. 
            Bleib dran für Updates und den offiziellen Launch!
          </p>
        </div>
      </div>
    </div>
  );
}
