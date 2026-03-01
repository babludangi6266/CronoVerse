import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaServer, FaCogs, FaArrowRight, FaChevronLeft , FaChevronRight } from 'react-icons/fa';
import '../styles/industries.css';

const IndustriesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const industriesData = [
    {
      id: 'fintech',
      title: 'FinTech & Banking',
      desc: 'Secure, scalable platforms for the future of finance. We build systems that handle high-frequency transactions with bank-grade security and zero downtime.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      path: '/industries/fintech'
    },
    {
      id: 'agritech',
      title: 'AgriTech Solutions',
      desc: 'Transforming agriculture with data-driven tech. Monitor crop health, optimize supply chains, and predict yields using smart IoT integrations.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      path: '/industries/agritech'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce & Retail',
      desc: 'High-conversion, blazing-fast digital storefronts. We build headless commerce platforms capable of handling massive traffic spikes effortlessly.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      path: '/industries/ecommerce'
    },
    {
      id: 'healthcare',
      title: 'Healthcare IT',
      desc: 'Digitizing patient care with zero compromises on privacy. Engineering HIPAA-compliant telemedicine portals and secure hospital management systems.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      path: '/industries/healthcare'
    },
    {
      id: 'edtech',
      title: 'EdTech Platforms',
      desc: 'Redefining how the world learns. Scalable Learning Management Systems (LMS), live virtual classrooms, and interactive education apps.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      path: '/industries/edtech'
    },
    {
      id: 'logistics',
      title: 'Logistics & Supply',
      desc: 'Bring visibility to chaotic supply chains. Real-time fleet tracking dashboards, automated warehouse software, and AI route optimization.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      path: '/industries/logistics'
    }
  ];


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industriesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industriesData.length) % industriesData.length);
  };

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industriesData.length);
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(timer);
  }, [industriesData.length]);

  return (
    <div className="lexa-ind-page">
      
      {/* --- FULL WIDTH HERO SLIDER --- */}
      <section className="lexa-hero-slider">
        <button className="lexa-slider-arrow left-arrow" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="lexa-slider-arrow right-arrow" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="lexa-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Background Image */}
            <img 
              src={industriesData[currentIndex].image} 
              alt={industriesData[currentIndex].title} 
              className="lexa-slide-bg"
            />
            
            {/* Dark Gradient Overlay for text readability */}
            <div className="lexa-slide-overlay"></div>

            {/* Slide Content */}
            <div className="container lexa-slide-content-wrapper">
              <motion.div 
                className="lexa-slide-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="lexa-ind-badge">Industries We Empower</span>
                <h1>{industriesData[currentIndex].title}</h1>
                <p>{industriesData[currentIndex].desc}</p>
                
                <Link to={industriesData[currentIndex].path} className="lexa-slide-btn">
                  Explore {industriesData[currentIndex].title} <FaArrowRight className="arrow-icon"/>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Navigation Dots */}
        <div className="lexa-slider-dots">
          {industriesData.map((_, index) => (
            <div 
              key={index} 
              className={`lexa-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </section>

      {/* --- AESTHETIC FEATURES SECTION --- */}
      <section className="lexa-ind-features-aesthetic">
        <div className="container">
          <div className="lexa-feat-header">
            <h2>Built for Scale.<br/>Engineered for Security.</h2>
            <p>We don't just write code; we solve complex industry problems.</p>
          </div>
          
          <div className="lexa-feat-cards">
            <motion.div className="lexa-glass-card" whileHover={{ y: -10 }}>
              <div className="glass-icon-wrapper"><FaShieldAlt /></div>
              <h4>Enterprise Security</h4>
              <p>Bank-grade encryption, HIPAA & GDPR compliance built into the core architecture of every product.</p>
            </motion.div>
            
            <motion.div className="lexa-glass-card" whileHover={{ y: -10 }}>
              <div className="glass-icon-wrapper"><FaServer /></div>
              <h4>Infinite Scalability</h4>
              <p>Cloud-native solutions designed on AWS to handle traffic spikes from 100 to 1,000,000 users effortlessly.</p>
            </motion.div>

            <motion.div className="lexa-glass-card" whileHover={{ y: -10 }}>
              <div className="glass-icon-wrapper"><FaCogs /></div>
              <h4>Seamless Integration</h4>
              <p>Custom API development to connect your new software with your legacy systems without data loss.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- AESTHETIC CTA SECTION --- */}
      <section className="lexa-ind-cta-aesthetic">
        <div className="lexa-cta-mesh-bg"></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <motion.div 
            className="lexa-cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to dominate your industry?</h2>
            <p>Let’s discuss how custom software can give you a massive competitive advantage.</p>
            <Link to="/contact" className="lexa-btn-glow">
              Start Your Digital Transformation <FaArrowRight style={{marginLeft: '10px'}}/>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;