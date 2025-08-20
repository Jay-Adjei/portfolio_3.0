'use client';

import { useState } from 'react';
import './PokeCard.css';

const PokeCard = ({ 
  pokemon = {
    id: 1,
    name: 'Pikachu',
    type: 'Electric',
    hp: 100,
    attack: 55,
    defense: 40,
    speed: 90,
    image: '/assets/images/pokemon/pikachu.jpg',
    description: 'Ein süßes, gelbes Pokémon, das Elektrizität speichern kann.'
  },
  isFlipped = false,
  onClick = null
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (onClick) {
      onClick(pokemon);
    }
  };

  return (
    <div 
      className={`pokemon-card ${isFlipped ? 'flipped' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-inner">
        {/* Front of the card */}
        <div className="card-front">
          <div className="card-header">
            <div className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</div>
            <div className="pokemon-type">{pokemon.type}</div>
          </div>
          
          <div className="pokemon-image-container">
            <div className="pokemon-image-placeholder">
              <span className="pokemon-emoji">⚡</span>
            </div>
          </div>
          
          <div className="pokemon-info">
            <h3 className="pokemon-name">{pokemon.name}</h3>
            <p className="pokemon-description">{pokemon.description}</p>
          </div>
          
          <div className="card-footer">
            <div className="pokemon-stats">
              <div className="stat">
                <span className="stat-label">HP</span>
                <span className="stat-value">{pokemon.hp}</span>
              </div>
              <div className="stat">
                <span className="stat-label">ATK</span>
                <span className="stat-value">{pokemon.attack}</span>
              </div>
              <div className="stat">
                <span className="stat-label">DEF</span>
                <span className="stat-value">{pokemon.defense}</span>
              </div>
              <div className="stat">
                <span className="stat-label">SPD</span>
                <span className="stat-value">{pokemon.speed}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="card-back">
          <div className="card-back-content">
            <div className="pokemon-logo">🎴</div>
            <h3>Pokemon Card</h3>
            <p>Klicke um die Karte umzudrehen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
