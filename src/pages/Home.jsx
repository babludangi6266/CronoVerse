import React from 'react';
import Hero from '../components/sections/Hero';
import LogoMarquee from '../components/sections/LogoMarquee'; // New
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials'; // New
import TechStack from '../components/sections/TechStack';
import Workflow from '../components/sections/Workflow';
import CTAStrip from '../components/sections/CTAStrip'; // New

const Home = () => {
  return (
    <>
      <Hero />
      <LogoMarquee />  {/* Adds movement immediately */}
      
      {/* Services with gray background */}
      <Services />
      
      {/* Portfolio with white background */}
      <Portfolio />
      
      {/* Workflow with dot pattern (handled in css) */}
      <Workflow />
      
      {/* Tech Stack - Clean white */}
      <TechStack />
      
      {/* Testimonials - Gray background */}
      <Testimonials />
      
      {/* High impact closer */}
      <CTAStrip />
    </>
  );
};

export default Home;