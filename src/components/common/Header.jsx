// src/components/common/Header.jsx
import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h2>ChronoVerse</h2>
            <span>Future-Proof Digital Solutions</span>
          </div>

          {/* Navigation */}
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          {/* Dark Mode Toggle */}
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
