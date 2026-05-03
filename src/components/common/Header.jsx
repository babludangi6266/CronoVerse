
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../../utils/constants';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { FaUserShield } from 'react-icons/fa';
import logo from '../../../public/images/logo.png';
import '../../styles/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileIndOpen, setMobileIndOpen] = useState(false); // For Industries dropdown
  const [mobileSrvOpen, setMobileSrvOpen] = useState(false); // For Solutions dropdown
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- MENU DATA ---
  const serviceLinks = [
    { name: 'Custom CRM & ERP', path: '/services/crm-erp' },
    { name: 'AI Agents & Automation', path: '/services/ai-automation' },
    { name: 'Full-Stack Web', path: '/services/full-stack' },
    { name: 'Mobile App Engineering', path: '/services/mobile-app' },
    { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
    { name: 'UI/UX Design', path: '/services/ui-ux' }
  ];

  const industryLinks = [
    { name: 'FinTech & Banking', path: '/industries/fintech' },
    { name: 'AgriTech Solutions', path: '/industries/agritech' },
    { name: 'E-Commerce', path: '/industries/ecommerce' },
    { name: 'Healthcare IT', path: '/industries/healthcare' },
    { name: 'EdTech Platforms', path: '/industries/edtech' },
    { name: 'Logistics & Supply', path: '/industries/logistics' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="LexaTech Logo" className="logo-image" />
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          
          {/* SOLUTIONS DROPDOWN */}
          <div className="nav-dropdown-wrapper">
            <Link to="/services" className={`nav-link nav-dropdown-trigger ${location.pathname.includes('/services') ? 'active' : ''}`}>
              Solutions <HiChevronDown style={{marginLeft: '2px', marginTop: '2px'}}/>
            </Link>
            <div className="nav-dropdown-menu">
              <Link to="/services" className="dropdown-item" style={{color: '#06B6D4', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '5px'}}>View All Services</Link>
              {serviceLinks.map(srv => (
                <Link key={srv.name} to={srv.path} className="dropdown-item">{srv.name}</Link>
              ))}
            </div>
          </div>

          <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
          
          {/* INDUSTRIES DROPDOWN */}
          <div className="nav-dropdown-wrapper">
            <Link to="/industries" className={`nav-link nav-dropdown-trigger ${location.pathname.includes('/industries') ? 'active' : ''}`}>
              Industries <HiChevronDown style={{marginLeft: '2px', marginTop: '2px'}}/>
            </Link>
            <div className="nav-dropdown-menu">
              {industryLinks.map(ind => (
                <Link key={ind.name} to={ind.path} className="dropdown-item">{ind.name}</Link>
              ))}
            </div>
          </div>

          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <Link to="/careers" className="neon-frame">Careers</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          
          
        </nav>

        <button className="btn btn-primary nav-cta" onClick={() => window.open(COMPANY_INFO.whatsappLink, '_blank')}>
          Let's Talk
        </button>

        <div className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {mobileMenu && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
          
          {/* Mobile Solutions Accordion */}
          <div style={{width: '100%', textAlign: 'center'}}>
            <div onClick={() => setMobileSrvOpen(!mobileSrvOpen)} style={{fontSize: '20px', fontWeight: '600', color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
              Solutions <HiChevronDown style={{transform: mobileSrvOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s'}}/>
            </div>
            {mobileSrvOpen && (
              <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px'}}>
                <Link to="/services" onClick={() => setMobileMenu(false)} style={{color: '#06B6D4', fontSize: '18px'}}>View All Services</Link>
                {serviceLinks.map(srv => (
                  <Link key={srv.name} to={srv.path} onClick={() => setMobileMenu(false)} style={{fontSize: '16px', color: '#94A3B8'}}>{srv.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/portfolio" onClick={() => setMobileMenu(false)}>Portfolio</Link>
          
          {/* Mobile Industries Accordion */}
          <div style={{width: '100%', textAlign: 'center'}}>
            <div onClick={() => setMobileIndOpen(!mobileIndOpen)} style={{fontSize: '20px', fontWeight: '600', color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
              Industries <HiChevronDown style={{transform: mobileIndOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s'}}/>
            </div>
            {mobileIndOpen && (
              <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px'}}>
                <Link to="/industries" onClick={() => setMobileMenu(false)} style={{color: '#06B6D4', fontSize: '18px'}}>View All Industries</Link>
                {industryLinks.map(ind => (
                  <Link key={ind.name} to={ind.path} onClick={() => setMobileMenu(false)} style={{fontSize: '16px', color: '#94A3B8'}}>{ind.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" onClick={() => setMobileMenu(false)}>About Us</Link>
          <Link to="/careers" className="mobile-neon-link" onClick={() => setMobileMenu(false)}>Careers</Link>
          <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;