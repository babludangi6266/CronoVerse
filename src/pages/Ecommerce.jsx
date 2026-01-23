import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShoppingBag, FaRocket, FaMobileAlt, FaBrain, 
  FaCreditCard, FaSearchDollar, FaChartLine, FaBoxOpen 
} from 'react-icons/fa';
import CTAStrip from '../components/sections/CTAStrip';
import '../styles/ecommerce.css';

const Ecommerce = () => {
  
  return (
    <div className="ecom-wrapper">
      
      {/* --- HERO SECTION: CENTERED & IMMERSIVE --- */}
      <section className="ecom-hero">
        <div className="bg-spotlight spotlight-1"></div>
        <div className="bg-spotlight spotlight-2"></div>
        
        <div className="container hero-centered">
          <motion.div 
            className="hero-badge-pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaRocket /> Next-Gen Retail
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Convert Traffic into <br />
            <span className="text-gradient-purple">Revenue Engines.</span>
          </motion.h1>

          <motion.p 
            className="hero-sub-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We build Headless, Omnichannel, and AI-driven commerce platforms 
            designed for speed, scale, and maximum conversion.
          </motion.p>

          {/* Abstract Dashboard Visual */}
          <motion.div 
            className="hero-dashboard-visual"
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
             <div className="glass-panel">
               <div className="panel-header">
                 <div className="dots"><span className="red"></span><span className="yellow"></span><span className="green"></span></div>
                 <div className="panel-title">Live Store Analytics</div>
               </div>
               <div className="panel-body">
                 <div className="metric-box">
                   <span className="label">Active Users</span>
                   <span className="value">12,450</span>
                   <span className="trend up">+14% <FaChartLine /></span>
                 </div>
                 <div className="metric-box highlight">
                   <span className="label">Conversion Rate</span>
                   <span className="value">4.8%</span>
                   <span className="trend up">+2.1% <FaChartLine /></span>
                 </div>
                 <div className="metric-box">
                   <span className="label">Avg Order Value</span>
                   <span className="value">$85.00</span>
                   <span className="trend">Stable</span>
                 </div>
               </div>
               {/* Decorative floating elements */}
               <div className="float-icon icon-bag"><FaShoppingBag /></div>
               <div className="float-icon icon-card"><FaCreditCard /></div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- SCROLLING TECH TICKER --- */}
      <section className="tech-ticker-strip">
        <div className="ticker-track">
          <span>Shopify Plus</span> • <span>Magento</span> • <span>WooCommerce</span> • <span>Stripe</span> • <span>Next.js Commerce</span> • <span>Algolia</span> • <span>Shopify Plus</span> • <span>Magento</span> • <span>WooCommerce</span> • <span>Stripe</span>
        </div>
      </section>

      {/* --- BENTO GRID SOLUTIONS --- */}
      <section className="ecom-solutions">
        <div className="container">
          <div className="section-header-left">
            <h2>Retail <span className="text-purple">Redefined.</span></h2>
            <p>Modular solutions for the modern merchant.</p>
          </div>

          <div className="ecom-bento-grid">
            {/* Box 1: Headless */}
            <motion.div className="bento-box box-large purple-glow" whileHover={{ y: -5 }}>
              <FaMobileAlt className="box-icon" />
              <h3>Headless Commerce</h3>
              <p>Decoupled frontends built with React/Next.js for lightning-fast page loads and complete design freedom.</p>
            </motion.div>

            {/* Box 2: AI */}
            <motion.div className="bento-box box-tall dark-glass" whileHover={{ y: -5 }}>
              <FaBrain className="box-icon color-pink" />
              <h3>AI Personalization</h3>
              <p>Smart product recommendation engines that adapt to user behavior in real-time to boost AOV.</p>
            </motion.div>

            {/* Box 3: Search */}
            <motion.div className="bento-box box-std" whileHover={{ y: -5 }}>
              <FaSearchDollar className="box-icon color-blue" />
              <h3>Smart Search</h3>
              <p>Typo-tolerant, instant search (Algolia/Elastic) that guides users to purchase.</p>
            </motion.div>

            {/* Box 4: Inventory */}
            <motion.div className="bento-box box-std" whileHover={{ y: -5 }}>
              <FaBoxOpen className="box-icon color-yellow" />
              <h3>Inventory Sync</h3>
              <p>Real-time synchronization across web, mobile, and physical POS systems.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FEATURE HIGHLIGHT: MOBILE FIRST --- */}
      <section className="mobile-first-section">
        <div className="container split-feature">
          <div className="feature-text">
            <h2>Shop Anywhere.<br /> <span className="text-pink">Sell Everywhere.</span></h2>
            <p>
              The customer journey is no longer linear. We build <strong>Progressive Web Apps (PWAs)</strong> and native mobile experiences that allow customers to shop seamlessly across devices.
            </p>
            <ul className="check-list-purple">
              <li><FaCheckCircle className="chk-icon" /> One-Click Checkout</li>
              <li><FaCheckCircle className="chk-icon" /> Social Media Integration</li>
              <li><FaCheckCircle className="chk-icon" /> Push Notifications for Retargeting</li>
            </ul>
          </div>
          <div className="feature-visual">
             <div className="mobile-mockup">
               <div className="screen-content">
                 <div className="app-header"></div>
                 <div className="app-hero"></div>
                 <div className="app-grid">
                   <span></span><span></span><span></span><span></span>
                 </div>
               </div>
             </div>
             <div className="circle-bg"></div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
};

// Simple Icon component for the list
const FaCheckCircle = ({ className }) => <span className={className}>✔</span>;

export default Ecommerce;