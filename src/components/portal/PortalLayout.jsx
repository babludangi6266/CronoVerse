


import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import NotificationBell from './NotificationBell'
import { FaHome, FaSignOutAlt, FaTasks, FaUserFriends, FaBars, FaTimes, FaCalendarAlt, FaHandshake , FaBuilding  } from 'react-icons/fa';
import '../../styles/portal.css';

const PortalLayout = ({ children }) => {
  const { logout, user } = useContext(AuthContext);
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="ept-wrapper ept-layout">
      
      {/* --- MOBILE HEADER --- */}
      <div className="ept-mobile-header">
        <div className="ept-brand">LEXA <span style={{color: '#06B6D4'}}>CRM</span></div>
        <button className="ept-menu-btn" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* --- SIDEBAR DRAWER --- */}
      <aside className={`ept-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        
        <div className="ept-sidebar-header">
          <div className="ept-brand">LEXA <span style={{color: '#06B6D4'}}>CRM</span></div>
          <button className="ept-close-btn" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>
        
        <div className="ept-user-profile">
          <div className="ept-avatar">{user?.name?.charAt(0) || 'U'}</div>
          <div>
            <div className="ept-user-name">{user?.name}</div>
            <div className="ept-user-role">{user?.role}</div>
          </div>
        </div>

        <nav className="ept-nav-list">
          {/* Employee Links */}
          {user?.role === 'Employee' && (
             <>
               <Link to="/portal/employee" className={`ept-nav-item ${isActive('/portal/employee')}`} onClick={() => setSidebarOpen(false)}>
                 <FaHome /> Dashboard
               </Link>
               <Link to="/portal/calendar" className={`ept-nav-item ${isActive('/portal/calendar')}`} onClick={() => setSidebarOpen(false)}>
                 <FaCalendarAlt /> Calendar
               </Link>
               <Link to="/portal/employee/projects" className={`ept-nav-item ${isActive('/portal/employee/projects')}`} onClick={() => setSidebarOpen(false)}>
  <FaBuilding /> Active Projects
</Link>
             </>
          )}

          {/* Admin Links */}
          {user?.role === 'Admin' && (
            <>
              <Link to="/portal/admin" className={`ept-nav-item ${isActive('/portal/admin')}`} onClick={() => setSidebarOpen(false)}>
                <FaHome /> Overview
              </Link>
              <Link to="/portal/admin/users" className={`ept-nav-item ${isActive('/portal/admin/users')}`} onClick={() => setSidebarOpen(false)}>
                <FaUserFriends /> Team Management
              </Link>
              <Link to="/portal/calendar" className={`ept-nav-item ${isActive('/portal/calendar')}`} onClick={() => setSidebarOpen(false)}>
                <FaCalendarAlt /> Global Calendar
              </Link>
              <Link to="/portal/admin/deals" className={`ept-nav-item ${isActive('/portal/admin/deals')}`} onClick={() => setSidebarOpen(false)}>
  <FaHandshake /> Client Pipeline
</Link>
            </>
          )}
        </nav>

        <div className="ept-nav-item logout" onClick={logout} style={{ marginTop: 'auto' }}>
          <FaSignOutAlt /> Logout
        </div>
      </aside>

      {/* --- OVERLAY --- */}
      {isSidebarOpen && <div className="ept-overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* --- MAIN CONTENT AREA --- */}
      <main className="ept-main-content">
        {children}
      </main>
    </div>
  );
};

export default PortalLayout;