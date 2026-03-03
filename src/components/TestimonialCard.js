import React from 'react';

function TestimonialCard({ rating, image, name, review }) {
  return (
    <div className="testimonial-card">
      <div className="rating">
        {/* We can pass stars as a string like "⭐⭐⭐⭐⭐" */}
        {rating}
      </div>
      <div className="user-info">
        <img src={image} alt={name} className="user-image" />
        <h4>{name}</h4>
      </div>
      <p>"{review}"</p>
    </div>
  );
}

export default TestimonialCard;