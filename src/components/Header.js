import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

// Accept isLoggedIn and setIsLoggedIn as props from App.js
function Header({ isLoggedIn, setIsLoggedIn }) {
   const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => setMenuOpen(!menuOpen);
 return (
     <header className="header">
      {/* Added role and aria-label for Accessibility */}
    <nav className="nav-menu container" role="navigation" aria-label="Main Menu">
        <Link to="/" aria-label="Go to Home">
       <img src={logo} alt="Little Lemon Logo" className="logo" />
      </Link>

        {/* Added aria-expanded and aria-label for screen readers */}
      <div 
          className="hamburger" 
          onClick={toggleMenu} 
          role="button" 
          aria-expanded={menuOpen} 
          aria-label="Toggle navigation menu"
        >
   <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      <div className={`bar ${menuOpen ? "open" : ""}`}></div>
     </div>

   <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
      <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
 <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
     <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
 <li><Link to="/reservations" onClick={toggleMenu}>Reservations</Link></li>
   <li><Link to="/order" onClick={toggleMenu}>Order Online</Link></li>
          
          {/* Dynamic Login/Logout update */}
   <li>
            {isLoggedIn ? (
              <Link 
                to="/" 
                onClick={() => { setIsLoggedIn(false); toggleMenu(); }}
                aria-label="Logout"
              >
                Logout
              </Link>
            ) : (
              <Link to="/login" onClick={toggleMenu} aria-label="Login">Login</Link>
            )}
          </li>
        </ul>
       </nav>
    </header>
 );
}

export default Header;