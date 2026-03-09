

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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

// Public Pages
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import AboutPage from './pages/About';
import IndustriesPage from './pages/Industries';
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

// --- Layout Manager Component ---
// This component decides whether to show Header/Footer based on the URL
const AppLayout = () => {
  const location = useLocation();
  // Check if the current URL starts with "/portal"
  const isPortal = location.pathname.startsWith('/portal');

  return (
    <div className="app-wrapper">
      <ToastContainer position="top-right" theme="dark" />
      
      {/* Only show Header if NOT on a portal page */}
      {!isPortal && <Header />}
      
      <main>
        <Routes>
          {/* === PUBLIC ROUTES === */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Industries */}
          <Route path="/industries/fintech" element={<Fintech />} />
          <Route path="/industries/agritech" element={<Agritech />} />
          <Route path="/industries/ecommerce" element={<Ecommerce />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/edtech" element={<Edtech />} />
          <Route path="/industries/logistics" element={<Logistics />} />

          {/* === PORTAL ROUTES === */}
          <Route path="/portal/login" element={<Login />} />
          <Route path="/portal/register" element={<Register />} />
          <Route path="/portal/employee" element={<EmployeeDashboard />} />
          <Route path="/portal/admin" element={<AdminDashboard />} />
          <Route path="/portal/admin/users" element={<AdminUsers />} />
          <Route path="/portal/admin/user/:id" element={<AdminUserDetail />} />
          <Route path="/portal/calendar" element={<CalendarPage />} />
          <Route path="/portal/admin/deals" element={<AdminDeals />} />
          <Route path="/portal/employee/projects" element={<EmployeeProjects />} />
        </Routes>
      </main>

      {/* Only show Footer if NOT on a portal page */}
      {!isPortal && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        {/* We use a child component here so useLocation() works */}
        <AppLayout />
      </AuthProvider>
    </Router>
  );
}

export default App;