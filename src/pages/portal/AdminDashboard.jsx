import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axios';
import PortalLayout from '../../components/portal/PortalLayout';
import ChatWidget from '../../components/portal/ChatWidget';
import { 
  FaUserCheck, FaUserClock, FaTasks, FaCheckCircle, FaTimesCircle, 
  FaPaperPlane, FaExternalLinkAlt, FaQuoteLeft 
} from 'react-icons/fa';
import { toast } from 'react-toastify';
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
      setTaskForm({ title: '', description: '', assignedTo: '', dueDate: '' }); 
    } catch (err) {
      toast.error('Failed to assign task');
    }
  };

  return (
    <PortalLayout>
      <h1 className="ept-title" style={{textAlign: 'left', marginBottom: '20px'}}>Admin Overview</h1>

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

      <div style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px', alignItems: 'start'}}>
        
        {/* --- LEFT COL: PENDING APPROVALS --- */}
        <div className="ept-card">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px'}}>
            <h3 style={{margin: 0, display: 'flex', alignItems: 'center', gap: '10px'}}>
              <FaUserClock size={18}/> Pending Onboarding ({pendingUsers.length})
            </h3>
          </div>

          {pendingUsers.length === 0 ? (
            <div style={{textAlign: 'center', padding: '40px', color: '#94A3B8', background: 'rgba(255,255,255,0.02)', borderRadius: '12px'}}>
              <FaCheckCircle size={30} style={{marginBottom: '10px', opacity: 0.5}}/>
              <p>All cleared! No pending approvals.</p>
            </div>
          ) : (
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              {pendingUsers.map(user => (
                <div key={user._id} style={{
                  background: 'rgba(30, 41, 59, 0.5)', 
                  borderRadius: '16px', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  overflow: 'hidden'
                }}>
                  {/* Candidate Header */}
                  <div style={{
                    padding: '15px 20px', 
                    background: 'rgba(0,0,0,0.2)', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}>
                    <div>
                      <h4 style={{margin: 0, color: '#F8FAFC', fontSize: '1rem'}}>{user.name || user.email}</h4>
                      <div style={{fontSize: '0.8rem', color: '#06B6D4', marginTop: '2px'}}>{user.areaOfInterest}</div>
                    </div>
                    <span style={{
                      padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600',
                      background: user.type === 'Full-Time' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(236, 72, 153, 0.15)',
                      color: user.type === 'Full-Time' ? '#60A5FA' : '#F472B6'
                    }}>
                      {user.type}
                    </span>
                  </div>
                  
                  {/* Submission Content */}
                  <div style={{padding: '20px'}}>
                    <div style={{marginBottom: '15px'}}>
                      <label style={{fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px', display: 'block'}}>Submission Note</label>
                      <div style={{
                        background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', 
                        color: '#CBD5E1', fontSize: '0.9rem', lineHeight: '1.5', display: 'flex', gap: '10px'
                      }}>
                        <FaQuoteLeft size={14} color="#475569" style={{minWidth: '14px'}}/>
                        {user.onboardingSubmission?.text || "No description provided."}
                      </div>
                    </div>

                    {user.onboardingSubmission?.link && (
                       <div style={{marginBottom: '20px'}}>
                         <label style={{fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px', display: 'block'}}>Project Link</label>
                         <a 
                           href={user.onboardingSubmission.link} 
                           target="_blank" 
                           rel="noreferrer" 
                           style={{
                             display: 'inline-flex', alignItems: 'center', gap: '8px',
                             background: 'rgba(6, 182, 212, 0.1)', color: '#22D3EE',
                             padding: '8px 14px', borderRadius: '8px', textDecoration: 'none',
                             fontSize: '0.9rem', fontWeight: '500', transition: '0.2s'
                           }}
                           onMouseOver={(e) => e.target.style.background = 'rgba(6, 182, 212, 0.2)'}
                           onMouseOut={(e) => e.target.style.background = 'rgba(6, 182, 212, 0.1)'}
                         >
                           <FaExternalLinkAlt size={12}/> View Submission
                         </a>
                       </div>
                    )}

                    {/* Actions */}
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px'}}>
                      <button 
                        onClick={() => handleReview(user._id, 'Reject')}
                        className="ept-btn" 
                        style={{
                          background: 'transparent', border: '1px solid #EF4444', color: '#EF4444', 
                          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'
                        }}
                      >
                        <FaTimesCircle /> Reject
                      </button>
                      <button 
                        onClick={() => handleReview(user._id, 'Approve')}
                        className="ept-btn" 
                        style={{
                          background: '#10B981', color: 'white', 
                          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'
                        }}
                      >
                        <FaCheckCircle /> Approve Candidate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* --- RIGHT COL: ASSIGN TASK --- */}
        <div className="ept-card" style={{position: 'sticky', top: '20px'}}>
          <h3><FaTasks /> Assign New Task</h3>
          <p style={{fontSize: '0.85rem', color: '#94A3B8', marginBottom: '20px'}}>Assign work to active employees.</p>
          
          <form onSubmit={handleAssignTask}>
            <div className="ept-input-group">
              <label>Task Title</label>
              <input 
                className="ept-input" 
                value={taskForm.title}
                onChange={(e) => setTaskForm({...taskForm, title: e.target.value})}
                placeholder="e.g. Design Homepage Mockup"
                required 
              />
            </div>
            
            <div className="ept-input-group">
              <label>Assign To</label>
              <select 
                className="ept-input"
                value={taskForm.assignedTo}
                onChange={(e) => setTaskForm({...taskForm, assignedTo: e.target.value})}
                required
              >
                <option value="">Select Employee</option>
                {activeEmployees.map(emp => (
                  <option key={emp._id} value={emp._id}>{emp.name || emp.email} — {emp.areaOfInterest}</option>
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
                placeholder="Brief details about the task..."
              ></textarea>
            </div>

            <button className="ept-btn">
              <FaPaperPlane style={{marginRight: '8px'}} /> Assign Task
            </button>
          </form>
        </div>

      </div>
      <ChatWidget user={user} />
    </PortalLayout>
  );
};

export default AdminDashboard;