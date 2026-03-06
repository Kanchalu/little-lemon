import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css';
import salad from '../assets/salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import dessert from '../assets/dessert.jpg';

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

function Order({ isLoggedIn }) { 
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const navigate = useNavigate(); 

  const addToCart = (item) => {
    setCart([...cart, item]);
    // A11y: Standard alerts are okay, but status messages are better for screen readers
    alert(`${item.name} added to cart!`);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setIsCartOpen(false);

    if (!isLoggedIn) {
      alert("Please log in or sign up to continue with your order.");
      navigate("/login");
    } else {
      navigate("/checkout-details");
    }
  };

  return (
    <main className="order-page">
      {/* LANDMARK: Hero Section */}
      <section className="order-hero" aria-labelledby="order-title">
        <div className="hero-container">
          <h1 id="order-title">Order Online</h1>
          <button 
            className="cart-status-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label={`View shopping cart, ${cart.length} items`}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1.2rem' }}
          >
            🛒 Cart: {cart.length} items
          </button>
        </div>
      </section>

      {/* LANDMARK: Menu Grid with Semantic Article tags */}
      <section className="menu-container" aria-label="Little Lemon Menu">
        <div className="menu-grid">
          {menuItems.map((item) => (
            <article key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <h3>{item.name}</h3>
                <p className="price" aria-label={`Price: ${item.price} dollars`}>
                    ${item.price.toFixed(2)}
                </p>
                <p className="description">{item.description}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item)}
                  aria-label={`Add ${item.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL: Shopping Cart with ARIA dialog roles */}
      {isCartOpen && (
        <div className="cart-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <div className="cart-modal">
            <div className="cart-modal-header">
              <h2 id="cart-title">Your Order</h2>
              <button 
                className="close-btn" 
                onClick={() => setIsCartOpen(false)}
                aria-label="Close shopping cart"
              >
                ✖
              </button>
            </div>
            
            <div className="cart-items" role="list">
              {cart.length === 0 ? (
                <p role="status">Your cart is completely empty.</p>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="cart-item-row" role="listitem">
                    <span>{item.name}</span>
                    <div className="cart-item-price-action">
                      <span className="cart-item-price">${item.price.toFixed(2)}</span>
                      <button 
                        className="remove-btn" 
                        onClick={() => removeFromCart(index)}
                        aria-label={`Remove ${item.name} from cart`}
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
              <button 
                className="checkout-btn" 
                onClick={handleCheckout}
                aria-label="Proceed to checkout"
              >
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