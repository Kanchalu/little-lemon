import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css'; 

export default function CheckoutDetails() {
  const navigate = useNavigate();

  // State for delivery and payment info
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    
    // Simulate processing payment
    alert("Payment confirmed! Preparing your receipt...");
    
    // Send them to the final Success page!
    navigate('/order-confirmation');
  };

  return (
    <main className="order-page">
      <section className="order-hero">
        <div className="hero-container">
          <h1>Checkout Details</h1>
          <p className="cart-status" style={{ cursor: 'default' }}>Almost done!</p>
        </div>
      </section>

      <section className="menu-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={handlePaymentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* DELIVERY SECTION */}
          <fieldset style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1.5rem' }}>
            <legend style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#495E57', padding: '0 10px' }}>Delivery Address</legend>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <label htmlFor="address" style={{ display: 'block', marginBottom: '0.5rem' }}>Street Address</label>
                <input 
                  type="text" 
                  id="address" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required 
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label htmlFor="city" style={{ display: 'block', marginBottom: '0.5rem' }}>City / Zip Code</label>
                <input 
                  type="text" 
                  id="city" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required 
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                />
              </div>
            </div>
          </fieldset>

          {/* PAYMENT SECTION */}
          <fieldset style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1.5rem' }}>
            <legend style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#495E57', padding: '0 10px' }}>Payment Information</legend>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <label htmlFor="cardNumber" style={{ display: 'block', marginBottom: '0.5rem' }}>Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required 
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label htmlFor="expiry" style={{ display: 'block', marginBottom: '0.5rem' }}>Expiration Date</label>
                <input 
                  type="text" 
                  id="expiry" 
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  required 
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                />
              </div>
            </div>
          </fieldset>

          <button type="submit" className="add-to-cart-btn" style={{ width: '100%', padding: '1rem', fontSize: '1.2rem' }}>
            Confirm Payment & Order
          </button>

        </form>
      </section>
    </main>
  );
}