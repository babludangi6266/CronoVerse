import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- Imported Link for internal routing
import { 
  FaBuilding, FaCheckCircle, FaTachometerAlt, FaShieldAlt, 
  FaRocket, FaPalette, FaArrowRight, FaChartPie, FaPlug, FaLock, FaExternalLinkAlt 
} from 'react-icons/fa';
import Contact from '../../components/sections/Contact';
import '../../styles/serviceDetails.css';

const CrmErpService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // 6 Highly Professional Feature Cards
  const features = [
    { icon: <FaPalette />, title: "White-Label Branding", desc: "Your logo, your colors, your domain. It looks like you spent $100k building an in-house platform from scratch." },
    { icon: <FaRocket />, title: "7-Day Deployment", desc: "Our core MERN architecture is pre-built. We customize the modules to your business logic and deploy in exactly one week." },
    { icon: <FaTachometerAlt />, title: "No Monthly SaaS Fees", desc: "Stop paying per-user licenses to Salesforce or HubSpot. Own your software, host it on your servers, and scale infinitely." },
    { icon: <FaShieldAlt />, title: "Enterprise Security", desc: "Military-grade data protection including Role-Based Access Control (RBAC), encrypted databases, and automated daily backups." },
    { icon: <FaPlug />, title: "Seamless Integrations", desc: "Built with an API-first approach. We seamlessly connect your CRM/ERP with Stripe, AWS, Twilio, WhatsApp, and your existing tools." },
    { icon: <FaChartPie />, title: "Advanced Analytics", desc: "Real-time data visualization. Track employee productivity, revenue pipelines, and operational bottlenecks from a single dashboard." }
  ];

  return (
    <div className="srv-detail-wrapper">
      
      {/* --- IMMERSIVE SERVICE HERO --- */}
      <section className="srv-detail-hero">
        <div className="srv-detail-bg">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="CRM Dashboard" />
          <div className="srv-detail-overlay"></div>
        </div>
        
        <div className="srv-container srv-detail-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="srv-detail-text"
          >
            <div className="srv-hero-pill" style={{borderColor: '#3B82F6', color: '#3B82F6'}}>
              <FaBuilding /> Enterprise Solutions
            </div>
            <h1>White-Label <span className="theme-blue">CRM & ERP</span></h1>
            <p>Deploy a fully customized, scalable operational dashboard for your business in just 7 days. Stop renting software, bypass the bloated monthly fees, and start owning your data.</p>
            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
              <button className="srv-btn-primary bg-theme-blue" onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })} style={{padding: '15px 30px', border: 'none', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 'bold'}}>
                View Architecture <FaArrowRight />
              </button>
              <button className="srv-btn-primary" onClick={() => window.scrollTo({ top: 1600, behavior: 'smooth' })} style={{background: 'transparent', border: '1px solid white', color: 'white', padding: '15px 30px', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 'bold'}}>
                Access Live Sandbox
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE VALUE PROPOSITION --- */}
      <section className="srv-value-section">
        <div className="srv-split-val">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Why rent when you can <span className="theme-blue">own?</span></h2>
            <p style={{color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px'}}>
              Most businesses surrender thousands of dollars monthly to bloated SaaS subscriptions that only solve half their problems. At Lexa Technologies, we provide a custom-built, MERN stack (MongoDB, Express, React, Node.js) portal designed specifically for your operational workflows.
            </p>
            <p style={{color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px'}}>
              Whether you need Employee Management, Kanban Task Boards, Client Pipelines, or Inventory Tracking—we deliver a centralized, hyper-fast dashboard branded entirely for your company.
            </p>
            <ul className="srv-check-list">
              <li><FaCheckCircle className="theme-blue"/> Unlimited Users (Zero per-seat pricing)</li>
              <li><FaCheckCircle className="theme-blue"/> Custom Domain Hosting (e.g., portal.yourcompany.com)</li>
              <li><FaCheckCircle className="theme-blue"/> Dedicated Source Code Handover</li>
            </ul>
          </motion.div>
          
          <motion.div className="srv-val-image" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            {/* Visual Representation of Dashboard */}
            <div className="mock-dashboard">
              <div className="mock-sidebar"></div>
              <div className="mock-main">
                <div className="mock-header"></div>
                <div className="mock-cards">
                  <div className="m-card"></div><div className="m-card"></div><div className="m-card"></div>
                </div>
                <div className="mock-chart"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- LIVE DEMO ACCESS SANDBOX (UPDATED TO REAL LINKS) --- */}
  {/* --- SECURE DEMO ACCESS SANDBOX --- */}
      <section id="sandbox" style={{ padding: '80px 0', background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), transparent)' }}>
        <div className="srv-container">
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <h2 style={{fontSize: '2.5rem'}}>Test Drive Our <span className="theme-blue">Systems</span></h2>
            <p style={{color: '#94A3B8', fontSize: '1.1rem', marginTop: '10px'}}>Explore our master architectures. Access is strictly by request to maintain security.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* CRM Demo Card */}
            <motion.div 
              style={{ background: '#0F172A', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '40px 30px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}}
            >
              <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '150px', height: '150px', background: '#3B82F6', filter: 'blur(80px)', opacity: '0.2', zIndex: 0 }}></div>
              <div style={{position: 'relative', zIndex: 1}}>
                <FaBuilding style={{fontSize: '3rem', color: '#3B82F6', marginBottom: '20px'}} />
                <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>Lexa CRM Sandbox</h3>
                <p style={{color: '#94A3B8', marginBottom: '25px', fontSize: '0.95rem'}}>Lead generation, pipeline management, client communication, and deal tracking.</p>
                <a 
                  href="mailto:jackie@lexatechnologies.com?subject=Request%20Access:%20Lexa%20CRM%20Sandbox&body=Hi%20Jackie,%0A%0AI%20would%20like%20to%20request%20demo%20credentials%20for%20the%20Custom%20CRM%20Sandbox.%0A%0AName:%0ACompany:%0APhone:"
                  className="srv-explore-btn srv-text-blue" 
                  style={{width: '100%', justifyContent: 'center'}}
                >
                  <FaLock /> Request CRM Credentials
                </a>
              </div>
            </motion.div>

            {/* ERP Demo Card */}
            <motion.div 
              style={{ background: '#0F172A', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '40px 30px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{delay: 0.2}}
            >
              <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '150px', height: '150px', background: '#3B82F6', filter: 'blur(80px)', opacity: '0.2', zIndex: 0 }}></div>
              <div style={{position: 'relative', zIndex: 1}}>
                <FaTachometerAlt style={{fontSize: '3rem', color: '#3B82F6', marginBottom: '20px'}} />
                <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>Lexa ERP Sandbox</h3>
                <p style={{color: '#94A3B8', marginBottom: '25px', fontSize: '0.95rem'}}>Employee onboarding, Kanban task management, payroll, and internal chat hubs.</p>
                <a 
                  href="mailto:jackie@lexatechnologies.com?subject=Request%20Access:%20Lexa%20ERP%20Sandbox&body=Hi%20Jackie,%0A%0AI%20would%20like%20to%20request%20demo%20credentials%20for%20the%20Custom%20ERP%20Sandbox.%0A%0AName:%0ACompany:%0APhone:"
                  className="srv-explore-btn srv-text-blue" 
                  style={{width: '100%', justifyContent: 'center'}}
                >
                  <FaLock /> Request ERP Credentials
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FEATURE GRID (3x2 Format with Neon Lines) --- */}
      <section className="srv-features-grid-sec">
        <div className="srv-container">
          <h2 style={{textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem'}}>Architected for <span className="theme-blue">Scale</span></h2>
          
          {/* Forced into exactly 3 columns using Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // This perfectly aligns 3 cards per row on desktop
            gap: '30px'
          }}>
            {features.map((feat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{once:true}} 
                transition={{delay: i * 0.1}}
                style={{
                  background: '#0F172A',
                  padding: '35px 30px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* THE NEON GLOW LINE AT THE TOP OF EACH CARD */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #3B82F6, transparent)',
                  boxShadow: '0 0 15px #3B82F6, 0 0 5px #3B82F6'
                }}></div>

                <div className="theme-blue" style={{fontSize: '2.5rem', marginBottom: '20px'}}>{feat.icon}</div>
                <h3 style={{fontSize: '1.3rem', marginBottom: '15px'}}>{feat.title}</h3>
                <p style={{color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6'}}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Contact />
    </div>
  );
};

export default CrmErpService;