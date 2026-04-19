

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { AnimatePresence } from 'framer-motion';
// import 'react-toastify/dist/ReactToastify.css';

// import { AuthProvider } from './context/AuthContext';

// // Portal Pages
// import Login from './pages/portal/Login';
// import Register from './pages/portal/Register';
// import EmployeeDashboard from './pages/portal/EmployeeDashboard';
// import AdminDashboard from './pages/portal/AdminDashboard'; 
// import AdminUsers from './pages/portal/AdminUsers';
// import AdminUserDetail from './pages/portal/AdminUserDetail';
// import CalendarPage from './pages/portal/CalendarPage';
// import AdminDeals from './pages/portal/AdminDeals';
// import EmployeeProjects from './pages/portal/EmployeeProjects';


// // Public Components
// import Header from './components/common/Header';
// import Footer from './components/common/Footer';
// import ScrollToTop from './components/common/ScrollToTop';
// import LexaBotWidget from './components/common/LexaBotWidget';

// // Public Pages
// import Home from './pages/Home';
// import ServicesPage from './pages/Services';
// import PortfolioPage from './pages/Portfolio';
// import AboutPage from './pages/About';
// import IndustriesPage from './pages/Industries';
// import ContactPage from './pages/Contact';
// import Fintech from './pages/Fintech';
// import Agritech from './pages/Agritech';
// import Ecommerce from './pages/Ecommerce';
// import Healthcare from './pages/Healthcare';
// import Edtech from './pages/Edtech';
// import Logistics from './pages/Logistics';
// import Careers from './pages/Careers';

// // Styles
// import './styles/index.css';

// // --- Layout Manager Component ---
// // This component decides whether to show Header/Footer based on the URL
// const AppLayout = () => {
//   const location = useLocation();
//   // Check if the current URL starts with "/portal"
//   const isPortal = location.pathname.startsWith('/portal');

//   return (
//     <div className="app-wrapper">
//       <ToastContainer position="top-right" theme="dark" />
      
//       {/* Only show Header if NOT on a portal page */}
//       {!isPortal && <Header />}
//       {!isPortal && <LexaBotWidget />}
//       <main>
//       <AnimatePresence mode="wait">
//           <Routes location={location} key={location.pathname}>
//           {/* === PUBLIC ROUTES === */}
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/industries" element={<IndustriesPage />} />
//           <Route path="/portfolio" element={<PortfolioPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/careers" element={<Careers />} />
          
//           {/* Industries */}
//           <Route path="/industries/fintech" element={<Fintech />} />
//           <Route path="/industries/agritech" element={<Agritech />} />
//           <Route path="/industries/ecommerce" element={<Ecommerce />} />
//           <Route path="/industries/healthcare" element={<Healthcare />} />
//           <Route path="/industries/edtech" element={<Edtech />} />
//           <Route path="/industries/logistics" element={<Logistics />} />

//           {/* === PORTAL ROUTES === */}
//           <Route path="/portal/login" element={<Login />} />
//           <Route path="/portal/register" element={<Register />} />
//           <Route path="/portal/employee" element={<EmployeeDashboard />} />
//           <Route path="/portal/admin" element={<AdminDashboard />} />
//           <Route path="/portal/admin/users" element={<AdminUsers />} />
//           <Route path="/portal/admin/user/:id" element={<AdminUserDetail />} />
//           <Route path="/portal/calendar" element={<CalendarPage />} />
//           <Route path="/portal/admin/deals" element={<AdminDeals />} />
//           <Route path="/portal/employee/projects" element={<EmployeeProjects />} />
        
//         </Routes>
//       </AnimatePresence>
//       </main>

//       {/* Only show Footer if NOT on a portal page */}
//       {!isPortal && <Footer />}
//     </div>
//   );
// };

// // Add this right above your function App()
// import { motion } from 'framer-motion';
// const PageWrapper = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -15 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <AuthProvider>
//         <AppLayout />
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './context/AuthContext';

// Portal Pages
import Login from './pages/portal/Login';
import Register from './pages/portal/Register';
import EmployeeDashboard from './pages/portal/EmployeeDashboard';
import AdminDashboard from './pages/portal/AdminDashboard'; 
import AdminUsers from './pages/portal/AdminUsers';
import AdminUserDetail from './pages/portal/AdminUserDetail';
import CalendarPage from './pages/portal/CalendarPage';
import AdminDeals from './pages/portal/AdminDeals';
import EmployeeProjects from './pages/portal/EmployeeProjects';

// Public Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import LexaBotWidget from './components/common/LexaBotWidget';

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
      {!isPortal && <LexaBotWidget />}
      
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

            {/* === PORTAL ROUTES === */}
            <Route path="/portal/login" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/portal/register" element={<PageWrapper><Register /></PageWrapper>} />
            <Route path="/portal/employee" element={<PageWrapper><EmployeeDashboard /></PageWrapper>} />
            <Route path="/portal/admin" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
            <Route path="/portal/admin/users" element={<PageWrapper><AdminUsers /></PageWrapper>} />
            <Route path="/portal/admin/user/:id" element={<PageWrapper><AdminUserDetail /></PageWrapper>} />
            <Route path="/portal/calendar" element={<PageWrapper><CalendarPage /></PageWrapper>} />
            <Route path="/portal/admin/deals" element={<PageWrapper><AdminDeals /></PageWrapper>} />
            <Route path="/portal/employee/projects" element={<PageWrapper><EmployeeProjects /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      {!isPortal && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </Router>
  );
}

export default App;