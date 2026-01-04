
import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../utils/constants'; 
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import '../../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* --- BACKGROUND VIDEO --- */}
      <div className="video-bg">
        <video autoPlay loop muted playsInline className="video-element">
           {/* Ensure this path is correct in your project */}
           <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable */}
        <div className="overlay"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="container hero-content">
        
        {/* Animated Text Block */}
        <motion.div 
          className="text-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Small Tagline */}
          <span className="tagline">India’s Fastest Software Delivery Company</span>

          {/* Main Headline */}
          <h1 className="hero-title">
            Define Your Era<br />
            <span className="text-gradient">Elevate Your Brand.</span>
          </h1>

          {/* Business-Friendly Subtext */}
          <p className="hero-description">
            A digital revolution is here. Lexa Technologies bridges the gap between complex code and human culture.
            We build the platforms where tomorrow’s communities thrive .
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.open(COMPANY_INFO.whatsappLink)}>
              Start Your Project <FaArrowRight />
            </button>
            
          </div>

          {/* Trust/Social Proof (Optional Text at bottom) */}
          <div className="trust-text">
            <p>Trusted by forward-thinking companies across India.</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;