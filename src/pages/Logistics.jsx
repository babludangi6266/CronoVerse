import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTruckMoving, FaRoute, FaBoxOpen, FaWarehouse, 
  FaMapMarkedAlt, FaBarcode, FaShip, FaPlaneDeparture 
} from 'react-icons/fa';
import CTAStrip from '../components/sections/CTAStrip'; 
import '../styles/logistics.css';

const Logistics = () => {
  
  return (
    <div className="logistics-wrapper">
      
      {/* --- HERO SECTION: GLOBAL NETWORK --- */}
      <section className="log-hero">
        <div className="container hero-split-log">
          
          <motion.div 
            className="log-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="log-badge">
              <FaGlobeAmericas /> Global Supply Chain
            </div>
            <h1>
              Move Faster. <br />
              <span className="text-orange">Track Smarter.</span>
            </h1>
            <p className="log-sub">
              End-to-end logistics software that optimizes routes, manages fleets, 
              and provides real-time visibility from the warehouse to the doorstep.
            </p>
            
            <div className="log-metrics">
              <div className="metric">
                <span className="val">30%</span>
                <span className="lbl">Fuel Savings</span>
              </div>
              <div className="metric-sep"></div>
              <div className="metric">
                <span className="val">Real-Time</span>
                <span className="lbl">Tracking</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="log-hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Map / Tracking Visualization */}
            <div className="tracking-map-card">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Logistics Map" 
                className="map-bg"
              />
              {/* Floating Status Cards */}
              <div className="float-status truck-status">
                <FaTruckMoving className="icon-orange" />
                <div>
                  <strong>Fleet #204</strong>
                  <span>On Route • 15 mins away</span>
                </div>
              </div>
              <div className="float-status ship-status">
                <FaShip className="icon-blue" />
                <div>
                  <strong>Cargo Ship A</strong>
                  <span>Docked at Mumbai</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FEATURE GRID --- */}
      <section className="log-features">
        <div className="container">
          <div className="section-header-log">
            <h2>The <span className="text-orange">Connected Chain</span></h2>
            <p>Modular solutions for Freight, Warehousing, and Last-Mile Delivery.</p>
          </div>

          <div className="log-grid">
            {/* Box 1 */}
            <motion.div className="log-card" whileHover={{ y: -10 }}>
              <div className="log-icon-box"><FaRoute /></div>
              <h3>AI Route Optimization</h3>
              <p>Reduce fuel costs and delivery times with algorithms that predict traffic and weather patterns.</p>
            </motion.div>

            {/* Box 2 */}
            <motion.div className="log-card" whileHover={{ y: -10 }}>
              <div className="log-icon-box"><FaWarehouse /></div>
              <h3>Smart Warehousing</h3>
              <p>Automated inventory management (WMS) with barcode scanning and robotic integration.</p>
            </motion.div>

            {/* Box 3 */}
            <motion.div className="log-card" whileHover={{ y: -10 }}>
              <div className="log-icon-box"><FaMapMarkedAlt /></div>
              <h3>Last-Mile Visibility</h3>
              <p>Give customers Uber-like tracking links and automated SMS updates for their deliveries.</p>
            </motion.div>

            {/* Box 4 */}
            <motion.div className="log-card" whileHover={{ y: -10 }}>
              <div className="log-icon-box"><FaBarcode /></div>
              <h3>Digital Bill of Lading</h3>
              <p>Paperless documentation and blockchain-verified smart contracts for secure freight.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BIG IMAGE SHOWCASE --- */}
      <section className="log-showcase">
        <div className="container showcase-split">
          <div className="showcase-img-box">
             <img src="https://images.unsplash.com/photo-1669003154621-c7599510ae25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdhcmVob3VzZSUyMGRyb25lfGVufDB8fDB8fHww?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Warehouse Drone" />
             <div className="tech-overlay">
               <span><FaBoxOpen /> Auto-Sorting Enabled</span>
             </div>
          </div>
          <div className="showcase-content">
            <h2>Automate the <span className="text-orange">Heavy Lifting.</span></h2>
            <p>
              From drone-assisted inventory checks to automated dispatch systems, 
              we build the technology that powers the world's most efficient supply chains.
            </p>
            <div className="mode-icons">
               <div className="mode"><FaTruckMoving /> Road</div>
               <div className="mode"><FaShip /> Sea</div>
               <div className="mode"><FaPlaneDeparture /> Air</div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
};

// Helper Icon for Badge
const FaGlobeAmericas = () => <span>🌍</span>;

export default Logistics;