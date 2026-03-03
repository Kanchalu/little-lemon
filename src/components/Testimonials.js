import React from 'react';
import TestimonialCard from './TestimonialCard';
import user1 from '../assets/user1.jpg'; // Make sure these images exist!
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';

function Testimonials() {
  return (
    <section className="testimonials-wrapper">
      <div className="container testimonials-content">
        <h1>Testimonials</h1>
        <div className="testimonials-grid">
          <TestimonialCard
            rating="⭐⭐⭐⭐⭐"
            image={user1}
            name="Sarah M."
            review="The Greek Salad was fresh and authentic. Best in the city!"
          />
          <TestimonialCard
            rating="⭐⭐⭐⭐"
            image={user2}
            name="John D."
            review="Loved the Bruschetta. Great atmosphere and fast delivery."
          />
          <TestimonialCard
            rating="⭐⭐⭐⭐⭐"
            image={user3}
            name="Alice W."
            review="Grandma's lemon dessert is a must-try. I'll be back!"
          />
          <TestimonialCard
            rating="⭐⭐⭐⭐⭐"
            image={user4}
            name="Given K."
            review="A masterpiece of Mediterranean flavors. Highly recommended."
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;