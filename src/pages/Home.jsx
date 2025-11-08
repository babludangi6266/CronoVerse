// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
};

export default Home;