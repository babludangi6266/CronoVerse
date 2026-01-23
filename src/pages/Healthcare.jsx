import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeartbeat, FaUserMd, FaHospital, FaNotesMedical, 
  FaShieldAlt, FaTablets, FaDna, FaMicroscope 
} from 'react-icons/fa';
import CTAStrip from '../components/sections/CTAStrip'; 
import '../styles/healthcare.css';

const Healthcare = () => {
  
  const solutions = [
    {
      icon: <FaHospital />,
      title: "Next-Gen HIMS",
      desc: "Hospital Information Management Systems that streamline patient admission, billing, and discharge flows."
    },
    {
      icon: <FaUserMd />,
      title: "Telemedicine Platforms",
      desc: "White-label virtual clinic apps with HD video consultations, e-prescriptions, and appointment scheduling."
    },
    {
      icon: <FaDna />,
      title: "Genomic Data Analytics",
      desc: "AI-powered platforms for processing and visualizing complex genomic sequencing data."
    },
    {
      icon: <FaNotesMedical />,
      title: "Interoperable EHR/EMR",
      desc: "Centralized patient records complying with HL7/FHIR standards for seamless data exchange."
    },
    {
      icon: <FaTablets />,
      title: "IoMT Integration",
      desc: "Connecting medical devices (wearables, pacemakers) to cloud dashboards for real-time monitoring."
    },
    {
      icon: <FaMicroscope />,
      title: "AI Diagnostics",
      desc: "Machine learning models that assist radiologists by detecting anomalies in X-rays and MRI scans."
    }
  ];

  return (
    <div className="health-wrapper">
      
      {/* --- HERO SECTION: BIO-DIGITAL --- */}
      <section className="health-hero">
        <div className="pulse-circle c1"></div>
        <div className="pulse-circle c2"></div>
        
        <div className="container hero-content-health">
          <motion.div 
            className="hero-txt-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="health-badge">
              <FaHeartbeat className="beat-icon" /> HealthTech 4.0
            </div>
            <h1>
              Care Without <br />
              <span className="text-cyan">Boundaries.</span>
            </h1>
            <p className="hero-desc">
              We engineer HIPAA-compliant software that bridges the gap between 
              patient care and digital efficiency. From remote diagnostics to AI-driven insights.
            </p>
            <div className="compliance-row">
              <span>HIPAA Compliant</span>
              <span className="divider">/</span>
              <span>HL7 Standards</span>
              <span className="divider">/</span>
              <span>GDPR Secure</span>
            </div>
          </motion.div>

          <motion.div 
            className="hero-img-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Abstract Medical UI Overlay */}
            <div className="medical-interface">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Research" 
                className="base-img"
              />
              <div className="ui-overlay-card vitals-card">
                <div className="ui-header">Patient Vitals</div>
                <div className="vital-row">
                  <span>Heart Rate</span>
                  <span className="vital-val text-cyan">72 BPM</span>
                </div>
                <div className="vital-graph-line"></div>
              </div>
              <div className="ui-overlay-card scan-card">
                <FaShieldAlt className="shield-icon"/> Data Encrypted
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- INTERACTIVE SOLUTIONS GRID --- */}
      <section className="health-solutions">
        <div className="container">
          <div className="section-header-modern">
            <h2>The <span className="text-cyan">Digital Hospital</span></h2>
            <p>End-to-end digital infrastructure for modern healthcare providers.</p>
          </div>

          <div className="health-grid">
            {solutions.map((item, index) => (
              <motion.div 
                key={index} 
                className="health-card"
                whileHover={{ translateY: -10, boxShadow: "0 20px 40px -10px rgba(6, 182, 212, 0.3)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="card-line"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURE SPOTLIGHT: TELEMEDICINE --- */}
      <section className="telemed-section">
        <div className="container split-layout-health">
          <div className="tele-visual">
            <img 
              src="https://images.unsplash.com/photo-1749044071257-ca1e6783cabc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fERvY3RvciUyMFRhYmxldHxlbnwwfHwwfHx8MA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Doctor Tablet" 
            />
            <div className="connection-badge">
              <span className="dot-live"></span> Live Consultation
            </div>
          </div>
          <div className="tele-content">
            <h2>Virtual Care.<br /><span className="text-cyan">Real Connections.</span></h2>
            <p>
              Expand your clinic's reach beyond physical walls. Our custom Telemedicine architectures ensure HD video stability even in low-bandwidth areas.
            </p>
            <ul className="health-checklist">
              <li>End-to-End Encrypted Video Calls</li>
              <li>Integrated e-Prescription Engine</li>
              <li>Automated Appointment Reminders</li>
              <li>Secure Payment Gateways</li>
            </ul>
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
};

export default Healthcare;