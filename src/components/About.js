import React from 'react';
import hero from '../assets/hero.jpg';
import hero1 from '../assets/hero1.jpg';

function About() {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-content">
          <h1 className="about-title">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-text">
            Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            Founded by brothers Mario and Adrian, the restaurant brings the authentic flavors of Italy, Greece, and Turkey to the heart of Chicago.
          </p>
        </div>

        <div className="about-image-stack">
          {/* Bottom Image (The one that sits behind) */}
          <img
            src={hero}
            alt="Mario and Adrian in the kitchen"
            className="about-img-bottom"
          />
          {/* Top Image (The one that sits in front) */}
          <img
            src={hero1}
            alt="Mario and Adrian cooking"
            className="about-img-top"
          />
        </div>
      </div>
    </section>
  );
}

export default About;