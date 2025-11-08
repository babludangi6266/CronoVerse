// src/components/common/Header.jsx
import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h2>ChronoVerse</h2>
            <span>Future-Proof Digital Solutions</span>
          </div>

          {/* Navigation */}
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          {/* Dark Mode Toggle */}
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ darkMode, setDarkMode }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header-content">
//           {/* Logo */}
//           <div className="logo">
//             <Link to="/">
//               <h2>ChronoVerse</h2>
//               <span>Future-Proof Digital Solutions</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="desktop-nav">
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/services">Services</Link></li>
//               <li><Link to="/portfolio">Work</Link></li>
//               <li><Link to="/about">About</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </nav>

//           {/* Dark Mode Toggle */}
//           <button 
//             className="theme-toggle"
//             onClick={() => setDarkMode(!darkMode)}
//             aria-label="Toggle dark mode"
//           >
//             {darkMode ? '☀️' : '🌙'}
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="mobile-menu-toggle"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
//           <ul>
//             <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
//             <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
//             <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Work</Link></li>
//             <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
//             <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;