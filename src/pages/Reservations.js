import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';

// 1. Create initializeTimes per instructions
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// 2. Create the updateTimes reducer function
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return state;
    default:
      return state;
  }
};

// Added { submitForm } to the arguments to receive it from App.js
function Reservations({ submitForm }) {
  // 3. Swap useState for useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <section className="reservations-page" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1>Reserve a Table</h1>
      <p>Please fill out the form below to book your table at Little Lemon.</p>
      
      {/* 4. Pass the submitForm prop down to the BookingForm */}
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm} 
      />
    </section>
  );
}

export default Reservations;