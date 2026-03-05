import React, { useState } from 'react';
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
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(''); 
  const [occasion, setOccasion] = useState('Birthday');
  const [specialRequests, setSpecialRequests] = useState('');

  // --- VALIDATION LOGIC ---
  // Step 1 check: Date must be picked and guests must be between 1-10
  const isStep1Valid = date !== '' && guests >= 1 && guests <= 10;

  // Step 2 check: Names must not be empty and email must be a valid format
  const isStep2Valid = firstName.length > 1 && lastName.length > 1 && email.includes('@');

  // --- HANDLERS ---
  const handleNext = (e) => { 
    e.preventDefault(); 
    setStep(step + 1); 
  };
  
  const handleBack = (e) => { 
    e.preventDefault(); 
    setStep(step - 1); 
  };
  
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const formData = { firstName, lastName, email, phone, date, time, guests, occasion, specialRequests };
    const success = submitForm(formData); 
    if (success) {
        navigate('/confirmation'); 
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    }
  };

  // ==========================================
  // STEP 1: RESERVATION DETAILS
  // ==========================================
  if (step === 1) {
    return (
      <form className="booking-form" onSubmit={handleNext}>
        <h2>RESERVATIONS</h2>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
          </div>
          <div className="form-col">
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>{timeOption}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />
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

        {/* Updated: Button is now disabled if Step 1 is invalid */}
        <input 
          className="submit-button" 
          type="submit" 
          value="Confirm Selection" 
          aria-label="Confirm Selection" 
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
      <form className="booking-form" onSubmit={handleFinalSubmit}>
        <h2>CONTACT INFO</h2>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required minLength="2" />
          </div>
          <div className="form-col">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required minLength="2" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-col">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
        </div>

        <div className="form-col" style={{ marginTop: '10px' }}>
          <label htmlFor="requests">Special Requests</label>
          <textarea id="requests" rows="2" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)}></textarea>
        </div>

        <div className="button-group">
          <button type="button" className="back-button" onClick={handleBack} aria-label="Go Back">Back</button>
          
          {/* Updated: Button is now disabled if Step 2 is invalid */}
          <input 
            className="submit-button flex-2" 
            type="submit" 
            value="Book Now" 
            aria-label="Submit Reservation" 
            disabled={!isStep2Valid}
          />
        </div>
      </form>
    );
  }
}

export default BookingForm;