import React from 'react';
import logo from '../assets/logo.jpg';

function Footer() {
  return (
    <footer className="footer-background">
      <div className="container footer-container">
        {/* Column 1: Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        {/* Column 2: Navigation Links */}
        <nav className="footer-column footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
          </ul>
        </nav>

        {/* Column 3: Contact Details */}
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>123 Lemon Way, Chicago</li>
            <li>+1 (234) 567-890</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;