import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaWallet, FaChartLine, FaMobileAlt, 
  FaGlobe, FaLock, FaExchangeAlt, FaUniversity 
} from 'react-icons/fa';
import CTAStrip from '../components/sections/CTAStrip'; // Adjust path to where you saved CTAStrip
import '../styles/fintech.css';

const Fintech = () => {
  
  const features = [
    {
      icon: <FaWallet />,
      title: "Digital Wallets & Neobanking",
      desc: "White-label wallet solutions with KYC, QR payments, and P2P transfers built for scale."
    },
    {
      icon: <FaShieldAlt />,
      title: "Bank-Grade Security",
      desc: "PCI-DSS compliant architecture, end-to-end encryption, and AI-driven fraud detection."
    },
    {
      icon: <FaChartLine />,
      title: "Algorithmic Trading",
      desc: "Low-latency trading platforms with real-time data visualization and automated execution."
    },
    {
      icon: <FaExchangeAlt />,
      title: "Payment Gateways",
      desc: "Custom payment aggregators supporting multi-currency, crypto, and UPI integrations."
    },
    {
      icon: <FaUniversity />,
      title: "Core Banking Systems",
      desc: "Modernizing legacy banking infrastructure with scalable microservices and cloud solutions."
    },
    {
      icon: <FaGlobe />,
      title: "Cross-Border Remittance",
      desc: "Blockchain-powered settlement systems reducing transaction costs and settlement time."
    }
  ];

  return (
    <div className="fintech-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="fintech-hero">
        <div className="bg-gradient-orb orb-1"></div>
        <div className="bg-gradient-orb orb-2"></div>
        
        <div className="container hero-split">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pill-gold"><FaLock /> Secure & Scalable</span>
            <h1>
              Architecting the <br />
              <span className="text-gold">Future of Finance.</span>
            </h1>
            <p className="hero-sub">
              We build high-performance fintech solutions that bridge the gap between 
              traditional banking and the digital economy. Security, speed, and compliance — built into every line of code.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <h3>$10M+</h3>
                <p>Transactions Processed</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>99.99%</h3>
                <p>Uptime Guarantee</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Abstract visual of a floating card/app */}
            <div className="floating-card-visual">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Fintech Dashboard" 
                className="main-card-img"
              />
              <div className="float-badge card-badge">
                <FaShieldAlt /> Secure Payment
              </div>
              <div className="float-badge graph-badge">
                <FaChartLine /> +124% Growth
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY LEXA FOR FINTECH (Dark Strip) --- */}
      <section className="fintech-trust">
        <div className="container">
          <p className="trust-label">TRUSTED TECHNOLOGIES WE DEPLOY</p>
          <div className="tech-logos">
            <span>Blockchain</span>
            <span className="dot"></span>
            <span>AI Fraud Detection</span>
            <span className="dot"></span>
            <span>AWS / Azure</span>
            <span className="dot"></span>
            <span>React Native</span>
            <span className="dot"></span>
            <span>Node.js</span>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="fintech-solutions">
        <div className="container">
          <div className="section-header-center">
            <h2>Engineering <span className="text-blue">Trust & Speed</span></h2>
            <p>From Neobanks to DeFi, we deliver software that moves money instantly.</p>
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
                <div className="card-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURITY SECTION --- */}
      <section className="fintech-security">
        <div className="container split-security">
          <div className="sec-visual">
             <img 
               src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Secure Vault" 
             />
             <div className="scan-line"></div>
          </div>
          <div className="sec-content">
            <h2>Compliance is not optional.<br/>It is our <span className="text-gold">Foundation.</span></h2>
            <p>
              We ensure your platform meets global financial regulations from Day 1.
            </p>
            <ul className="compliance-list">
              <li><FaMobileAlt className="li-icon"/> <strong>PCI-DSS Certified</strong> Architecture</li>
              <li><FaLock className="li-icon"/> <strong>AES-256</strong> Data Encryption</li>
              <li><FaShieldAlt className="li-icon"/> <strong>GDPR & KYC/AML</strong> Compliance Flows</li>
              <li><FaGlobe className="li-icon"/> <strong>ISO 27001</strong> Security Standards</li>
            </ul>
          </div>
        </div>
      </section>
      <CTAStrip />

    </div>
  );
};

export default Fintech;