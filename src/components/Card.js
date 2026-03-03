import React from 'react';

function Card({ image, title, price, description }) {
  return (
    <article className="food-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <span className="card-price">{price}</span>
        </div>
        <p>{description}</p>
        <button className="delivery-btn">
          Order a delivery <span className="bike-icon">🏍️</span>
        </button>
      </div>
    </article>
  );
}

export default Card;