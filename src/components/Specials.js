import React from 'react';
import Button from './Button';
import Card from './Card';
import greekSalad from '../assets/salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/dessert.jpg';

function Specials() {
  return (
    <section className="container specials-section">
      <div className="specials-header">
        <h1>This weeks specials!</h1>
        <Button text="Online Menu" />
      </div>

      <div className="specials-grid">
        <Card
          image={greekSalad}
          title="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese."
        />
        <Card
          image={bruschetta}
          title="Bruschetta"
          price="$5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned."
        />
        <Card
          image={lemonDessert}
          title="Lemon Dessert"
          price="$5.00"
          description="This comes straight from grandma's recipe book, every last ingredient is authentic."
        />
      </div>
    </section>
  );
}

export default Specials;