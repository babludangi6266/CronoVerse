import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';


// Public Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Public Pages
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import AboutPage from './pages/About';
import IndustriesPage from './pages/Industries';
import ContactPage from './pages/Contact';
import Careers from './pages/Careers';

// Industry Pages
import Fintech from './pages/Fintech';
import Agritech from './pages/Agritech';
import Ecommerce from './pages/Ecommerce';
import Healthcare from './pages/Healthcare';
import Edtech from './pages/Edtech';
import Logistics from './pages/Logistics';

// NEW: Dedicated Service Pages
import CrmErpService from './pages/services/CrmErpService';
import AiAutomationService from './pages/services/AiAutomationService';
import FullStackService from './pages/services/FullStackService';
import MobileAppService from './pages/services/MobileAppService';
import CloudDevOpsService from './pages/services/CloudDevOpsService';
import UiUxDesignService from './pages/services/UiUxDesignService';
import './styles/index.css';

// Page Transition Wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/portal');

  return (
    <div className="app-wrapper">
      <ToastContainer position="top-right" theme="dark" />
      
      {!isPortal && <Header />}
      
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* === PUBLIC ROUTES === */}
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
            <Route path="/portfolio" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
            <Route path="/industries" element={<PageWrapper><IndustriesPage /></PageWrapper>} />
            
            {/* === INDIVIDUAL SERVICE ROUTES === */}
            <Route path="/services/crm-erp" element={<PageWrapper><CrmErpService /></PageWrapper>} />
            <Route path="/services/ai-automation" element={<PageWrapper><AiAutomationService /></PageWrapper>} />
            <Route path="/services/full-stack" element={<PageWrapper><FullStackService /></PageWrapper>} />
            <Route path="/services/mobile-app" element={<PageWrapper><MobileAppService /></PageWrapper>} />
            <Route path="/services/cloud-devops" element={<PageWrapper><CloudDevOpsService /></PageWrapper>} />
            <Route path="/services/ui-ux" element={<PageWrapper><UiUxDesignService /></PageWrapper>} />
            {/* === INDUSTRY ROUTES === */}
            <Route path="/industries/fintech" element={<PageWrapper><Fintech /></PageWrapper>} />
            <Route path="/industries/agritech" element={<PageWrapper><Agritech /></PageWrapper>} />
            <Route path="/industries/ecommerce" element={<PageWrapper><Ecommerce /></PageWrapper>} />
            <Route path="/industries/healthcare" element={<PageWrapper><Healthcare /></PageWrapper>} />
            <Route path="/industries/edtech" element={<PageWrapper><Edtech /></PageWrapper>} />
            <Route path="/industries/logistics" element={<PageWrapper><Logistics /></PageWrapper>} />

          
          </Routes>
        </AnimatePresence>
      </main>

      {!isPortal && <Footer />}
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
    
        <AppLayout />
    
    </Router>
    </HelmetProvider>
  );
}

export default App;