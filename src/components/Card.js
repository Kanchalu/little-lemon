import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

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
        
        {/* 2. Changed button to Link and pointed it to /order */}
        <Link to="/order" className="delivery-btn" style={{ textDecoration: 'none' }}>
          Order a delivery <span className="bike-icon">🏍️</span>
        </Link>
      </div>
    </article>
  );
}

export default Card;