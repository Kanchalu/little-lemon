import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm'; // Adjust path if needed
import { initializeTimes } from './pages/Reservations'; // Adjust path if needed

// TEST 1: Check if the BookingForm displays correctly
test('Renders the BookingForm heading', () => {
    // We wrap in <BrowserRouter> because BookingForm uses useNavigate()
    render(
      <BrowserRouter>
        <BookingForm availableTimes={["17:00"]} />
      </BrowserRouter>
    );
    const headingElement = screen.getByText(/RESERVATIONS/i);
    expect(headingElement).toBeInTheDocument();
});

// TEST 2: Check if initializeTimes returns the correct array of strings (Meta requirement)
test('initializeTimes returns the correct default availability', () => {
    const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(expectedValue);
});

// TEST 3: Check for Step 1 Validation (Disabled button if no date is picked)
test('Submit button is disabled when date is empty', () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={["17:00"]} />
      </BrowserRouter>
    );
    
    // Using aria-label because we added it for Accessibility
    const submitButton = screen.getByLabelText(/Confirm Selection/i);
    expect(submitButton).toBeDisabled(); 
});