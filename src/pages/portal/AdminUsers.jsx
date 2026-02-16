import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import { Link } from 'react-router-dom'; // <--- ADDED THIS IMPORT
import PortalLayout from '../../components/portal/PortalLayout';
import '../../styles/portal.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/admin/users').then(res => setUsers(res.data));
  }, []);

  return (
    <PortalLayout>
      <h1 className="ept-title" style={{textAlign: 'left'}}>User Management</h1>
      
      <div className="ept-card" style={{overflowX: 'auto'}}> {/* Added overflow for mobile tables */}
        <table className="ept-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th> {/* Added Header */}
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.areaOfInterest}</td>
                <td>
                  <span className={`ept-status ${u.status === 'Active' ? 'st-active' : 'st-pending'}`}>
                    {u.status}
                  </span>
                </td>
                <td>
                  <Link to={`/portal/admin/user/${u._id}`} className="ept-btn" style={{padding: '6px 12px', fontSize: '0.8rem', width: 'auto', textDecoration: 'none'}}>
                    View Tasks
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PortalLayout>
  );
};

export default AdminUsers;