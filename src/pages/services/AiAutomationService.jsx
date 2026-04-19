import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCheckCircle, FaRobot, FaProjectDiagram, FaSearch, FaArrowRight } from 'react-icons/fa';
import Contact from '../../components/sections/Contact';
import '../../styles/serviceDetails.css';

const AiAutomationService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: <FaRobot />, title: "Custom LLM Integration", desc: "We integrate models like OpenAI and Gemini directly into your platform." },
    { icon: <FaProjectDiagram />, title: "Workflow Automation", desc: "Automate repetitive data entry, email processing, and lead generation tasks." },
    { icon: <FaBrain />, title: "Predictive Analytics", desc: "Use historical data to predict sales trends and optimize inventory automatically." },
    { icon: <FaSearch />, title: "Computer Vision", desc: "Implement facial recognition, OCR for document scanning, and defect detection." }
  ];

  return (
    <div className="srv-detail-wrapper">
      
      <section className="srv-detail-hero">
        <div className="srv-detail-bg">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="AI Technology" />
          <div className="srv-detail-overlay"></div>
        </div>
        
        <div className="srv-detail-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="srv-detail-text">
            <div className="srv-hero-pill" style={{borderColor: '#A855F7', color: '#A855F7', padding: '8px 16px', borderRadius: '50px', border: '1px solid', display: 'inline-block', marginBottom: '20px'}}>
              <FaBrain style={{marginRight: '8px'}}/> Next-Gen Technology
            </div>
            <h1>AI Agents & <span className="theme-purple">Automation</span></h1>
            <p>Deploy custom LLMs, 24/7 AI customer support agents, and automated workflows to reduce operational costs by up to 80%.</p>
            <button className="srv-btn-primary bg-theme-purple" onClick={() => window.scrollTo(0, 900)} style={{padding: '15px 30px', border: 'none', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 'bold'}}>
              Discover Capabilities <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="srv-value-section">
        <div className="srv-split-val">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Work smarter, not <span className="theme-purple">harder.</span></h2>
            <p style={{color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px'}}>
              Stop wasting human potential on repetitive tasks. We build bespoke AI agents that understand your specific business context. From answering client queries instantly to generating daily operational reports without human intervention.
            </p>
            <ul className="srv-check-list">
              <li><FaCheckCircle className="theme-purple"/> 24/7 Customer Support Agents</li>
              <li><FaCheckCircle className="theme-purple"/> Automated Document Parsing & OCR</li>
              <li><FaCheckCircle className="theme-purple"/> Natural Language Database Queries</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            {/* CSS Mock AI Chat */}
            <div className="mock-ai-chat">
              <div className="m-ai-bubble m-ai-user">Show me the revenue report for Q3.</div>
              <div className="m-ai-bubble m-ai-bot">
                <strong>Lexa AI Agent:</strong><br/>
                Certainly. Q3 Revenue was $1.2M, a 15% increase from Q2. I have generated a detailed PDF and emailed it to the executive team.
              </div>
              <div className="m-ai-input"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="srv-features-grid-sec">
        <div className="srv-detail-content">
          <h2 style={{textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem'}}>Algorithmic <span className="theme-purple">Intelligence</span></h2>
          <div className="srv-f-grid">
            {features.map((feat, i) => (
              <motion.div key={i} className="srv-f-card" style={{borderColor: 'rgba(168,85,247,0.1)'}} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{delay: i * 0.1}}>
                <div className="srv-f-icon theme-purple">{feat.icon}</div>
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

export default AiAutomationService;