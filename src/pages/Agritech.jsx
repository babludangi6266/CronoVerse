import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLeaf, FaTractor, FaSatellite, FaCloudSun, 
  FaMobileAlt, FaDatabase, FaSeedling, FaNetworkWired 
} from 'react-icons/fa';
import CTAStrip from '../components/sections/CTAStrip'; // Adjust path to where you saved CTAStrip
import '../styles/agritech.css';

const Agritech = () => {
  
  const features = [
    {
      icon: <FaSatellite />,
      title: "Precision Farming (IoT)",
      desc: "Real-time soil monitoring and crop health analysis using IoT sensors and satellite imagery."
    },
    {
      icon: <FaMobileAlt />,
      title: "Farmer Marketplaces",
      desc: "Direct-to-consumer platforms eliminating middlemen and ensuring fair pricing for produce."
    },
    {
      icon: <FaDatabase />,
      title: "Supply Chain Traceability",
      desc: "Blockchain-powered tracking from farm to fork, ensuring food safety and transparency."
    },
    {
      icon: <FaCloudSun />,
      title: "AI Weather Prediction",
      desc: "Hyper-local weather forecasting models to optimize irrigation and harvest schedules."
    },
    {
      icon: <FaTractor />,
      title: "Smart Automation",
      desc: "Autonomous machinery integration and drone deployment for efficient field management."
    },
    {
      icon: <FaNetworkWired />,
      title: "Agri-Finance Solutions",
      desc: "Digital credit scoring and micro-lending platforms tailored for rural economies."
    }
  ];

  return (
    <div className="agritech-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="agri-hero">
        {/* Background Glows: Green & Gold for Agri vibe */}
        <div className="bg-gradient-orb agri-orb-1"></div>
        <div className="bg-gradient-orb agri-orb-2"></div>
        
        <div className="container hero-split">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pill-green"><FaLeaf /> Smart Agriculture</span>
            <h1>
              Digitizing the <br />
              <span className="text-emerald">Roots of Economy.</span>
            </h1>
            <p className="hero-sub">
              We build intelligent AgriTech ecosystems that increase yield, reduce waste, 
              and connect farmers to global markets using AI, IoT, and Blockchain.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <h3>30%</h3>
                <p>Yield Increase</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Traceability</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Visual: Smart Plant / Drone Concept */}
            <div className="floating-card-visual">
              {/* Replace with your BG-removed image if you have one */}
              <img 
                src="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBGYXJtaW5nJTIwRHJvbmV8ZW58MHx8MHx8fDA%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Smart Farming Drone" 
                className="main-card-img"
              />
              <div className="float-badge sensor-badge">
                <FaSatellite /> Soil Moisture: 85%
              </div>
              <div className="float-badge growth-badge">
                <FaSeedling /> Crop Health: Optimal
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECH STACK STRIP --- */}
      <section className="agri-trust">
        <div className="container">
          <p className="trust-label">POWERED BY NEXT-GEN TECH</p>
          <div className="tech-logos">
            <span>IoT Sensors</span>
            <span className="dot-green"></span>
            <span>Drone Mapping</span>
            <span className="dot-green"></span>
            <span>Computer Vision</span>
            <span className="dot-green"></span>
            <span>Blockchain</span>
            <span className="dot-green"></span>
            <span>Big Data</span>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="agri-solutions">
        <div className="container">
          <div className="section-header-center">
            <h2>Harvesting <span className="text-emerald">Data & Growth</span></h2>
            <p>Empowering the agriculture sector with scalable software infrastructure.</p>
          </div>

          <div className="solutions-grid">
            {features.map((item, index) => (
              <motion.div 
                key={index} 
                className="sol-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-icon-box green-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURE HIGHLIGHT (Mobile/Drone) --- */}
      <section className="agri-feature">
        <div className="container split-feature">
          <div className="feat-visual">
             <img 
               src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Farmer with Tablet" 
             />
             <div className="grid-overlay-anim"></div>
          </div>
          <div className="feat-content">
            <h2>Data-Driven Farming.<br/>From <span className="text-emerald">Field to Phone.</span></h2>
            <p>
              Our mobile-first solutions allow farmers to monitor crops, control irrigation, 
              and sell produce instantly—all from a smartphone.
            </p>
            <ul className="feature-list">
              <li><FaMobileAlt className="li-icon-green"/> <strong>Offline-First</strong> Mobile Apps</li>
              <li><FaCloudSun className="li-icon-green"/> <strong>Real-Time</strong> Advisory Alerts</li>
              <li><FaNetworkWired className="li-icon-green"/> <strong>Seamless</strong> API Integrations</li>
              <li><FaDatabase className="li-icon-green"/> <strong>Cloud</strong> Data Storage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- CTA STRIP --- */}
      <CTAStrip />

    </div>
  );
};

export default Agritech;