import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCheckCircle, FaFigma, FaUsers, FaUniversalAccess, FaPalette, FaArrowRight } from 'react-icons/fa';
import Contact from '../../components/sections/Contact';
import '../../styles/serviceDetails.css';

const UiUxDesignService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: <FaUsers />, title: "User Journey Mapping", desc: "We study your target demographic to map out intuitive navigation flows that eliminate friction." },
    { icon: <FaFigma />, title: "Interactive Prototyping", desc: "Clickable, high-fidelity Figma prototypes so you can experience the app before a single line of code is written." },
    { icon: <FaPalette />, title: "Design Systems", desc: "Comprehensive component libraries (buttons, typography, colors) ensuring brand consistency." },
    { icon: <FaUniversalAccess />, title: "WCAG Accessibility", desc: "Designs engineered to be inclusive, meeting strict web accessibility contrast and scaling standards." }
  ];

  return (
    <div className="srv-detail-wrapper">
      <section className="srv-detail-hero">
        <div className="srv-detail-bg">
          <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="UI Design Canvas" />
          <div className="srv-detail-overlay"></div>
        </div>
        
        <div className="srv-detail-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="srv-detail-text">
            <div className="srv-hero-pill" style={{borderColor: '#EC4899', color: '#EC4899', padding: '8px 16px', borderRadius: '50px', border: '1px solid', display: 'inline-block', marginBottom: '20px'}}>
              <FaPaintBrush style={{marginRight: '8px'}}/> Digital Aesthetics
            </div>
            <h1>UI/UX & <span className="theme-pink">Product Design</span></h1>
            <p>We don't start with code; we start with empathy. We build conversion-driven interfaces that users instinctively know how to navigate.</p>
            <button className="srv-btn-primary bg-theme-pink" onClick={() => window.scrollTo(0, 900)} style={{padding: '15px 30px', border: 'none', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 'bold'}}>
              View Design Portfolio <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="srv-value-section">
        <div className="srv-split-val">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Pixels with a <span className="theme-pink">Purpose.</span></h2>
            <p style={{color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px'}}>
              A beautiful interface means nothing if the user gets lost. Our UX researchers and UI artists collaborate to build products that are visually stunning and psychologically engineered to drive conversions, sign-ups, and sales.
            </p>
            <ul className="srv-check-list">
              <li><FaCheckCircle className="theme-pink"/> High-Fidelity Figma Prototypes</li>
              <li><FaCheckCircle className="theme-pink"/> Conversion Rate Optimization (CRO)</li>
              <li><FaCheckCircle className="theme-pink"/> Custom Isometric & 3D Illustrations</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            {/* CSS Mock Design Canvas */}
            <div className="mock-ui-canvas">
              <div className="m-ui-tools">
                <div className="m-tool-dot"></div>
                <div className="m-tool-dot active"></div>
                <div className="m-tool-dot"></div>
                <div className="m-tool-dot"></div>
              </div>
              <div className="m-ui-board">
                <div className="m-ui-wire-hero"></div>
                <div className="m-ui-wire-grid">
                  <div className="m-ui-wire-card"></div>
                  <div className="m-ui-wire-card"></div>
                </div>
                <div className="m-ui-cursor"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="srv-features-grid-sec">
        <div className="srv-detail-content">
          <h2 style={{textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem'}}>Design <span className="theme-pink">Philosophy</span></h2>
          <div className="srv-f-grid">
            {features.map((feat, i) => (
              <motion.div key={i} className="srv-f-card" style={{borderColor: 'rgba(236,72,153,0.1)'}} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{delay: i * 0.1}}>
                <div className="srv-f-icon theme-pink">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default UiUxDesignService;