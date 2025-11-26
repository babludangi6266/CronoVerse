import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import '../../styles/portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'ICAR-CIWA (NISWA)',
      category: 'Government Platform',
      description: 'A scalable e-commerce and data platform for agricultural management handling thousands of daily users.',
      // Using an aesthetic placeholder that looks like a complex web app
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['React.js', 'Node.js', 'MySQL', 'Enterprise'],
      link: 'https://icar-ciwa-tms.in/',
      theme: 'theme-blue' // For customized glow
    },
    {
      id: 4,
      title: 'Analytix Pro Dashboard',
      category: 'IoT & Analytics',
      description: 'Real-time hardware monitoring dashboard with predictive insights and interactive data visualization.',
      // Aesthetic dashboard placeholder
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['React', 'D3.js', 'Socket.io', 'MongoDB'],
      link: '#', // Replace with actual link if available
      theme: 'theme-purple'
    },
    {
      id: 2,
      title: 'The Kamakshi',
      category: 'Global Job Platform',
      description: 'Connecting talent with opportunities across 25 countries with intelligent matching algorithms.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['React Native', 'Web Platform', 'Firebase'],
      link: 'https://vendor-public.vercel.app/',
      theme: 'theme-orange'
    },
    {
      id: 3,
      title: 'LearnWithUs EdTech',
      category: 'E-Learning Solution',
      description: 'An interactive educational platform making learning accessible with gamified experiences.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['MERN Stack', 'Redux', 'Mobile Friendly'],
      link: 'https://learnwithus-three.vercel.app/',
      theme: 'theme-green'
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section-modern">
      <div className="container">
        <div className="section-header center mb-60">
          <span className="aesthetic-badge">📂 OUR MASTERPIECES</span>
          <h2>
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p>
            We don't just build software; we engineer digital success stories. 
            Explore some of our most impactful work.
          </p>
        </div>

        <div className="aesthetic-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`aesthetic-card ${project.theme}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                    View Live Project <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="card-content">
                <div className="category-tag">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-tags-row">
                  {project.tags.map(tag => (
                    <span key={tag} className="mini-tag">#{tag}</span>
                  ))}
                </div>
                
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="details-link">
                  Explore Case Study <FaArrowRight className="arrow" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;