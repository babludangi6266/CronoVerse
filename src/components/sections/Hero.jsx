// import React from 'react';
// import { motion } from 'framer-motion';
// import { COMPANY_INFO } from '../../utils/constants';
// import { FaRocket, FaCode, FaMobileAlt } from 'react-icons/fa';
// import '../../styles/hero.css';

// const Hero = () => {
//   return (
//     <section className="hero-section">
//       {/* CSS Background Graphics */}
//       <div className="blob blob-1"></div>
//       <div className="blob blob-2"></div>

//       <div className="container hero-container">
//         <motion.div 
//           className="hero-text"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="hero-badge">🚀 #1 IT Startup in Odisha</div>
//           <h1>
//             Transforming Ideas into <br />
//             <span className="gradient-text">Digital Reality</span>
//           </h1>
//           <p>
//             Lexa Technologies empowers businesses with cutting-edge <b>Web</b>, 
//             <b>Mobile</b>, and <b>Cloud</b> solutions. We don't just write code; 
//             we engineer growth engines for startups and enterprises.
//           </p>
          
//           <div className="hero-stats">
//             <div className="stat-item">
//               <b>50+</b> <span>Projects</span>
//             </div>
//             <div className="stat-line"></div>
//             <div className="stat-item">
//               <b>20+</b> <span>Experts</span>
//             </div>
//             <div className="stat-line"></div>
//             <div className="stat-item">
//               <b>100%</b> <span>Success</span>
//             </div>
//           </div>

//           <div className="hero-actions">
//             <button className="btn btn-primary" onClick={() => window.open(COMPANY_INFO.whatsappLink)}>
//               Start Project
//             </button>
//             <button className="btn btn-outline">View Case Studies</button>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="hero-visual"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="image-container">
//             {/* Replace this URL with a real image of your team or a high-quality 3D illustration */}
//             <img 
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//               alt="Lexa Team" 
//               className="main-hero-img"
//             />
            
//             {/* Floating Graphic Cards */}
//             <motion.div 
//               className="floating-card card-1"
//               animate={{ y: [0, -20, 0] }}
//               transition={{ repeat: Infinity, duration: 4 }}
//             >
//               <FaCode className="icon-blue" />
//               <span>Clean Code</span>
//             </motion.div>

//             <motion.div 
//               className="floating-card card-2"
//               animate={{ y: [0, 20, 0] }}
//               transition={{ repeat: Infinity, duration: 5 }}
//             >
//               <FaMobileAlt className="icon-purple" />
//               <span>Mobile First</span>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../utils/constants';
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import '../../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Dynamic Background Gradients */}
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="container hero-container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glass Badge */}
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span className="badge-text">🏆 Odisha's Fastest Growing Tech Partner</span>
          </div>

          <h1 className="hero-heading">
            We Engineer The <br />
            <span className="text-gradient-main">Digital Future.</span>
          </h1>
          
          <p className="hero-sub">
            Lexa Technologies isn't just a dev shop; we are your <b>technical co-founders</b>. 
            We transform complex ideas into scalable <b>Web Ecosystems</b>, <b>AI-Powered Apps</b>, 
            and <b>Enterprise Cloud Architectures</b>. 
            <br /><br />
            Stop building ordinary. Start building <i>legacy</i>.
          </p>
          
          <div className="hero-actions">
            <button className="btn-glow" onClick={() => window.open(COMPANY_INFO.whatsappLink)}>
              Start Your Journey <FaArrowRight />
            </button>
            <button className="btn-video">
              <FaPlayCircle className="play-icon" /> Watch Showreel
            </button>
          </div>

          {/* REALISTIC SOCIAL PROOF SECTION */}
          <div className="trust-row">
            <div className="avatar-group">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
              <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="User" />
              <div className="avatar-count">+200</div>
            </div>
            <div className="trust-text">
              <p>Trusted by Founders & <br /><b>Enterprise Leaders</b></p>
            </div>
          </div>

          <div className="stats-glass-container">
            <div className="glass-stat">
              <span className="stat-num color-blue">50+</span>
              <span className="stat-label">Global Projects</span>
            </div>
            <div className="glass-stat">
              <span className="stat-num color-pink">20+</span>
              <span className="stat-label">Tech Experts</span>
            </div>
            <div className="glass-stat">
              <span className="stat-num color-orange">100%</span>
              <span className="stat-label">Client Retention</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Side */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
           <div className="visual-card-stack">
             {/* Main Image */}
             <img 
               src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Team Working" 
               className="hero-main-img" 
             />
             
             {/* Floating Elements */}
             <motion.div 
               className="float-badge badge-top"
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity }}
             >
               ⚡ High Performance
             </motion.div>
             <motion.div 
               className="float-badge badge-bottom"
               animate={{ y: [10, -10, 10] }}
               transition={{ duration: 5, repeat: Infinity }}
             >
               💎 Premium Code
             </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;