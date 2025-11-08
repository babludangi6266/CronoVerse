// src/components/sections/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom platforms, robust APIs, and scalable architecture built for the future.',
      features: ['Custom Platforms', 'Robust APIs', 'Scalable Architecture', 'eCommerce Solutions']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile experiences that users love.',
      features: ['Native iOS/Android', 'Cross-Platform', 'UI/UX Design', 'App Store Deployment']
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'Swift', 'Kotlin', 'Flutter', 
    'React Native', 'TypeScript', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Future-proof solutions built with timeless quality</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h3>Technology Stack</h3>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;