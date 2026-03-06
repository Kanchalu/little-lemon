import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css'; 

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  
  // This toggle decides if we show the "Login" form or the "Sign Up" form
  const [isLoginMode, setIsLoginMode] = useState(true); 
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // 1. Log the user in
    setIsLoggedIn(true);
    
    // 2. Show the correct alert based on what they just did
    if (isLoginMode) {
      alert("Login successful! Let's complete your order details.");
    } else {
      alert("Account created successfully! Let's complete your order details.");
    }
    
    // 3. Move exactly to the next step in your idea: The Details Form!
    navigate('/checkout-details');
  };

  return (
    <main className="order-page">
      <section className="order-hero">
        <div className="hero-container">
          <h1>{isLoginMode ? 'Log In' : 'Sign Up'}</h1>
          <p className="cart-status" style={{ cursor: 'default' }}>
            {isLoginMode ? 'Welcome back to Little Lemon' : 'Create your account to order'}
          </p>
        </div>
      </section>

      <section className="menu-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* We ONLY show the Name field if they are Signing Up */}
          {!isLoginMode && (
            <div>
              <label htmlFor="name" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#495E57' }}>
                Full Name
              </label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box' }}
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#495E57' }}>
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box' }}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#495E57' }}>
              Password
            </label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box' }}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="add-to-cart-btn" style={{ marginTop: '1rem', width: '100%' }}>
            {isLoginMode ? 'Sign In' : 'Create Account'}
          </button>
          
        </form>

        {/* The button to toggle between Login and Sign Up */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button 
            onClick={() => setIsLoginMode(!isLoginMode)}
            style={{ background: 'none', border: 'none', color: '#495E57', fontSize: '1.1rem', cursor: 'pointer', textDecoration: 'underline' }}
          >
            {isLoginMode ? "Don't have an account? Sign up here." : "Already have an account? Log in here."}
          </button>
        </div>

      </section>
    </main>
  );
}