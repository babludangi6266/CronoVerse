
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../utils/constants';
import { 
  FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaTwitter, 
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobeAsia, FaHeart , FaCertificate
} from 'react-icons/fa';
import logo from '/images/logo.png'; 
import msmeLogo from '/images/msme-logo.jpeg';
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
               <img src={msmeLogo} alt="MSME Registered" className="msme-logo-img" />
            </div>

            <div className="social-icons">
              <a href="https://www.linkedin.com/company/lexa-tech/" className="sc-icon" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" className="sc-icon" aria-label="GitHub"><FaGithub /></a>
              <a href="#" className="sc-icon" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.instagram.com/lexa.technologies/" className="sc-icon" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2: Services (Technical) */}
          <div className="footer-widget">
            <h4 className="widget-title">Expertise</h4>
            <ul className="footer-list">
              <li><Link to="/services">Full-Stack Development</Link></li>
              <li><Link to="/services">MERN Stack Solutions</Link></li>
              <li><Link to="/services">Cloud Architecture (AWS)</Link></li>
              <li><Link to="/services">Database Management</Link></li>
              <li><Link to="/services">API Integration</Link></li>
              <li><Link to="/services">DevOps & CI/CD</Link></li>
            </ul>
          </div>

          {/* Column 3: Company & Careers */}
          <div className="footer-widget">
            <h4 className="widget-title">Company</h4>
            <ul className="footer-list">
              <li><Link to="/about">About Lexa</Link></li>
              <li><Link to="#">Our Methodology</Link></li>
              <Link to="/careers" className="link-with-badge">
   Careers <span className="badge-hiring">We're Hiring</span>
</Link>
              
              <li><Link to="/portfolio">Case Studies</Link></li>
              <li><Link to="#">Press & Media</Link></li>
              <li><Link to="#">Partnerships</Link></li>
            </ul>
          </div>

          {/* Column 4: Industries (New Content)
          // <div className="footer-widget">
          //   <h4 className="widget-title">Industries</h4>
          //   <ul className="footer-list">
          //     <li><Link to="/fintech">FinTech & Banking</Link></li>
          //     <li><Link to="/agritech">AgriTech Solutions</Link></li>
          //     <li><Link to="/ecommerce">E-Commerce</Link></li>
          //     <li><Link to="/healthcare">Healthcare IT</Link></li>
          //     <li><Link to="/edtech">EdTech Platforms</Link></li>
          //     <li><Link to="/logistics">Logistics & Supply Chain</Link></li>
          //   </ul>
          // </div> */}

{/* Column 4: Industries (Fix the paths here) */}
<div className="footer-widget">
  <h4 className="widget-title">Industries</h4>
  <ul className="footer-list">
    <li><Link to="/industries/fintech">FinTech & Banking</Link></li>
    <li><Link to="/industries/agritech">AgriTech Solutions</Link></li>
    <li><Link to="/industries/ecommerce">E-Commerce</Link></li>
    <li><Link to="/industries/healthcare">Healthcare IT</Link></li>
    <li><Link to="/industries/edtech">EdTech Platforms</Link></li>
    <li><Link to="/industries/logistics">Logistics & Supply Chain</Link></li>
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