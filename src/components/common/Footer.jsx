// src/components/common/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <h3>ChronoVerse</h3>
              <p>Future-Proof Digital Solutions</p>
            </div>
            <p className="footer-description">
              Building the next era of digital experiences with timeless code 
              and future-proof platforms.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/jackie-mohanty-9214391b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">📱</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="https://github.com/babludangi6266" aria-label="GitHub">💻</a>
              <a href="#" aria-label="Dribbble">🎨</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile App Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Work</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>jackie.mohanty2012@gmail.com</li>
              <li>96502 80857</li>
              <li>Bhubneshwar , Odisha , India</li>
              <li>
                <button className="btn btn-primary btn-small">
                  Start Project
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ChronoVerse. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;