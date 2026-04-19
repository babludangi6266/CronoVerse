import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaCheckCircle, FaServer, FaLock, FaSyncAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';
import Contact from '../../components/sections/Contact';
import '../../styles/serviceDetails.css';

const CloudDevOpsService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: <FaServer />, title: "Serverless Architecture", desc: "Deploy AWS Lambda and edge functions to infinitely scale without managing infrastructure." },
    { icon: <FaSyncAlt />, title: "Automated CI/CD", desc: "Pipeline automation using GitHub Actions and Docker for zero-downtime deployments." },
    { icon: <FaLock />, title: "Disaster Recovery", desc: "Multi-region failovers, automated database backups, and instant rollback capabilities." },
    { icon: <FaChartLine />, title: "Cost Optimization", desc: "We audit existing cloud setups to eliminate idle resources and drastically lower your AWS/GCP bills." }
  ];

  return (
    <div className="srv-detail-wrapper">
      <section className="srv-detail-hero">
        <div className="srv-detail-bg">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Cloud Infrastructure" />
          <div className="srv-detail-overlay"></div>
        </div>
        
        <div className="srv-detail-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="srv-detail-text">
            <div className="srv-hero-pill" style={{borderColor: '#EAB308', color: '#EAB308', padding: '8px 16px', borderRadius: '50px', border: '1px solid', display: 'inline-block', marginBottom: '20px'}}>
              <FaCloud style={{marginRight: '8px'}}/> Infrastructure as Code
            </div>
            <h1>Enterprise <span className="theme-yellow">Cloud & DevOps</span></h1>
            <p>Infrastructure that scales with your ambition. We design auto-scaling architectures and implement CI/CD pipelines to ensure global redundancy.</p>
            <button className="srv-btn-primary bg-theme-yellow" onClick={() => window.scrollTo(0, 900)} style={{padding: '15px 30px', border: 'none', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 'bold'}}>
              Audit Your Architecture <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="srv-value-section">
        <div className="srv-split-val">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Deploy faster. <span className="theme-yellow">Sleep better.</span></h2>
            <p style={{color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px'}}>
              Manual server configuration is a liability. We treat infrastructure as code (IaC) using tools like Terraform and Docker. When your application goes viral, our auto-scaling groups spin up new servers instantly, and spin them down when traffic drops.
            </p>
            <ul className="srv-check-list">
              <li><FaCheckCircle className="theme-yellow"/> 99.99% Guaranteed SLA Uptime</li>
              <li><FaCheckCircle className="theme-yellow"/> End-to-End Docker Containerization</li>
              <li><FaCheckCircle className="theme-yellow"/> AWS, GCP, and Azure Expertise</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            {/* CSS Mock Server Rack */}
            <div className="mock-server-rack">
              <div className="m-server-blade">
                <div className="m-blade-lights"><div className="m-light"></div><div className="m-light"></div><div className="m-light"></div></div>
                <div className="m-blade-vent"></div>
              </div>
              <div className="m-server-blade">
                <div className="m-blade-lights"><div className="m-light"></div><div className="m-light"></div><div className="m-light"></div></div>
                <div className="m-blade-vent"></div>
              </div>
              <div className="m-server-blade">
                <div className="m-blade-lights"><div className="m-light"></div><div className="m-light" style={{background: '#EF4444', boxShadow: '0 0 8px #EF4444'}}></div><div className="m-light"></div></div>
                <div className="m-blade-vent"></div>
              </div>
              <div className="m-server-blade">
                <div className="m-blade-lights"><div className="m-light"></div><div className="m-light"></div><div className="m-light"></div></div>
                <div className="m-blade-vent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="srv-features-grid-sec">
        <div className="srv-detail-content">
          <h2 style={{textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem'}}>DevOps <span className="theme-yellow">Arsenal</span></h2>
          <div className="srv-f-grid">
            {features.map((feat, i) => (
              <motion.div key={i} className="srv-f-card" style={{borderColor: 'rgba(234,179,8,0.1)'}} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{delay: i * 0.1}}>
                <div className="srv-f-icon theme-yellow">{feat.icon}</div>
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

export default CloudDevOpsService;