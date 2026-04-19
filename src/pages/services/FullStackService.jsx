import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, FaCheckCircle, FaServer, FaDatabase, FaBolt, FaArrowRight, 
  FaReact, FaNodeJs, FaCloudUploadAlt 
} from 'react-icons/fa';
import Contact from '../../components/sections/Contact';
import '../../styles/serviceDetails.css';

const FullStackService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // 6 Comprehensive Full-Stack Features (3x3 Grid Format)
  const features = [
    { icon: <FaReact />, title: "Frontend Engineering", desc: "Pixel-perfect UIs using React.js and Next.js. We build Server-Side Rendered (SSR) apps and Single Page Applications (SPAs) that deliver blazing-fast load times and top-tier SEO." },
    { icon: <FaNodeJs />, title: "Backend Microservices", desc: "Robust server-side logic using Node.js and Express. We design scalable microservices architectures capable of processing millions of concurrent requests without bottlenecking." },
    { icon: <FaDatabase />, title: "Database Architecture", desc: "Complex data modeling using NoSQL (MongoDB) and SQL (MySQL/PostgreSQL). We implement Redis caching layers to ensure database queries resolve in milliseconds." },
    { icon: <FaServer />, title: "API Development & Security", desc: "Secure RESTful and GraphQL APIs designed for seamless third-party integrations, complete with JWT authentication, OAuth, rate limiting, and robust payload validation." },
    { icon: <FaBolt />, title: "Real-Time Sockets", desc: "Event-driven architectures using Socket.io and WebRTC. We build live chat applications, collaborative workspaces, live notification engines, and real-time dashboards." },
    { icon: <FaCloudUploadAlt />, title: "Cloud & DevOps Integration", desc: "End-to-end CI/CD pipeline setup. We containerize applications with Docker and deploy to AWS, ensuring 99.99% uptime with load balancing and auto-scaling capabilities." }
  ];

  return (
    <div className="srv-detail-wrapper">
      
      {/* --- IMMERSIVE SERVICE HERO --- */}
      <section className="srv-detail-hero">
        <div className="srv-detail-bg">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Code on Screen" />
          <div className="srv-detail-overlay"></div>
        </div>
        
        <div className="srv-detail-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="srv-detail-text">
            <div className="srv-hero-pill" style={{borderColor: '#06B6D4', color: '#06B6D4', padding: '8px 16px', borderRadius: '50px', border: '1px solid', display: 'inline-block', marginBottom: '20px'}}>
              <FaLaptopCode style={{marginRight: '8px'}}/> Enterprise Web
            </div>
            <h1>Full-Stack <span className="theme-cyan">Web Ecosystems</span></h1>
            <p>We engineer scalable SaaS platforms, dynamic e-commerce engines, and Progressive Web Apps (PWAs) using the modern MERN stack. From database schema to UI delivery.</p>
            <button className="srv-btn-primary bg-theme-cyan" onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })} style={{padding: '15px 30px', border: 'none', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 'bold'}}>
              View Architecture <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- CORE VALUE PROPOSITION --- */}
      <section className="srv-value-section">
        <div className="srv-split-val">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Built for <span className="theme-cyan">Speed & Scale.</span></h2>
            <p style={{color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px'}}>
              A website is a brochure; a web application is a business. We specialize in building complex, interactive platforms that handle high traffic seamlessly. Our code is clean, documented, and built to military-grade security standards.
            </p>
            <p style={{color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px'}}>
              We don't just use templates. Every component, controller, and database query is hand-crafted to fit your exact business logic and operational goals.
            </p>
            <ul className="srv-check-list">
              <li><FaCheckCircle className="theme-cyan"/> 99.9% Uptime Architecture</li>
              <li><FaCheckCircle className="theme-cyan"/> Progressive Web Apps (Offline Mode)</li>
              <li><FaCheckCircle className="theme-cyan"/> Advanced Role-Based Access Control</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}}>
            {/* CSS Mock Code Editor */}
            <div className="mock-code-editor">
              <div className="m-code-head">
                <div className="m-code-dot" style={{background: '#EF4444'}}></div>
                <div className="m-code-dot" style={{background: '#EAB308'}}></div>
                <div className="m-code-dot" style={{background: '#10B981'}}></div>
                <span style={{marginLeft: '10px', color: '#94A3B8', fontSize: '0.8rem'}}>server.js</span>
              </div>
              <div className="m-code-body">
                <span className="m-code-keyword">import</span> express <span className="m-code-keyword">from</span> <span className="m-code-string">'express'</span>;<br/>
                <span className="m-code-keyword">import</span> {'{ connectDB }'} <span className="m-code-keyword">from</span> <span className="m-code-string">'./config/db.js'</span>;<br/><br/>
                <span className="m-code-keyword">const</span> app = <span className="m-code-function">express</span>();<br/><br/>
                <span style={{color: '#475569'}}>// Initialize Lexa Tech Enterprise Framework</span><br/>
                <span className="m-code-function">connectDB</span>();<br/>
                app.<span className="m-code-function">use</span>(<span className="m-code-string">'/api/v1/core'</span>, coreRoutes);<br/><br/>
                app.<span className="m-code-function">listen</span>(8080, () =&gt; {'{'}<br/>
                &nbsp;&nbsp;console.<span className="m-code-function">log</span>(<span className="m-code-string">'🚀 Core Ecosystem Online & Scalable'</span>);<br/>
                {'}'});
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURE GRID (3x2 Format with Neon Lines) --- */}
      <section className="srv-features-grid-sec">
        <div className="srv-container">
          <h2 style={{textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem'}}>Full-Stack <span className="theme-cyan">Capabilities</span></h2>
          
          {/* Forced into exactly 3 columns using Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Perfectly aligns 3 cards per row on desktop
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
                {/* THE NEON GLOW LINE AT THE TOP OF EACH CARD (CYAN THEME) */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #06B6D4, transparent)',
                  boxShadow: '0 0 15px #06B6D4, 0 0 5px #06B6D4'
                }}></div>

                <div className="theme-cyan" style={{fontSize: '2.5rem', marginBottom: '20px'}}>{feat.icon}</div>
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

export default FullStackService;