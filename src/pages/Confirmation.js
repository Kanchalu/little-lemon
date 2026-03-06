import React from 'react';
import { Link } from 'react-router-dom';
import './Order.css'; // Reusing your existing styles for consistency

export default function Confirmation() {
  return (
    <main className="order-page">
      {/* Brand Consistent Hero Section */}
      <section className="order-hero">
        <div className="hero-container">
          <h1 className="confirmation-title">Order Confirmed!</h1>
          <p className="status-badge">Status: Preparing Your Feast</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="confirmation-content">
        <div className="success-icon">✔️</div>
        <h2>Thank You for Your Order!</h2>
        <p className="confirmation-msg">
          We’ve received your request and our chefs at Little Lemon are 
          already preparing your fresh Mediterranean ingredients.
        </p>
        
        <div className="order-details-summary">
          <p><strong>Estimated Delivery:</strong> 30 - 45 Minutes</p>
          <p><strong>Order ID:</strong> #LL-{Math.floor(Math.random() * 9000) + 1000}</p>
        </div>

        <Link to="/" className="add-to-cart-btn return-home-btn">
          Back to Home Page
        </Link>
      </section>
    </main>
  );
}