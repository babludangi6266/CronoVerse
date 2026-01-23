import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, FaClock, FaGlobeAmericas, FaLaptopCode, 
  FaPaintBrush, FaBullhorn, FaCopy, FaCheckCircle, FaEnvelope 
} from 'react-icons/fa';
import { COMPANY_INFO } from '../utils/constants'; // Ensure this path is correct
import '../styles/careers.css';

const Careers = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const benefits = [
    { icon: <FaClock />, title: "The 6-4 System", desc: "6 Hours/Day. 4 Days/Week. We value output, not hours." },
    { icon: <FaGlobeAmericas />, title: "Remote First", desc: "Work from anywhere. Your desk, a cafe, or the beach." },
    { icon: <FaRocket />, title: "Rapid Growth", desc: "No corporate ladders. Just pure skill-based progression." },
  ];

  const jobs = [
    {
      title: "Full Stack Developer",
      type: "Remote | Full-Time",
      icon: <FaLaptopCode />,
      tags: ["React.js", "Node.js", "MongoDB", "AWS", "Payment Gateways"]
    },
    {
      title: "UI/UX Product Designer",
      type: "Remote | Contract",
      icon: <FaPaintBrush />,
      tags: ["Figma", "Prototyping", "Design Systems"]
    },
    {
      title: "Growth Marketing Manager",
      type: "Remote | Part-Time",
      icon: <FaBullhorn />,
      tags: ["SEO", "Content Strategy", "Analytics"]
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
              We are replacing the outdated 9-to-5 with a culture built on freedom, 
              responsibility, and meaningful contribution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CULTURE / BENEFITS --- */}
      <section className="culture-section">
        <div className="container">
          <div className="benefits-grid">
            {benefits.map((item, index) => (
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

          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-header">
                  <div className="job-icon-box">{job.icon}</div>
                  <div>
                    <h3>{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                </div>
                <div className="job-tags">
                  {job.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
                {/* Visual "Apply" Button that scrolls to contact */}
                <button className="btn-apply-dummy" onClick={() => document.getElementById('apply-area').scrollIntoView({behavior: 'smooth'})}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPLICATION AREA (EMAIL) --- */}
      <section id="apply-area" className="apply-section">
        <div className="container">
          <motion.div 
            className="apply-box"
            whileHover={{ scale: 1.02 }}
          >
            <div className="apply-content">
              <h2>Ready to Apply?</h2>
              <p>
                We don't use complex forms. We value your work. <br/>
                Send us your <strong>Resume</strong> and links to your <strong>Best Projects</strong> directly.
              </p>
              
              <div className="email-display-wrapper">
                <div className="email-box">
                  <FaEnvelope className="env-icon"/>
                  <a href={`mailto:${COMPANY_INFO.email}?subject=Application for [Role Name] - [Your Name]`}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
                
                <button className="copy-btn" onClick={handleCopyEmail}>
                  {copied ? <FaCheckCircle className="text-green"/> : <FaCopy />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="tip-box">
                <strong>💡 Tip:</strong> Subject line should be "Application for [Role Name] - [Your Name]"
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Careers;