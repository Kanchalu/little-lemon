import React from 'react';
import Button from './Button';

function Specials() {
  return (
    <section className="container specials-section">
      <div className="specials-header">
        <h1>This weeks specials!</h1>
        {/* We use the same component with different text */}
        <Button text="Online Menu" />
      </div>
      {/* This is where the 3 food cards will go next */}
      <div className="specials-grid">
        {/* Card components will be added here */}
      </div>
    </section>
  );
}

export default Specials;