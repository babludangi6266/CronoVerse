import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaHome, FaSignOutAlt, FaTasks, FaUserFriends } from 'react-icons/fa';
import '../../styles/portal.css';

const PortalLayout = ({ children }) => {
  const { logout, user } = useContext(AuthContext);

  return (
    <div className="ept-wrapper ept-layout">
      {/* Sidebar */}
      <aside className="ept-sidebar">
        <div style={{marginBottom: '40px', fontWeight: '800', fontSize: '1.5rem', color: 'white'}}>
          LEXA <span style={{color: '#06B6D4'}}>PORTAL</span>
        </div>
        
        <nav style={{flex: 1}}>
          <div className="ept-nav-item active"><FaHome /> Dashboard</div>
          {user.role === 'Admin' && (
            <>
              <div className="ept-nav-item"><FaUserFriends /> Users</div>
              <div className="ept-nav-item"><FaTasks /> Task Manager</div>
            </>
          )}
        </nav>

        <div className="ept-nav-item" onClick={logout} style={{color: '#EF4444', marginTop: 'auto'}}>
          <FaSignOutAlt /> Logout
        </div>
      </aside>

      {/* Main Content */}
      <main className="ept-main-content">
        {children}
      </main>
    </div>
  );
};

export default PortalLayout;