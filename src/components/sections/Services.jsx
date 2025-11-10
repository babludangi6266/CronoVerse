// src/components/sections/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🛠️',
      title: 'Custom Web Development',
      description: 'Tailored web applications built with modern frameworks and scalable architecture.',
      features: ['React/Vue.js', 'Node.js/Python', 'Responsive Design', 'API Integration'],
      gradient: 'gradient-1',
      image: 'https://images.unsplash.com/photo-1517309561013-16f6e4020305?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q3VzdG9tJTIwV2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native/Flutter', 'UI/UX Design', 'App Store Deployment'],
      gradient: 'gradient-2',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600 '
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment for optimal performance.',
      features: ['AWS/Azure', 'DevOps', 'CI/CD', 'Microservices'],
      gradient: 'gradient-3',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Our Expertise</div>
          <h2>Services That Drive <span className="gradient-text">Digital Innovation</span></h2>
          <p>We combine cutting-edge technology with proven methodologies to deliver exceptional results</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.gradient}`}>
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <div className="service-visual">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                </div>
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <button className="service-cta">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Visual */}
        <div className="tech-showcase">
          <h3>Trusted By Modern Tech Stack</h3>
          <div className="tech-scroll">
            <div className="tech-track">
              {['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL'].map((tech, idx) => (
                <div key={idx} className="tech-item">
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;