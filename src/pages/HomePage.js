import React from 'react';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';


/**
 * A React component is a JavaScript function that returns markup [2, 3].
 */
function HomePage() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <AboutSection />
    </main>
  );
}

export default HomePage;