// src/pages/Portfolio.jsx
import React from 'react';
import Portfolio from '../components/sections/Portfolio';

const PortfolioPage = () => {
  return (
    <div className="page portfolio-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p>Discover how we've transformed ideas into successful digital products</p>
        </div>
      </section>
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;