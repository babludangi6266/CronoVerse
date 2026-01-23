import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaChalkboardTeacher, FaGamepad, FaMobileAlt, 
  FaCertificate, FaChartPie, FaVideo, FaRobot 
} from 'react-icons/fa';
import CTAStrip from '../components/sections/CTAStrip'; 
import '../styles/edtech.css';

const Edtech = () => {
  
  return (
    <div className="edtech-wrapper">
      
      {/* --- HERO SECTION: MASONRY GALLERY --- */}
      <section className="ed-hero">
        <div className="container hero-split-ed">
          
          <motion.div 
            className="ed-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="ed-badge">
              <FaGraduationCap /> Future of Learning
            </div>
            <h1>
              Education <br />
              <span className="text-coral">Reimagined.</span>
            </h1>
            <p className="ed-sub">
              We build immersive Learning Management Systems (LMS) and Virtual Classrooms 
              that engage students and empower educators.
            </p>
            
            <div className="ed-stats-row">
              <div className="ed-stat">
                <h3>5M+</h3>
                <span>Students</span>
              </div>
              <div className="ed-stat">
                <h3>95%</h3>
                <span>Engagement</span>
              </div>
              <div className="ed-stat">
                <h3>24/7</h3>
                <span>Uptime</span>
              </div>
            </div>
          </motion.div>

          {/* VISUAL: MASONRY IMAGE GRID */}
          <motion.div 
            className="ed-hero-gallery"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="gallery-col col-down">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="gal-img" alt="Student Group" />
              <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="gal-img" alt="Online Class" />
            </div>
            <div className="gallery-col col-up">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="gal-img" alt="Digital Learning" />
              <div className="glass-card-mini">
                <FaVideo className="icon-coral" /> Live Classes
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FEATURE CARDS WITH IMAGES --- */}
      <section className="ed-features">
        <div className="container">
          <div className="section-header-ed">
            <h2>Tools for the <span className="text-coral">Modern Classroom</span></h2>
            <p>Scalable tech infrastructure for Schools, Universities, and Bootcamps.</p>
          </div>

          <div className="ed-grid">
            {/* Card 1 */}
            <motion.div className="ed-card" whileHover={{ y: -10 }}>
              <div className="card-image-header">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="LMS" />
                <div className="icon-float"><FaChalkboardTeacher /></div>
              </div>
              <div className="card-body">
                <h3>Custom LMS</h3>
                <p>White-label platforms for course creation, student tracking, and certification.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div className="ed-card" whileHover={{ y: -10 }}>
              <div className="card-image-header">
                <img src="https://images.unsplash.com/photo-1728571195314-5979a49acd12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2FtaWZpY2F0aW9ufGVufDB8fDB8fHww?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Gamification" />
                <div className="icon-float"><FaGamepad /></div>
              </div>
              <div className="card-body">
                <h3>Gamification</h3>
                <p>Boost retention with badges, leaderboards, and interactive quizzes.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div className="ed-card" whileHover={{ y: -10 }}>
              <div className="card-image-header">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Analytics" />
                <div className="icon-float"><FaChartPie /></div>
              </div>
              <div className="card-body">
                <h3>AI Analytics</h3>
                <p>Predictive insights on student performance and dropout risks.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- IMMERSIVE APP SHOWCASE --- */}
      <section className="ed-mobile-showcase">
        <div className="container split-showcase">
          <div className="showcase-content">
            <h2>Learning on the Go.<br /><span className="text-coral">Anytime. Anywhere.</span></h2>
            <p>
              We build <strong>Mobile-First</strong> experiences. Offline mode, push notifications, 
              and bite-sized micro-learning modules ensure engagement never drops.
            </p>
            
            <div className="feature-pills">
              <span><FaMobileAlt /> iOS & Android</span>
              <span><FaVideo /> Zoom Integration</span>
              <span><FaRobot /> AI Tutor</span>
              <span><FaCertificate /> Auto-Certificates</span>
            </div>
          </div>
          
          <div className="showcase-visual">
            <div className="tablet-mockup">
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="E-Learning App" />
              <div className="play-button"><FaVideo /></div>
            </div>
            {/* Floating decorative elements */}
            <div className="float-bubble b1"></div>
            <div className="float-bubble b2"></div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
};

export default Edtech;