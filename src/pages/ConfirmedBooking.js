import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-content">
        <h1>Booking Confirmed!</h1>
        <p>Thank you for choosing Little Lemon.</p>
        <p>We have received your reservation details and look forward to seeing you soon!</p>
        <Link to="/" className="delivery-btn" style={{marginTop: '40px'}}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default ConfirmedBooking;