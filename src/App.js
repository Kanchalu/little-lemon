// App.js
import React, { useState } from 'react'; // 1. ADDED THIS IMPORT!
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Order from './pages/Order'; 
import Login from './pages/Login';
import ConfirmedBooking from './pages/ConfirmedBooking';
import CheckoutDetails from './pages/CheckoutDetails';

// I changed this import name so it's clearly for the food order!
import OrderConfirmation from './pages/Confirmation'; 

function App() {
  const navigate = useNavigate();

  // 2. CREATED THE LOGIN STATE HERE!
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // --- SUBMIT LOGIC (For Reservations) ---
  const submitForm = (formData) => {
    console.log("Form Submitted:", formData);
    // This simulates the success required by the instructions
    const success = true; 
    if (success) {
      navigate('/confirmation'); // This sends them to ConfirmedBooking
    }
    return success;
  };

  return (
    <div className="App">
      {/* Header always visible */}
      <Header />

      {/* Main routing for all pages (No nested <Routes> tags!) */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        
        <Route 
          path="/reservations" 
          element={<Reservations submitForm={submitForm} />} 
        />
        
        {/* 3. PASSED isLoggedIn TO ORDER */}
        <Route path="/order" element={<Order isLoggedIn={isLoggedIn} />} /> 
        
        {/* 4. PASSED setIsLoggedIn TO LOGIN (This fixes your error!) */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        
        {/* THIS IS YOUR RESERVATION SUCCESS PAGE */}
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        
        {/* THIS IS YOUR NEW FOOD ORDER SUCCESS PAGE */}
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/checkout-details" element={<CheckoutDetails />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;