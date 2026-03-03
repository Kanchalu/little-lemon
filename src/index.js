import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Global handler: log unhandled promise rejections and suppress
// the specific extension-related message that can't be fixed from app code.
window.addEventListener('unhandledrejection', (event) => {
  try {
    const msg = event.reason && (event.reason.message || String(event.reason));
    // If it matches the extension runtime message, prevent the default error
    if (msg && /A listener indicated an asynchronous response by returning true/.test(msg)) {
      // Log a concise warning with the stack for diagnostics
      console.warn('Suppressed extension message error:', event.reason);
      event.preventDefault(); // stop it from appearing as an uncaught error
    }
  } catch (e) {
    // If our handler fails, don't throw further errors
    console.error('Error in unhandledrejection handler', e);
  }
});

// Note: touch diagnostics removed after applying overlay fix

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
