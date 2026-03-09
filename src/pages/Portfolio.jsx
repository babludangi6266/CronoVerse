import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaArrowRight, FaLayerGroup, FaBolt, FaLaptopCode } from 'react-icons/fa';
import Contact from '../components/sections/Contact';
import '../styles/portfolioPage.css';

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'ICAR-CIWA (NISWA)',
      category: 'Government',
      desc: 'A scalable data management platform for the Central Institute for Women in Agriculture. Features complex role-based access control and large-scale data visualization.',
      image: './images/icar.png',
      stack: ['React.js', 'Node.js', 'MySQL', 'Redux'],
      link: 'https://icar-ciwa-tms.in/',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Summer70 Learning Hub',
      category: 'EdTech',
      desc: 'An interactive learning platform for immersive educational experiences. Features include live classes, resource sharing, and community forums.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stack: ['React', 'Node.js', 'MongoDB' , 'Firebase' , 'Socket.io', 'AWS S3'],
      link: 'https://summer70.com',
      color: 'teal'
    },
    {
      id: 5,
      title: 'Analytix Pro Dashboard',
      category: 'IoT & Analytics',
      desc: 'Real-time hardware monitoring dashboard processing 10k+ data points per second via WebSockets. Includes predictive maintenance algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stack: ['React', 'D3.js', 'Socket.io', 'MongoDB'],
      link: '#', 
      color: 'purple'
    },
    {
      id: 3,
      title: 'The Kamakshi',
      category: 'Platforms',
      desc: 'A global recruitment platform connecting talent across 25 countries. Features an AI-driven matching algorithm and automated interview scheduling.',
      image: './images/kamalshi.png',
      stack: ['React Native', 'Firebase', 'Node.js'],
      link: 'https://thekamakshi.com/',
      color: 'orange'
    },
    // {
    //   id: 4,
    //   title: 'LearnWithUs EdTech',
    //   category: 'EdTech',
    //   desc: 'Interactive learning management system (LMS) with gamified quizzes, progress tracking, and integrated video conferencing.',
    //   image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    //   stack: ['MERN Stack', 'Redux', 'AWS S3'],
    //   link: 'https://learnwithus-three.vercel.app/',
    //   color: 'green'
    // },
    
  ];

  return (
    <div className="pp-wrapper">
      
      {/* --- HERO SECTION (Left Aligned & Wide) --- */}
      <section className="pp-hero">
        <div className="pp-glow pp-glow-1"></div>
        <div className="pp-glow pp-glow-2"></div>
        <div className="pp-grid-overlay"></div>
        
        <div className="pp-container pp-hero-split">
          {/* Text Content */}
          <motion.div 
            className="pp-hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pp-badge">
              <FaLayerGroup /> OUR MASTERPIECES
            </span>
            <h1>
              Building Digital <br />
              <span className="pp-text-gradient">Legacies.</span>
            </h1>
            <p className="pp-hero-sub">
              Explore our curated selection of deployed projects. From government infrastructure to 
              high-speed IoT dashboards, we deliver engineering excellence.
            </p>
            <div className="pp-hero-stats-row">
              <div>
                <strong>25+</strong>
                <span>Live Apps</span>
              </div>
              <div className="pp-sep"></div>
              <div>
                <strong>10k+</strong>
                <span>Daily Users</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            className="pp-hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="pp-showcase-card">
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Showcase" />
               <div className="pp-floating-tag">
                 <FaLaptopCode /> Featured Project
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="pp-grid-section">
        <div className="pp-container">
          <div className="pp-section-label">SELECTED WORKS</div>
          
          <div className="pp-projects-grid">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className={`pp-card pp-theme-${project.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Image Area */}
                <div className="pp-card-img-box">
                  <img src={project.image} alt={project.title} />
                  <div className="pp-overlay">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="pp-view-btn">
                      View Live <FaExternalLinkAlt />
                    </a>
                  </div>
                  <div className="pp-cat-tag">{project.category}</div>
                </div>

                {/* Content Area */}
                <div className="pp-card-body">
                  <div className="pp-card-header">
                    <h3>{project.title}</h3>
                    <div className="pp-status-dot"></div>
                  </div>
                  <p>{project.desc}</p>
                  
                  <div className="pp-stack-row">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="pp-tech-pill">
                        <FaBolt className="pp-tiny-icon"/> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="pp-cta-section">
        <div className="pp-container">
          <div className="pp-cta-box">
            <h2>Have a Vision? Let's Build It.</h2>
            <p>We transform complex requirements into elegant, scalable software.</p>
            <button className="pp-cta-btn" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
              Start Your Project <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default PortfolioPage;