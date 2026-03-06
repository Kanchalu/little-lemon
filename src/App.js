import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

// 1. IMPORT YOUR LOGIC FROM THE NEW FILE
import { initializeTimes, updateTimes } from './apiLogic';

// Components
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
import OrderConfirmation from './pages/Confirmation'; 

// --- (Note: initializeTimes and updateTimes were moved to apiLogic.js) ---

function App() {
  const navigate = useNavigate();

  // --- AUTH STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // --- BOOKING STATE & LOCAL STORAGE ---
  const [allBookings, setAllBookings] = useState(() => {
    const savedBookings = localStorage.getItem("bookings");
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(allBookings));
  }, [allBookings]);

  // --- RESERVATION TIMES REDUCER (Uses imported logic) ---
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  // --- SUBMIT LOGIC ---
  const submitForm = (formData) => {
    const apiResult = window.submitAPI ? window.submitAPI(formData) : true;

    if (apiResult) {
      setAllBookings((prevBookings) => [...prevBookings, formData]);
      navigate('/confirmation');
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        
        <Route 
          path="/reservations" 
          element={
            <Reservations 
              availableTimes={availableTimes} 
              dispatch={dispatch} 
              submitForm={submitForm} 
            />
          } 
        />
        
        <Route path="/order" element={<Order isLoggedIn={isLoggedIn} />} /> 
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route 
            path="/confirmation" 
            element={<ConfirmedBooking bookingData={allBookings} />} 
        />
        
        <Route path="/checkout-details" element={<CheckoutDetails />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;