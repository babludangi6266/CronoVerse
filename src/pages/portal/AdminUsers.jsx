import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PortalLayout from '../../components/portal/PortalLayout';
import '../../styles/portal.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [filterType, setFilterType] = useState(''); // State for filter

  useEffect(() => {
    fetchUsers();
  }, [filterType]); // Refetch when filter changes

  const fetchUsers = async () => {
    // Append query param if filter exists
    const query = filterType ? `?type=${filterType}` : '';
    const res = await api.get(`/admin/users${query}`);
    setUsers(res.data);
  };

  const handleDeleteUser = async (id, name) => {
  if (!window.confirm(`Are you absolutely sure you want to remove ${name}? This action cannot be undone.`)) return;

  try {
    await api.delete(`/admin/users/${id}`);
    toast.success("Employee removed successfully");
    fetchUsers(); // Refresh the table
  } catch (err) {
    toast.error("Failed to delete user");
  }
};

  return (
    <PortalLayout>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
        <h1 className="ept-title" style={{textAlign: 'left', margin: 0}}>User Management</h1>
        
        {/* --- FILTER DROPDOWN --- */}
        <select 
          className="ept-input" 
          style={{width: '200px'}}
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Employees</option>
          <option value="Full-Time">Full-Time Only</option>
          <option value="Part-Time">Part-Time Only</option>
        </select>
      </div>
      
      <div className="ept-card" style={{overflowX: 'auto'}}>
        <table className="ept-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Type</th> {/* Type Column */}
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.areaOfInterest}</td>
                <td>
                  <span style={{
                    padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem',
                    background: u.type === 'Full-Time' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(236, 72, 153, 0.2)',
                    color: u.type === 'Full-Time' ? '#60A5FA' : '#F472B6'
                  }}>
                    {u.type}
                  </span>
                </td>
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
                <td>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Link to={`/portal/admin/user/${u._id}`} className="ept-btn" style={{padding: '6px 12px', fontSize: '0.8rem', width: 'auto', textDecoration: 'none'}}>
                    View Tasks
                  </Link>
                  <button 
                    onClick={() => handleDeleteUser(u._id, u.name)}
                    style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', fontSize: '1.1rem', transition: '0.2s' }}
                    title="Remove Employee"
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
              </tr>
            ))}
            {users.length === 0 && <tr><td colSpan="6" style={{textAlign: 'center', padding: '20px'}}>No users found.</td></tr>}
          </tbody>
        </table>
      </div>
    </PortalLayout>
  );
};

export default AdminUsers;