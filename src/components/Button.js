import React from 'react';

function Button({ text, onClick }) {
  return (
    <button className="yellow-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;