import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const navigate = useNavigate();
  
  // --- STATE ---
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(''); 
  const [guests, setGuests] = useState(''); 
  const [occasion, setOccasion] = useState('Birthday');
  const [specialRequests, setSpecialRequests] = useState('');

  // --- SYNC TIME WITH API ---
  useEffect(() => {
    if (availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  // --- VALIDATION LOGIC ---
  const isStep1Valid = date !== '' && guests >= 1 && guests <= 10 && time !== '';
  // Enhanced Step 2 validation per standard project requirements
  const isStep2Valid = firstName.length >= 2 && lastName.length >= 2 && email.includes('@') && phone.length >= 10;

  // --- HANDLERS ---
  const handleNext = (e) => { 
    e.preventDefault(); 
    if (isStep1Valid) setStep(2); 
  };
  
  const handleBack = (e) => { 
    e.preventDefault(); 
    setStep(1); 
  };
  
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    // Package all form data into one object for the API
    const formData = { 
      firstName, 
      lastName, 
      email, 
      phone, 
      date, 
      time, 
      guests, 
      occasion, 
      specialRequests 
    };
    
    // Call submitForm (from App.js) which handles window.submitAPI
    submitForm(formData); 
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    }
  };

  // ==========================================
  // STEP 1: RESERVATION DETAILS
  // ==========================================
  if (step === 1) {
    return (
      <form className="booking-form" onSubmit={handleNext} aria-labelledby="res-title">
        <h2 id="res-title">RESERVATIONS</h2>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="res-date">Choose date</label>
            <input 
              type="date" 
              id="res-date" 
              value={date} 
              onChange={handleDateChange} 
              required 
              aria-required="true"
            />
          </div>
          <div className="form-col">
            <label htmlFor="res-time">Choose time</label>
            <select 
              id="res-time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)}
              required
            >
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>{timeOption}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="guests">Number of guests</label>
            <input 
              type="number" 
              placeholder="1" 
              min="1" 
              max="10" 
              id="guests" 
              value={guests} 
              onChange={(e) => setGuests(e.target.value)} 
              required 
            />
          </div>
          <div className="form-col">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </select>
          </div>
        </div>

        <input 
          className="submit-button" 
          type="submit" 
          value="Confirm Selection" 
          aria-label="Confirm booking details and proceed to contact information" 
          disabled={!isStep1Valid}
        />
      </form>
    );
  }

  // ==========================================
  // STEP 2: USER DETAILS
  // ==========================================
  if (step === 2) {
    return (
      <form className="booking-form" onSubmit={handleFinalSubmit} aria-labelledby="contact-title">
        <h2 id="contact-title">CONTACT INFO</h2>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="first-name">First Name</label>
            <input 
              type="text" 
              id="first-name" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              required 
              minLength="2" 
            />
          </div>
          <div className="form-col">
            <label htmlFor="last-name">Last Name</label>
            <input 
              type="text" 
              id="last-name" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              required 
              minLength="2" 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-col">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
              placeholder="123-456-7890"
            />
          </div>
        </div>

        <div className="form-col" style={{ marginTop: '10px' }}>
          <label htmlFor="requests">Special Requests (Optional)</label>
          <textarea 
            id="requests" 
            rows="2" 
            value={specialRequests} 
            onChange={(e) => setSpecialRequests(e.target.value)}
          ></textarea>
        </div>

        <div className="button-group">
          <button 
            type="button" 
            className="back-button" 
            onClick={handleBack} 
            aria-label="Return to previous step"
          >
            Back
          </button>
          
          <input 
            className="submit-button flex-2" 
            type="submit" 
            value="Book Now" 
            aria-label="Finalize and submit reservation" 
            disabled={!isStep2Valid}
          />
        </div>
      </form>
    );
  }
}

export default BookingForm;