import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css';
import salad from '../assets/salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import dessert from '../assets/dessert.jpg';

// Our menu database
const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: salad 
  },
  {
    id: 2,
    name: "Bruschetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruschetta 
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: 4.99,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: dessert 
  }
];

// 1. Make sure to accept isLoggedIn as a prop here!
function Order({ isLoggedIn }) { 
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const navigate = useNavigate(); 

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  // 2. UPDATED CHECKOUT LOGIC
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Always close the modal first
    setIsCartOpen(false);

    // Decision Logic:
    if (!isLoggedIn) {
      // Step A: If not logged in, go to Login/Sign Up
      alert("Please log in or sign up to continue with your order.");
      navigate("/login");
    } else {
      navigate("/checkout-details");
    }
  };

  return (
    <main className="order-page">
      <section className="order-hero">
        <div className="hero-container">
          <h1>Order Online</h1>
          <p className="cart-status" onClick={() => setIsCartOpen(true)}>
            🛒 Cart: {cart.length} items
          </p>
        </div>
      </section>

      {/* 2. The Menu Grid Section */}
      <section className="menu-container">
        <div className="menu-grid">
          {menuItems.map((item) => (
            <article key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <h3>{item.name}</h3>
                <p className="price">${item.price.toFixed(2)}</p>
                <p className="description">{item.description}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. THE CART MODAL */}
      {isCartOpen && (
        <div className="cart-modal-overlay">
          <div className="cart-modal">
            <div className="cart-modal-header">
              <h2>Your Order</h2>
              <button className="close-btn" onClick={() => setIsCartOpen(false)}>✖</button>
            </div>
            
            <div className="cart-items">
              {cart.length === 0 ? (
                <p>Your cart is completely empty.</p>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="cart-item-row">
                    <span>{item.name}</span>
                    <div className="cart-item-price-action">
                      <span className="cart-item-price">${item.price.toFixed(2)}</span>
                      {/* THE NEW REMOVE BUTTON */}
                      <button 
                        className="remove-btn" 
                        onClick={() => removeFromCart(index)}
                        title="Remove item"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="cart-footer">
              <h3>Total: ${cartTotal.toFixed(2)}</h3>
              <button className="checkout-btn" onClick={handleCheckout}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

export default Order;