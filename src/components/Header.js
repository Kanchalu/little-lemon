import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

function Header() {
  // 1. Set up the state to track if menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // 2. Create the toggle function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container">
      <nav className="nav-bar">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        {/* 3. Add the onClick to the Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        {/* 4. Use a template literal to add the 'active' class when menuOpen is true */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;