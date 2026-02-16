import React, { useState, useEffect , useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axios';
import PortalLayout from '../../components/portal/PortalLayout';
import ChatWidget from '../../components/portal/ChatWidget';
import { FaUserCheck, FaUserClock, FaTasks, FaCheckCircle, FaTimesCircle, FaPaperPlane } from 'react-icons/fa';
import '../../styles/portal.css';

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0, pendingUsers: 0, completedTasks: 0 });
  const [pendingUsers, setPendingUsers] = useState([]);
  const [activeEmployees, setActiveEmployees] = useState([]);
  
  // Task Assignment State
  const [taskForm, setTaskForm] = useState({ title: '', description: '', assignedTo: '', dueDate: '' });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // 1. Get Stats
      const statsRes = await api.get('/admin/reports');
      setStats(statsRes.data);

      // 2. Get Pending Users
      const pendingRes = await api.get('/admin/users?status=Pending');
      setPendingUsers(pendingRes.data);

      // 3. Get Active Employees (For Task Assignment Dropdown)
      const activeRes = await api.get('/admin/users?status=Active');
      setActiveEmployees(activeRes.data);
    } catch (err) {
      console.error("Failed to load admin data");
    }
  };

  const handleReview = async (userId, action) => {
    if(!window.confirm(`Are you sure you want to ${action} this user?`)) return;
    try {
      await api.post('/admin/review', { userId, action });
      // alert(`User ${action}d successfully`);
      toast.success(`User ${action}d successfully`);
      fetchDashboardData(); // Refresh list
    } catch (err) {
      toast.error("Action failed");
    }
  };

  const handleAssignTask = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks/assign', taskForm);
      toast.success('Task Assigned Successfully!');
      setTaskForm({ title: '', description: '', assignedTo: '', dueDate: '' }); // Reset form
    } catch (err) {
      toast.error('Failed to assign task');
    }
  };

  return (
    <PortalLayout>
      <h1 className="ept-title" style={{textAlign: 'left'}}>Admin Overview</h1>

      {/* --- STATS GRID --- */}
      <div className="ept-grid">
        <div className="ept-card">
          <h3>Total Workforce</h3>
          <div className="value">{stats.totalUsers}</div>
          <div style={{fontSize: '0.8rem', color: '#94A3B8', marginTop: '5px'}}>Registered Employees</div>
        </div>
        <div className="ept-card" style={{borderColor: '#EAB308'}}>
          <h3>Pending Approvals</h3>
          <div className="value" style={{color: '#EAB308'}}>{stats.pendingUsers}</div>
          <div style={{fontSize: '0.8rem', color: '#94A3B8', marginTop: '5px'}}>Awaiting Review</div>
        </div>
        <div className="ept-card" style={{borderColor: '#10B981'}}>
          <h3>Active Members</h3>
          <div className="value" style={{color: '#10B981'}}>{stats.activeUsers}</div>
          <div style={{fontSize: '0.8rem', color: '#94A3B8', marginTop: '5px'}}>Currently Working</div>
        </div>
        <div className="ept-card" style={{borderColor: '#3B82F6'}}>
          <h3>Tasks Completed</h3>
          <div className="value" style={{color: '#3B82F6'}}>{stats.completedTasks}</div>
          <div style={{fontSize: '0.8rem', color: '#94A3B8', marginTop: '5px'}}>All Time</div>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'start'}}>
        
        {/* --- LEFT COL: PENDING APPROVALS --- */}
        <div className="ept-card">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
            <h3><FaUserClock /> Pending Onboarding ({pendingUsers.length})</h3>
          </div>

          {pendingUsers.length === 0 ? (
            <p style={{color: '#94A3B8', fontStyle: 'italic'}}>No pending approvals.</p>
          ) : (
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
              {pendingUsers.map(user => (
                <div key={user._id} style={{
                  background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px'}}>
                    <div>
                      <h4 style={{margin: 0, color: 'white'}}>{user.email}</h4>
                      <span style={{fontSize: '0.8rem', color: '#06B6D4'}}>{user.areaOfInterest}</span>
                    </div>
                    <span className="ept-status st-pending">{user.type}</span>
                  </div>
                  
                  {/* Submission Content */}
                  <div style={{background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '15px', color: '#CBD5E1'}}>
                    <strong>Task Submission:</strong><br/>
                    {user.onboardingSubmission?.text || "No text provided."} <br/>
                    {user.onboardingSubmission?.link && (
                      <a href={user.onboardingSubmission.link} target="_blank" rel="noreferrer" style={{color: '#3B82F6'}}>View Work Link</a>
                    )}
                  </div>

                  <div style={{display: 'flex', gap: '10px'}}>
                    <button 
                      onClick={() => handleReview(user._id, 'Approve')}
                      className="ept-btn" 
                      style={{background: '#10B981', padding: '8px', fontSize: '0.9rem'}}
                    >
                      <FaCheckCircle /> Approve
                    </button>
                    <button 
                      onClick={() => handleReview(user._id, 'Reject')}
                      className="ept-btn" 
                      style={{background: '#EF4444', padding: '8px', fontSize: '0.9rem'}}
                    >
                      <FaTimesCircle /> Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* --- RIGHT COL: ASSIGN TASK --- */}
        <div className="ept-card" style={{position: 'sticky', top: '20px'}}>
          <h3><FaTasks /> Assign New Task</h3>
          <form onSubmit={handleAssignTask}>
            <div className="ept-input-group">
              <label>Task Title</label>
              <input 
                className="ept-input" 
                value={taskForm.title}
                onChange={(e) => setTaskForm({...taskForm, title: e.target.value})}
                required 
              />
            </div>
            
            <div className="ept-input-group">
              <label>Assign To (Active Employee)</label>
              <select 
                className="ept-input"
                value={taskForm.assignedTo}
                onChange={(e) => setTaskForm({...taskForm, assignedTo: e.target.value})}
                required
              >
                <option value="">Select Employee</option>
                {activeEmployees.map(emp => (
                  <option key={emp._id} value={emp._id}>{emp.email} ({emp.areaOfInterest})</option>
                ))}
              </select>
            </div>

            <div className="ept-input-group">
              <label>Due Date</label>
              <input 
                type="date" 
                className="ept-input"
                value={taskForm.dueDate}
                onChange={(e) => setTaskForm({...taskForm, dueDate: e.target.value})}
                required
              />
            </div>

            <div className="ept-input-group">
              <label>Description</label>
              <textarea 
                className="ept-input" 
                rows="3"
                value={taskForm.description}
                onChange={(e) => setTaskForm({...taskForm, description: e.target.value})}
              ></textarea>
            </div>

            <button className="ept-btn">
              <FaPaperPlane /> Assign Task
            </button>
          </form>
        </div>

      </div>
      <ChatWidget user={user} />
    </PortalLayout>
  );
};

export default AdminDashboard;