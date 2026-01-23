import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop'; // Added this

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Fintech from './pages/Fintech';
import Agritech from './pages/Agritech';
// Styles
import './styles/index.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Activates scroll reset on page change */}
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fintech" element={<Fintech />} />
            <Route path="/agritech" element={<Agritech />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;