// import React from 'react';
// import { motion } from 'framer-motion';
// import { COMPANY_INFO } from '../../utils/constants';
// import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';
// import '../../styles/hero.css';

// const Hero = () => {
//   return (
//     <section className="hero-section">
//       {/* Dynamic Background Gradients */}
//       <div className="hero-glow glow-1"></div>
//       <div className="hero-glow glow-2"></div>

//       <div className="container hero-container">
//         <motion.div 
//           className="hero-text"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Glass Badge */}
//           <div className="status-badge">
//             <span className="pulse-dot"></span>
//             <span className="badge-text">🏆 Odisha's Fastest Growing Tech Partner</span>
//           </div>

//           <h1 className="hero-heading">
//             We Engineer The <br />
//             <span className="text-gradient-main">Digital Future.</span>
//           </h1>
          
//           <p className="hero-sub">
//             Lexa Technologies isn't just a dev shop; we are your <b>technical co-founders</b>. 
//             We transform complex ideas into scalable <b>Web Ecosystems</b>, <b>AI-Powered Apps</b>, 
//             and <b>Enterprise Cloud Architectures</b>. 
//             <br /><br />
//             Stop building ordinary. Start building <i>legacy</i>.
//           </p>
          
//           <div className="hero-actions">
//             <button className="btn-glow" onClick={() => window.open(COMPANY_INFO.whatsappLink)}>
//               Start Your Journey <FaArrowRight />
//             </button>
//            </div>

      
//          </motion.div>

//         {/* Visual Side */}
//         <motion.div 
//           className="hero-visual"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//            <div className="visual-card-stack">
//              {/* Main Image */}
//              <img 
//                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                alt="Team Working" 
//                className="hero-main-img" 
//              />
             
//              {/* Floating Elements */}
//              <motion.div 
//                className="float-badge badge-top"
//                animate={{ y: [-10, 10, -10] }}
//                transition={{ duration: 4, repeat: Infinity }}
//              >
//                ⚡ High Performance
//              </motion.div>
//              <motion.div 
//                className="float-badge badge-bottom"
//                animate={{ y: [10, -10, 10] }}
//                transition={{ duration: 5, repeat: Infinity }}
//              >
//                💎 Premium Code
//              </motion.div>
//            </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../utils/constants'; 
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import '../../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* --- BACKGROUND VIDEO --- */}
      <div className="video-bg">
        <video autoPlay loop muted playsInline className="video-element">
           {/* Ensure this path is correct in your project */}
           <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable */}
        <div className="overlay"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="container hero-content">
        
        {/* Animated Text Block */}
        <motion.div 
          className="text-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Small Tagline */}
          <span className="tagline">INNOVATION FOR EVERYONE</span>

          {/* Main Headline */}
          <h1 className="hero-title">
            Define Your Era<br />
            <span className="text-gradient">Elevate Your Brand.</span>
          </h1>

          {/* Business-Friendly Subtext */}
          <p className="hero-description">
            A digital revolution is here. Lexa Technologies bridges the gap between complex code and human culture.
            We build the platforms where tomorrow’s communities thrive .
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.open(COMPANY_INFO.whatsappLink)}>
              Start Your Project <FaArrowRight />
            </button>
            
          </div>

          {/* Trust/Social Proof (Optional Text at bottom) */}
          <div className="trust-text">
            <p>Trusted by forward-thinking companies across India.</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;