// src/components/sections/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="particles"></div>
        <div className="grid-lines"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* High-Impact Tagline */}
          <h1 className="hero-title">
            <span className="gradient-text">ChronoVerse</span>
            <br />
            Building the next era of digital experience
          </h1>
          
          <p className="hero-subtitle">
            Timeless code. Future-proof platforms. We craft scalable web and mobile solutions 
            that stand the test of time.
          </p>

          {/* Immediate Call-to-Action */}
          <div className="hero-actions">
            <button className="btn btn-primary">
              Start Your Project
            </button>
            <button className="btn btn-secondary">
              Book a Strategy Session
            </button>
          </div>

          {/* Core Services Summary */}
          <div className="services-preview">
            <div className="service-badge">
              <span>🌐</span>
              <span>Web Development</span>
            </div>
            <div className="service-badge">
              <span>📱</span>
              <span>Mobile App Development</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;