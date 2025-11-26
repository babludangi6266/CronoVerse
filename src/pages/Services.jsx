import React from 'react';
import ServicesSection from '../components/sections/Services'; // The component we just built
import TechStack from '../components/sections/TechStack';
import Contact from '../components/sections/Contact';

const Services = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
         <div className="container">
           <h1>Our Expertise</h1>
           <p>Future-proof digital solutions for modern businesses.</p>
         </div>
      </div>
      <ServicesSection />
      <TechStack />
      <Contact />
    </div>
  );
};

export default Services;