import React from 'react';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';

function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist. The restaurant was
          founded by Mario and Adrian, two Italian brothers who moved to Chicago
          to share their passion for fresh, vibrant ingredients.
        </p>
        <p>
          Our kitchen focuses on seasonal ingredients to provide a healthy,
          delicious dining experience that feels like home.
        </p>
      </div>

      <div className="about-image-container">
        <img 
          src={user1} 
          alt="Mario and Adrian cooking" 
          className="about-img-back" 
        />
        <img 
          src={user2} 
          alt="Chef adding finishing touches" 
          className="about-img-front" 
        />
      </div>
    </section>
  );
}

export default About;