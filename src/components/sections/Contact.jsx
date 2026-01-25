import React, { useState } from 'react';
import { COMPANY_INFO } from '../../utils/constants';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import '../../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I am ${formData.name}. My email is ${formData.email}. ${formData.message}`;
    window.open(`https://wa.me/+919650280857?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="contact-modern">
      {/* Background Decor */}
      <div className="cnt-glow cnt-glow-1"></div>
      <div className="cnt-grid-overlay"></div>

      <div className="container">
        <div className="contact-layout">
          
          {/* Left Side: Info & Context */}
          <div className="contact-text-side">
            <span className="cnt-badge">GET IN TOUCH</span>
            <h2>
              Let's Build Something <br />
              <span className="cnt-gradient-text">Extraordinary.</span>
            </h2>
            <p className="cnt-desc">
              Whether you have a groundbreaking idea or need to scale your existing platform, 
              our engineers are ready to help.
            </p>

            <div className="cnt-info-list">
              <div className="cnt-info-item">
                <div className="icon-circle"><FaPhoneAlt /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>{COMPANY_INFO.phone}</p>
                </div>
              </div>
              
              <div className="cnt-info-item">
                <div className="icon-circle"><FaEnvelope /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>{COMPANY_INFO.email}</p>
                  <p>or</p>
                  <p>jackie@lexatechnologies.com</p>
                </div>
              </div>

              <div className="cnt-info-item">
                <div className="icon-circle"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Glass Form */}
          <div className="contact-form-side">
            <form className="glass-form" onSubmit={handleSubmit}>
              <h3>Start a Project</h3>
              
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="Ex. John Doe" 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Project Details</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your vision..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button type="submit" className="cnt-btn-submit">
                <FaWhatsapp /> Send Message <FaPaperPlane className="plane-anim"/>
              </button>
              
              <p className="form-note">
                *We typically reply within 2 hours during business days.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;