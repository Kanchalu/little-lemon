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

// Touch diagnostics: log which element receives touch events on mobile
// (temporary — remove after debugging)
function logTouchEvent(e) {
  try {
    const t = e.target;
    const desc = t && (t.id || t.className || t.tagName);
    console.debug('Touch event:', e.type, 'target=', desc, t);
  } catch (err) {
    console.error('Error logging touch event', err);
  }
}
window.addEventListener('touchstart', logTouchEvent, { capture: true });
window.addEventListener('touchmove', logTouchEvent, { capture: true });
window.addEventListener('touchend', logTouchEvent, { capture: true });

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
