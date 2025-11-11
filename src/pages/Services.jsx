import React from 'react';
import { SERVICES, TECHNOLOGIES } from '../utils/constants';

const Services = () => {
  return (
    <div className="page services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Future-proof solutions built with timeless quality and cutting-edge technology</p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="service-detail-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h2>{service.title}</h2>
                </div>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>What we deliver:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-technologies">
                  <h4>Technologies we use:</h4>
                  <div className="tech-tags">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack-section">
        <div className="container">
          <h2>Our Technology Stack</h2>
          <p>We work with modern technologies to deliver robust and scalable solutions</p>
          <div className="tech-stack-grid">
            {TECHNOLOGIES.map((tech, index) => (
              <div key={index} className="tech-stack-item">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;