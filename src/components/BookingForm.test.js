import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm'; 

// --- MOCK THE ROUTER (WITH VIRTUAL FLAG) ---
// The { virtual: true } tells Jest to stop looking for the real file on your computer!
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}), { virtual: true });

describe('BookingForm Validation', () => {

  // ==========================================
  // STEP 1: HTML5 Validation Tests
  // ==========================================
  test('HTML5 validation attributes are applied to the date input', () => {
    render(<BookingForm availableTimes={['17:00']} />);
    
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('required');
  });

  test('HTML5 validation attributes are applied to the guests input', () => {
    render(<BookingForm availableTimes={['17:00']} />);
    
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');
  });

  // ==========================================
  // STEP 2: JavaScript Validation Tests
  // ==========================================
  test('Submit button is disabled when form is invalid (empty date)', () => {
    render(<BookingForm availableTimes={['17:00']} />);
    
    const submitButton = screen.getByRole('button', { name: /Confirm Selection/i });
    expect(submitButton).toBeDisabled();
  });

  test('Submit button is enabled when form is valid', () => {
    render(<BookingForm availableTimes={['17:00']} />);
    
    // 1. Fill out the Date
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2026-10-10' } });

    // 2. Fill out the Guests
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '2' } });

    // 3. The button should now be enabled
    const submitButton = screen.getByRole('button', { name: /Confirm Selection/i });
    expect(submitButton).toBeEnabled();
  });

});