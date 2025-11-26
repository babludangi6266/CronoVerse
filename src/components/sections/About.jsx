import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../../styles/about.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-col">
            <div className="img-wrapper">
               {/* Replace with office image */}
               <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Lexa" />
               <div className="experience-badge">
                 <span className="years">3+</span>
                 <span className="text">Years of Excellence</span>
               </div>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-subtitle">Why Choose Lexa?</span>
            <h2>We Build Solutions That <span className="gradient-text">Last.</span></h2>
            <p>
              At Lexa Technologies, we don't just deliver projects; we build partnerships. 
              Our "Future-Proof" methodology ensures that the software we build today 
              scales effortlessly with your business tomorrow.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <div>
                  <h4>Agile Methodology</h4>
                  <p>Weekly sprints and transparent updates.</p>
                </div>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <div>
                  <h4>Scalable Architecture</h4>
                  <p>Built to handle millions of users.</p>
                </div>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <div>
                  <h4>24/7 Support</h4>
                  <p>We are always here when you need us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;