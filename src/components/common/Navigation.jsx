import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Solutions' },
    { path: '/portfolio', label: 'Portifolio' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;