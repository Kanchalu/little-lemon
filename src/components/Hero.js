import { Link } from 'react-router-dom';
import React from 'react';
import heroImg from '../assets/hero.jpg';
import Button from './Button'; // Import the new reusable component

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          {/* Use the component instead of the HTML button */}
          <Link to="/reservations" className="cta-button">
              Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Serving Mediterranean food" />
        </div>
      </div>
    </section>
  );
}

export default Hero;