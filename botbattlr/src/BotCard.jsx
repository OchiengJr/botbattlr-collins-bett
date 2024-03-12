import React from 'react';
import './index.css';

function BotCard({ img, name, botClass, health, armor, damage, deleteBot }) {
  return (
    <div id="container">
      <div className="card">
        <i className='bx bx-trash cancel-icon' onClick={(e) => { e.stopPropagation(); deleteBot() }}></i>
        <img src={img} alt="bot pic" />
        <div className="card__details">
          <span className="bot_name">{name}</span>
          <span className="bot_class">{botClass}</span>
          <div className="bot-info">
            <p>Health: {health}</p>
            <p>Armor: {armor}</p>
            <p>Damage: {damage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotCard;

