import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import greekSalad from '../assets/salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/dessert.jpg';

// This is your "data source" mentioned in the instructions
const dishes = [
  {
    id: 1,
    image: greekSalad,
    title: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese."
  },
  {
    id: 2,
    image: bruschetta,
    title: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned."
  },
  {
    id: 3,
    image: lemonDessert,
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient is authentic."
  }
];

function Specials() {
  return (
    <section className="container specials-section">
      <div className="specials-header">
        <h1>This weeks specials!</h1>
        {/* Use Link here to connect it to your Menu page */}
        <Link to="/menu" className="cta-button">Online Menu</Link>
      </div>

      <div className="specials-grid">
        {/* This is the "Loop" Meta is looking for! */}
        {dishes.map((dish) => (
          <Card 
            key={dish.id}
            image={dish.image}
            title={dish.title}
            price={dish.price}
            description={dish.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;