import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaDraftingCompass, FaCode, FaRocket } from 'react-icons/fa';
import '../../styles/workflow.css';

const Workflow = () => {
  const steps = [
    {
      id: '01',
      title: 'Discovery & Blueprint',
      desc: 'We define the problem before solving it. We dive deep into your business logic, user personas, and competitor landscape to create a technical roadmap.',
      icon: <FaSearch />,
      color: '#3B82F6', // Blue
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Market Research', 'Feasibility Study', 'SRS Documentation']
    },
    {
      id: '02',
      title: 'UI/UX & Prototyping',
      desc: 'We don’t just design screens; we design experiences. You get clickable prototypes (Figma) to visualize the flow before a single line of code is written.',
      icon: <FaDraftingCompass />,
      color: '#D946EF', // Pink
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Wireframing', 'High-Fidelity UI', 'User Journey Maps']
    },
    {
      id: '03',
      title: 'Agile Development',
      desc: 'Our engineers build your product in 2-week sprints. You get regular updates and testable demos, ensuring the product evolves exactly as you envisioned.',
      icon: <FaCode />,
      color: '#8B5CF6', // Purple
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Clean Code', 'Unit Testing', 'CI/CD Pipelines']
    },
    {
      id: '04',
      title: 'Launch & Scale',
      desc: 'Deployment is just the beginning. We set up cloud infrastructure, monitor performance, and optimize for millions of users.',
      icon: <FaRocket />,
      color: '#F59E0B', // Orange
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Cloud Setup', 'SEO Optimization', 'Post-Launch Support']
    }
  ];

  return (
    <section className="workflow-section">
      <div className="container">
        <div className="section-header center">
          <span className="aesthetic-badge">🚀 THE PROCESS</span>
          <h2>
            How We <span className="gradient-text">Build Magic</span>
          </h2>
          <p>
            A transparent, agile, and collaborative journey from concept to code.
          </p>
        </div>

        <div className="timeline-wrapper">
          {/* The Central Line */}
          <div className="center-line"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`timeline-row ${index % 2 === 0 ? 'row-left' : 'row-right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              
              {/* CONTENT BOX */}
              <div className="timeline-content">
                <div className="glass-card">
                  <span className="step-number-bg">{step.id}</span>
                  <div className="icon-badge" style={{ background: step.color, boxShadow: `0 0 20px ${step.color}60` }}>
                    {step.icon}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  
                  <div className="step-tags">
                    {step.tags.map(tag => (
                      <span key={tag} className="step-tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CENTER DOT */}
              <div className="timeline-dot">
                <div className="dot-inner" style={{ background: step.color }}></div>
                <div className="dot-pulse" style={{ borderColor: step.color }}></div>
              </div>

              {/* IMAGE BOX */}
              <div className="timeline-image">
                <div className="img-frame">
                  <img src={step.image} alt={step.title} />
                  <div className="img-overlay"></div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;