// src/components/sections/Portfolio.jsx
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Scaling',
      category: 'web',
      problem: 'Legacy platform struggling with 10k+ concurrent users during peak seasons',
      solution: 'Built scalable microservices architecture with cloud-native technologies',
      result: '300% increase in concurrent users handling, 60% reduction in load times',
      image: 'https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      metrics: [
        { value: '300%', label: 'Performance Boost' },
        { value: '60%', label: 'Faster Load' },
        { value: '10k+', label: 'Concurrent Users' }
      ]
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      problem: 'Patients needed secure, real-time access to medical records and telehealth services',
      solution: 'Cross-platform mobile app with HIPAA-compliant security and video conferencing',
      result: '50k+ downloads with 4.8-star rating across app stores',
      image: 'https://images.unsplash.com/photo-1655313719612-8248b2c4d1e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js'],
      metrics: [
        { value: '50k+', label: 'Downloads' },
        { value: '4.8', label: 'App Rating' },
        { value: '99.9%', label: 'Uptime' }
      ]
    },
    {
      id: 3,
      title: 'FinTech Dashboard',
      category: 'web',
      problem: 'Financial institution needed real-time analytics and reporting dashboard',
      solution: 'Custom React dashboard with real-time data visualization and export capabilities',
      result: '40% improvement in decision-making speed and client reporting efficiency',
      image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      metrics: [
        { value: '40%', label: 'Efficiency Gain' },
        { value: 'Real-time', label: 'Analytics' },
        { value: 'Secure', label: 'Data Handling' }
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Work</h2>
          <p>See how we've helped businesses build future-proof digital solutions</p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid">
          {filteredStudies.map(study => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
                <div className="case-study-overlay">
                  <div className="tech-tags">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="case-study-content">
                <h3>{study.title}</h3>
                
                <div className="case-study-metrics">
                  {study.metrics.map((metric, index) => (
                    <div key={index} className="metric">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="case-study-details">
                  <div className="detail-section">
                    <h4>Problem</h4>
                    <p>{study.problem}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Solution</h4>
                    <p>{study.solution}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Result</h4>
                    <p className="result-highlight">{study.result}</p>
                  </div>
                </div>

                <button className="btn btn-outline">View Case Study</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;