import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaWhatsapp, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { COMPANY_INFO } from '../../utils/constants';
import '../../styles/ctastrip.css';

const CTAStrip = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/jackie-mohanty2012/30min', '_blank');
  };

  return (
    <section className="cta-section-modern">
      <div className="container">
        <motion.div 
          className="cta-card-glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Ambient Glows */}
          <div className="cta-glow glow-left"></div>
          <div className="cta-glow glow-right"></div>
          
          <div className="cta-content-grid">
            {/* Left: Text Content */}
            <div className="cta-text-content">
              <div className="offer-badge">
                <span className="dot-pulse"></span>
                <span>Limited Spots Available for March</span>
              </div>
              
              <h2>
                Ready to Scale Your <br />
                <span className="text-gradient-gold">Digital Empire?</span>
              </h2>
              
              <p>
                Join 50+ successful founders who built their legacy with Lexa. 
                Book a <b>Free 30-Minute Technical Strategy Session</b> to map out your roadmap.
              </p>

              <div className="benefits-list">
                <div className="benefit-item"><FaCheckCircle className="check-gold" /> Free Architecture Review</div>
                <div className="benefit-item"><FaCheckCircle className="check-gold" /> Cost Estimation</div>
                <div className="benefit-item"><FaCheckCircle className="check-gold" /> No Obligation</div>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="cta-actions-col">
              <div className="action-box">
                <span className="value-tag">Value: $500 (FREE)</span>
                
                <button className="btn-shimmer-gold" onClick={openCalendly}>
                  <FaCalendarAlt /> Schedule Strategy Call
                </button>
                
                <div className="divider-or"><span>OR</span></div>
                
                <button 
                  className="btn-outline-light"
                  onClick={() => window.open(COMPANY_INFO.whatsappLink, '_blank')}
                >
                  <FaWhatsapp /> Chat on WhatsApp <FaArrowRight className="arrow-move" />
                </button>
                
                <p className="micro-copy">
                  *Direct access to our CTO. No sales agents.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAStrip;