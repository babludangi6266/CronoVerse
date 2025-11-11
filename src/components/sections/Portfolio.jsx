import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'ICAR-CIWA (NISWA)',
      category: 'web',
      description: 'Scalable e-commerce solution with real-time analytics',
      image: '/images/icarciwa.png',
      logo: '🛒',
      results: ['+300% Traffic', '+90% Performance', '99.9% Uptime'],
      tech: ['React', 'Node.js', 'MongoDB', 'MySQL', 'Expressjs'],
      liveLink: 'https://icar-ciwa-tms.in/',
      caseStudy: {
        overview: "ICAR-CIWA needed a modern e-commerce platform to handle agricultural data and training management across multiple states in India.",
       
      }
    },
    {
      id: 2,
      title: 'LearnWithus',
      category: 'web',
      description: 'EduTech Platform Where Learning Meets Innovation',
      image: '/images/edutech.png',
      logo: '💪',
      results: ['50K+ Downloads', '4.8★ Rating', '95% Retention'],
      tech: ['Reactjs', 'Expressjs', 'Node.js', 'MongoDB', 'Firebase'],
      liveLink: 'https://learnwithus-three.vercel.app/',
      caseStudy: {
        overview: "An interactive learning platform designed to make education accessible and engaging for students in remote areas.",
      }
    },
    {
      id: 3,
      title: 'HardWare Dashboard',
      category: 'web',
      description: 'Real-time Projects analytics and reporting platform',
      image: '/images/dashboard.png',
      logo: '📊',
      results: ['40% Faster Decisions', 'Real-time Data', 'Secure API'],
      tech: ['Nodejs', 'Reactjs', 'MongoDB', 'Expressjs', 'D3.js', 'Socket.io'],
      liveLink: '#',
      caseStudy: {
        overview: "A comprehensive analytics dashboard for hardware project management with real-time monitoring and predictive insights.",
       }
    },
    {
      id: 4,
      title: 'The kamakshi',
      category: 'mobile',
      description: 'An Job Platform where Candidates meet their dream jobs and Companies find perfect talents',
      image: '/images/TheKamakshi.png',
      logo: '✈️',
      results: ['1M+ Users', '4.9★ Rating', '25 Countries'],
      tech: ['Reactjs', 'Node.js', 'MongoDB', 'Expressjs', 'MySQL'],
      liveLink: 'https://vendor-public.vercel.app/',
      caseStudy: {
        overview: "A global job platform connecting talented professionals with top companies through intelligent matching and streamlined recruitment.",
       }
    }
  ];


  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Our Work</div>
          <h2>Success Stories That <span className="gradient-text">Inspire</span></h2>
          <p>See how we've helped businesses transform their digital presence</p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {['all', 'web', 'mobile'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'All Projects' : filter === 'web' ? 'Web Apps' : 'Mobile Apps'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-visual">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-logo">{project.logo}</div>
                    <div className="project-actions">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-action">
                        👁️ Live Demo
                      </a>
                      <button 
                        className="btn-action" 
                      >
                        📖 Case Study
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-badge">{project.category}</div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-results">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="result-item">
                      <span className="result-value">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* CTA Section */}
        <div className="portfolio-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how we can bring your vision to life</p>
            <button className="btn btn-primary"  onClick={() => {
        const message = "Hi! I saw your portfolio and I'm interested in discussing a project with you.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/+919650280857?text=${encodedMessage}`, '_blank');
      }}
    >Start Conversation</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          padding: 8px 20px;
          border-radius: 20px;
          color: white;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .section-header h2 {
          font-size: 3rem;
          color: white;
          margin-bottom: 20px;
        }

        .gradient-text {
          background: linear-gradient(45deg, #ffd89b, #19547b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .portfolio-filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
        }

        .filter-btn {
          padding: 12px 30px;
          border: 2px solid rgba(255,255,255,0.2);
          background: transparent;
          color: white;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn.active {
          background: white;
          color: #667eea;
          border-color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .project-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
        }

        .project-visual {
          position: relative;
        }

        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(102, 126, 234, 0.9);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-logo {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .project-actions {
          display: flex;
          gap: 10px;
        }

        .btn-action {
          padding: 10px 20px;
          background: white;
          color: #667eea;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          text-decoration: none;
          font-size: 14px;
        }

        .project-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #667eea;
          color: white;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 12px;
          text-transform: uppercase;
        }

        .project-content {
          padding: 30px;
        }

        .project-content h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #333;
        }

        .project-content p {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .project-results {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .result-item {
          background: #f8f9fa;
          padding: 8px 15px;
          border-radius: 15px;
          font-size: 14px;
          color: #667eea;
          font-weight: 600;
        }

        .project-tech {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tech-tag {
          background: #e9ecef;
          padding: 5px 12px;
          border-radius: 12px;
          font-size: 12px;
          color: #495057;
        }

        .portfolio-cta {
          text-align: center;
          background: rgba(255,255,255,0.1);
          padding: 60px 40px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .cta-content h3 {
          font-size: 2rem;
          color: white;
          margin-bottom: 15px;
        }

        .cta-content p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .btn {
          padding: 15px 40px;
          border: none;
          border-radius: 25px;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: white;
          color: #667eea;
          font-weight: 600;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        /* Case Study Modal Styles */
        .case-study-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(5px);
        }

        .modal-content {
          position: relative;
          background: white;
          border-radius: 20px;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          width: 100%;
          padding: 40px;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #666;
        }

        .case-study-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .case-study-badge {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 8px 20px;
          border-radius: 15px;
          font-size: 14px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .case-study-header h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 20px;
        }

        .case-study-overview {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
        }

        .case-study-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 40px;
        }

        .case-study-section {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 15px;
        }

        .case-study-section.full-width {
          grid-column: 1 / -1;
        }

        .case-study-section h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }

        .process-list {
          list-style: none;
          padding: 0;
        }

        .process-list li {
          padding: 10px 0;
          border-bottom: 1px solid #e9ecef;
          position: relative;
          padding-left: 30px;
        }

        .process-list li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .result-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .result-icon {
          width: 30px;
          height: 30px;
          background: #667eea;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .testimonial {
          font-style: italic;
          color: #666;
          border-left: 4px solid #667eea;
          padding-left: 20px;
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .tech-stack {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tech-pill {
          background: #667eea;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
        }

        .case-study-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        @media (max-width: 768px) {
          .case-study-grid {
            grid-template-columns: 1fr;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .portfolio-filters {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;