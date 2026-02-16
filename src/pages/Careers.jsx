import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link
import { 
  FaRocket, FaClock, FaGlobeAmericas, FaLaptopCode, 
  FaPaintBrush, FaBullhorn, FaVideo, FaHandshake, FaPenNib, 
  FaMobileAlt, FaCheckCircle, FaArrowRight, FaChevronDown 
} from 'react-icons/fa';
import { COMPANY_INFO } from '../utils/constants'; 
import '../styles/careers.css';

const Careers = () => {
  const [activeRole, setActiveRole] = useState(null);

  const culturePoints = [
    { icon: <FaClock />, title: "The 6-4 System", desc: "6 Hours/Day. 4 Days/Week. We value output, not hours." },
    { icon: <FaGlobeAmericas />, title: "Remote First", desc: "Work from anywhere. No clock-ins. No micromanagement." },
    { icon: <FaRocket />, title: "Performance Pay", desc: "No fixed caps. Revenue share & project-based payouts." },
  ];

  const roles = [
    {
      id: 1,
      title: "Social Media Content Creator (On-Camera)",
      icon: <FaVideo />,
      tagline: "Not posts. Not noise. Real content.",
      whatYouDo: ["Create short-form & long-form content", "Translate tech ideas into clarity", "Build brand voice across platforms"],
      compensation: "Performance-based payouts + Growth incentives",
      assessment: "Create 2 LinkedIn posts explaining why fast software delivery matters for businesses."
    },
    {
      id: 2,
      title: "Business Development Executive",
      icon: <FaHandshake />,
      tagline: "Sell value. Not hours.",
      whatYouDo: ["Identify & close high-quality clients", "Sell outcomes, not features", "Build long-term relationships"],
      compensation: "Deal-based revenue share + No cap commissions",
      assessment: "Draft a simple outreach message to a startup founder explaining LEXA’s value in under 150 words."
    },
    {
      id: 3,
      title: "Video Editor",
      icon: <FaPaintBrush />,
      tagline: "Edit for clarity. Not just cuts.",
      whatYouDo: ["Edit short-form & long-form videos", "Craft storytelling through motion", "Maintain brand visual consistency"],
      compensation: "Project-based payouts + Long-term alignment",
      assessment: "Edit a 30–60 sec video explaining a tech concept (sample provided or self-shot)."
    },
    {
      id: 4,
      title: "Content Writer / Strategist",
      icon: <FaPenNib />,
      tagline: "Words that move decisions.",
      whatYouDo: ["Write strategic content (LinkedIn, blogs)", "Build positioning & narratives", "Simplify complex tech ideas"],
      compensation: "Performance-linked pay + Strategy incentives",
      assessment: "Write a 300-word LinkedIn article positioning LEXA as a delivery-first tech company."
    },
    {
      id: 5,
      title: "Full-Stack Web Developer",
      icon: <FaLaptopCode />,
      tagline: "Build fast. Ship faster.",
      whatYouDo: ["Build production-ready web apps", "Optimize for speed & scalability", "Own features end-to-end"],
      compensation: "Project-based payouts + Performance incentives",
      assessment: "Build a simple feature/module (spec provided) with clean logic and documentation."
    },
    {
      id: 6,
      title: "Mobile App Developer (Android/iOS)",
      icon: <FaMobileAlt />,
      tagline: "Apps in days. Not months.",
      whatYouDo: ["Build Android / iOS apps", "Ship MVPs & scalable products", "Focus on performance & UX"],
      compensation: "Project-based earnings + Growth-aligned payouts",
      assessment: "Build a small functional screen or flow (Android/iOS) based on a real use case."
    }
  ];

  return (
    <div className="careers-page-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="careers-hero">
        <div className="glow-bg glow-1"></div>
        <div className="container hero-content-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hiring-badge">We Are Hiring</span>
            <h1>
              Don't Just Get a Job. <br />
              <span className="text-gradient-green">Join the Revolution.</span>
            </h1>
            <p className="hero-sub">
              This is a new SaaS startup experience. No interviews. No resume judgments. 
              Only skill & contribution. If you believe work should adapt to human energy, 
              LEXA is for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CULTURE / MODEL --- */}
      <section className="culture-section">
        <div className="container">
          <div className="benefits-grid">
            {culturePoints.map((item, index) => (
              <motion.div 
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="ben-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OPEN POSITIONS --- */}
      <section className="jobs-section">
        <div className="container">
          <div className="section-header-left">
            <h2>Open Roles</h2>
            <p>Find your place in the new era.</p>
          </div>

          <div className="jobs-list">
            {roles.map((role) => (
              <div 
                key={role.id} 
                className={`job-row ${activeRole === role.id ? 'active' : ''}`}
                onClick={() => setActiveRole(activeRole === role.id ? null : role.id)}
              >
                {/* Header Line */}
                <div className="job-row-header">
                  <div className="job-title-group">
                    <div className="job-icon">{role.icon}</div>
                    <div>
                      <h3>{role.title}</h3>
                      <span className="job-tagline">{role.tagline}</span>
                    </div>
                  </div>
                  <FaChevronDown className={`arrow-icon ${activeRole === role.id ? 'rotate' : ''}`} />
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {activeRole === role.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="job-details"
                    >
                      <div className="details-grid">
                        <div className="detail-col">
                          <h4>What You'll Do</h4>
                          <ul>
                            {role.whatYouDo.map((item, i) => <li key={i}><FaCheckCircle className="check-icon"/> {item}</li>)}
                          </ul>
                        </div>
                        <div className="detail-col">
                          <h4>Compensation</h4>
                          <p className="comp-text">{role.compensation}</p>
                          
                          <div className="assessment-box">
                            <h4>Assessment Task (Replaces Interview)</h4>
                            <p>{role.assessment}</p>
                          </div>
                          
                          <button 
                            className="btn-apply-green" 
                            onClick={(e) => {
                              e.stopPropagation();
                              document.getElementById('apply-area').scrollIntoView({behavior: 'smooth'});
                            }}
                          >
                            Apply for this Role <FaArrowRight />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UPDATED APPLICATION AREA --- */}
      <section id="apply-area" className="apply-section">
        <div className="container">
          <motion.div 
            className="apply-box"
            whileHover={{ scale: 1.01 }}
          >
            <div className="apply-content">
              <h2>Ready to Apply?</h2>
              <p>
                We don't use complex forms. We value your work. <br/>
                Complete your profile and submit your <strong>Assessment Task</strong> directly on our portal.
              </p>
              
              <div style={{marginTop: '30px'}}>
                <Link to="/portal/register" className="btn btn-primary" style={{padding: '15px 40px', fontSize: '1.1rem'}}>
                  Start Application / Register <FaArrowRight style={{marginLeft: '10px'}}/>
                </Link>
              </div>

              <div className="tip-box" style={{marginTop: '30px'}}>
                <strong>💡 Note:</strong> You will need to upload a link to your work (Google Drive/GitHub) during registration.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Careers;