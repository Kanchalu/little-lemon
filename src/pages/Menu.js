import React from 'react';
import './Menu.css';
import salad from '../assets/salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import dessert from '../assets/dessert.jpg';

const menuData = {
  starters: [
    { id: 1, name: "Greek Salad", price: "$12.99", description: "Crispy lettuce, peppers, olives, and feta cheese.", image: salad },
    { id: 2, name: "Bruschetta", price: "$5.99", description: "Grilled bread smeared with garlic and seasoned with salt.", image: bruschetta },
  ],
  mains: [
    { id: 3, name: "Grilled Fish", price: "$20.00", description: "Freshly caught sea bass grilled with lemon and herbs.", image: salad }, // Replace with fish image if you have it
    { id: 4, name: "Pasta Pesto", price: "$18.50", description: "Homemade pasta tossed in fresh basil pesto and pine nuts.", image: salad },
  ],
  desserts: [
    { id: 5, name: "Lemon Dessert", price: "$4.99", description: "Grandma's recipe, authentic and citrusy.", image: dessert },
  ]
};

export default function Menu() {
  return (
    <main className="menu-page">
      {/* Brand Hero Section */}
      <section className="menu-hero">
        <div className="hero-container">
          <h1>Our Menu</h1>
          <p>Fresh Mediterranean Flavors</p>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="menu-sections-container">
        {Object.keys(menuData).map((category) => (
          <section key={category} className="menu-category">
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="menu-item-list">
              {menuData[category].map((item) => (
                <div key={item.id} className="menu-item-row">
                  <div className="menu-item-text">
                    <div className="menu-item-header">
                      <h3>{item.name}</h3>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}