import React from 'react';
import { COMPANY_INFO } from '../../utils/constants';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <h3>Lexa Technologies</h3>
          <p>
            Your trusted partner for all IT services. From web to mobile, 
            we engineer digital excellence.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com/..." target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/..." target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Cloud Architecture</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Our Projects</li>
            <li>Workflow</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li>{COMPANY_INFO.email}</li>
            <li>{COMPANY_INFO.phone}</li>
            <li>{COMPANY_INFO.address}</li>
            <li>
              <a href={COMPANY_INFO.whatsappLink} className="footer-chat-btn">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Lexa Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;