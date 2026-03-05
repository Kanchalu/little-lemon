// App.js
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Added useNavigate
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/Order';
import Login from './pages/Login';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  const navigate = useNavigate();

  // --- ADDED SUBMIT LOGIC ---
  const submitForm = (formData) => {
    console.log("Form Submitted:", formData);
    // This simulates the success required by the instructions
    const success = true; 
    if (success) {
      navigate('/confirmation');
    }
    return success;
  };

  return (
    <div className="App">
      {/* Header always visible */}
      <Header />

      {/* Main routing for all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        {/* UPDATE: Pass submitForm to Reservations */}
        <Route 
          path="/reservations" 
          element={<Reservations submitForm={submitForm} />} 
        />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;