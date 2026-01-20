
import React from 'react';
import { COMPANY_INFO } from '../../utils/constants';
import { 
  FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaTwitter, 
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobeAsia, FaHeart , FaCertificate
} from 'react-icons/fa';
import logo from '../../../public/images/logo.png'; // Import the logo
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="container">
        
        {/* Top Grid: Main Navigation & Content */}
        <div className="footer-grid">
          
          {/* Column 1: Brand Identity */}
          <div className="footer-widget brand-widget">
            <div className="footer-logo">
              {/* Updated: Image Logo */}
              <img src={logo} alt="LexaTech Logo" className="footer-logo-img" />
            </div>
            <p className="brand-desc">
              Pioneering digital transformation through scalable code and human-centric design. 
              We build the technology that powers tomorrow's enterprises.
            </p>

            <div className="msme-badge-container">
              <div className="msme-badge">
                <div className="msme-icon-box">
                  <FaCertificate />
                </div>
                <div className="msme-content">
                  <span className="msme-title">MSME Registered</span>
                  <span className="msme-sub">Govt. of India Recognized</span>
                </div>
              </div>
            </div>
            
            <div className="social-icons">
              <a href="#" className="sc-icon" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" className="sc-icon" aria-label="GitHub"><FaGithub /></a>
              <a href="#" className="sc-icon" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="sc-icon" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2: Services (Technical) */}
          <div className="footer-widget">
            <h4 className="widget-title">Expertise</h4>
            <ul className="footer-list">
              <li><a href="/services">Full-Stack Development</a></li>
              <li><a href="/services">MERN Stack Solutions</a></li>
              <li><a href="/services">Cloud Architecture (AWS)</a></li>
              <li><a href="/services">Database Management</a></li>
              <li><a href="/services">API Integration</a></li>
              <li><a href="/services">DevOps & CI/CD</a></li>
            </ul>
          </div>

          {/* Column 3: Company & Careers */}
          <div className="footer-widget">
            <h4 className="widget-title">Company</h4>
            <ul className="footer-list">
              <li><a href="/about">About Lexa</a></li>
              <li><a href="#">Our Methodology</a></li>
              <li>
                <a href="#" className="link-with-badge">
                  Careers <span className="badge-hiring">We're Hiring</span>
                </a>
              </li>
              <li><a href="/portfolio">Case Studies</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Partnerships</a></li>
            </ul>
          </div>

          {/* Column 4: Industries (New Content) */}
          <div className="footer-widget">
            <h4 className="widget-title">Industries</h4>
            <ul className="footer-list">
              <li><a href="#">FinTech & Banking</a></li>
              <li><a href="#">AgriTech Solutions</a></li>
              <li><a href="#">E-Commerce</a></li>
              <li><a href="#">Healthcare IT</a></li>
              <li><a href="#">EdTech Platforms</a></li>
              <li><a href="#">Logistics & Supply Chain</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Card (Visual Highlight) */}
          <div className="footer-widget contact-widget">
            <div className="contact-card">
              <h4 className="widget-title">Let's Talk</h4>
              <ul className="contact-details">
                <li>
                  <FaEnvelope className="c-icon" />
                  <div>
                    <span>Email Us</span>
                    <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                  </div>
                </li>
                <li>
                  <FaPhoneAlt className="c-icon" />
                  <div>
                    <span>Call Us</span>
                    <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
                  </div>
                </li>
                <li>
                  <FaMapMarkerAlt className="c-icon" />
                  <div>
                    <span>Visit Us</span>
                    <p>{COMPANY_INFO.address}</p>
                  </div>
                </li>
              </ul>
              <a href={COMPANY_INFO.whatsappLink} className="whatsapp-btn-full">
                <FaWhatsapp /> Start a Project
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="footer-bottom">
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#">Terms of Service</a>
            <span className="separator">•</span>
            <a href="#">Sitemap</a>
            <span className="separator">•</span>
            <a href="#">Cookie Settings</a>
          </div>
          
          <div className="copyright-text">
            <p>
              &copy; {new Date().getFullYear()} Lexa Technologies. 
              All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;