import React, { useState } from 'react';
import { COMPANY_INFO } from '../../utils/constants';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import '../../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I am ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/+919650280857?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Let's Discuss Your Project</h2>
            <p>Ready to start? Call us or send a message.</p>
            
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Call Us</h4>
                <p>{COMPANY_INFO.phone}</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email Us</h4>
                <p>{COMPANY_INFO.email}</p>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Visit Us</h4>
                <p>{COMPANY_INFO.address}</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows="4" 
                placeholder="Tell us about your project..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary full-width">
              <FaWhatsapp /> Send Message on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;