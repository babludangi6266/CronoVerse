import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../../utils/constants';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../../../public/images/logo.png';
import '../../styles/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers', isSpecial: true }, // Special Flag
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="LexaTech Logo" className="logo-image" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`
                ${location.pathname === link.path ? 'active' : ''} 
                ${link.isSpecial ? 'neon-frame' : 'nav-link'} 
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button 
          className="btn btn-primary nav-cta"
          onClick={() => window.open(COMPANY_INFO.whatsappLink, '_blank')}
        >
          Let's Talk
        </button>

        <div className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setMobileMenu(false)}
              className={link.isSpecial ? 'mobile-neon-link' : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;