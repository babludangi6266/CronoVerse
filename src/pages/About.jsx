// src/pages/About.jsx
import React from 'react';
import About from '../components/sections/About';

const AboutPage = () => {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About ChronoVerse</h1>
          <p>Learn about our mission, values, and the team behind your success</p>
        </div>
      </section>
      <About />
    </div>
  );
};

export default AboutPage;