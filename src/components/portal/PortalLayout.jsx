import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSignOutAlt, FaTasks, FaUserFriends, FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/portal.css';

const PortalLayout = ({ children }) => {
  const { logout, user } = useContext(AuthContext);
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="ept-wrapper ept-layout">
      
      {/* --- MOBILE HEADER (Visible only on mobile) --- */}
      <div className="ept-mobile-header">
        <div className="ept-brand">LEXA <span style={{color: '#06B6D4'}}>PORTAL</span></div>
        <button className="ept-menu-btn" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* --- SIDEBAR DRAWER --- */}
      <aside className={`ept-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        
        <div className="ept-sidebar-header">
          <div className="ept-brand">LEXA <span style={{color: '#06B6D4'}}>PORTAL</span></div>
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
          {user.role === 'Employee' && (
             <Link 
               to="/portal/employee" 
               className={`ept-nav-item ${isActive('/portal/employee')}`}
               onClick={() => setSidebarOpen(false)}
             >
               <FaHome /> Dashboard
             </Link>
          )}

          {/* Admin Links */}
          {user.role === 'Admin' && (
            <>
              <Link 
                to="/portal/admin" 
                className={`ept-nav-item ${isActive('/portal/admin')}`}
                onClick={() => setSidebarOpen(false)}
              >
                <FaHome /> Overview
              </Link>
              <Link 
                to="/portal/admin/users" 
                className={`ept-nav-item ${isActive('/portal/admin/users')}`}
                onClick={() => setSidebarOpen(false)}
              >
                <FaUserFriends /> User Management
              </Link>
              {/* Add more links here later if needed */}
            </>
          )}
        </nav>

        <div className="ept-nav-item logout" onClick={logout}>
          <FaSignOutAlt /> Logout
        </div>
      </aside>

      {/* --- OVERLAY (For Mobile Drawer) --- */}
      {isSidebarOpen && <div className="ept-overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* --- MAIN CONTENT AREA --- */}
      <main className="ept-main-content">
        {children}
      </main>
    </div>
  );
};

export default PortalLayout;