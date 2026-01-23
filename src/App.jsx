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
import Ecommerce from './pages/Ecommerce';
import Healthcare from './pages/Healthcare';
import Edtech from './pages/Edtech';
import Logistics from './pages/Logistics';
import Careers from './pages/Careers';
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
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/edtech" element={<Edtech />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;