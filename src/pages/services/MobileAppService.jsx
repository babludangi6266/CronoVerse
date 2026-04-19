import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaCheckCircle, FaApple, FaAndroid, FaFingerprint, FaWifi, FaArrowRight } from 'react-icons/fa';
import Contact from '../../components/sections/Contact';
import '../../styles/serviceDetails.css';

const MobileAppService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: <FaApple />, title: "Cross-Platform Frameworks", desc: "Write once, deploy everywhere. We use React Native and Flutter for cost-effective development." },
    { icon: <FaFingerprint />, title: "Native Device APIs", desc: "Deep integration with FaceID, TouchID, GPS, Camera, and Bluetooth peripherals." },
    { icon: <FaWifi />, title: "Offline-First Sync", desc: "Apps that work flawlessly on airplanes or in remote areas, syncing data once reconnected." },
    { icon: <FaAndroid />, title: "App Store Optimization", desc: "We handle the entire deployment process to the Apple App Store and Google Play Store." }
  ];

  return (
    <div className="srv-detail-wrapper">
      
      <section className="srv-detail-hero">
        <div className="srv-detail-bg">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Mobile App Usage" />
          <div className="srv-detail-overlay"></div>
        </div>
        
        <div className="srv-detail-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="srv-detail-text">
            <div className="srv-hero-pill" style={{borderColor: '#F97316', color: '#F97316', padding: '8px 16px', borderRadius: '50px', border: '1px solid', display: 'inline-block', marginBottom: '20px'}}>
              <FaMobileAlt style={{marginRight: '8px'}}/> iOS & Android
            </div>
            <h1>Mobile App <span className="theme-orange">Engineering</span></h1>
            <p>Reach customers on iOS and Android simultaneously. We deliver native 60fps experiences with stunning, thumb-friendly UI/UX.</p>
            <button className="srv-btn-primary bg-theme-orange" onClick={() => window.scrollTo(0, 900)} style={{padding: '15px 30px', border: 'none', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 'bold'}}>
              Start Mobile Project <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="srv-value-section">
        <div className="srv-split-val">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Apps users <span className="theme-orange">refuse to delete.</span></h2>
            <p style={{color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px'}}>
              A great mobile app isn't just a website stuffed into a smaller screen. It requires specific architectural decisions regarding memory management, battery consumption, and touch gestures. We build apps that feel inherently native and fluid.
            </p>
            <ul className="srv-check-list">
              <li><FaCheckCircle className="theme-orange"/> 60FPS Fluid Animations</li>
              <li><FaCheckCircle className="theme-orange"/> Secure Payment Gateway Integrations</li>
              <li><FaCheckCircle className="theme-orange"/> Rich Push Notification Engines</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            {/* CSS Mock Mobile Phone */}
            <div className="mock-mobile-frame">
              <div className="m-mobile-notch"></div>
              <div className="m-mobile-block m-mb-1"></div>
              <div className="m-mobile-block m-mb-2"></div>
              <div className="m-mobile-block m-mb-3"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="srv-features-grid-sec">
        <div className="srv-detail-content">
          <h2 style={{textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem'}}>Mobile <span className="theme-orange">Capabilities</span></h2>
          <div className="srv-f-grid">
            {features.map((feat, i) => (
              <motion.div key={i} className="srv-f-card" style={{borderColor: 'rgba(249,115,22,0.1)'}} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{delay: i * 0.1}}>
                <div className="srv-f-icon theme-orange">{feat.icon}</div>
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

export default MobileAppService;