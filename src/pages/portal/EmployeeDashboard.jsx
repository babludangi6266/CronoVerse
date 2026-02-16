import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axios';
import PortalLayout from '../../components/portal/PortalLayout';
import ChatWidget from '../../components/portal/ChatWidget';
import { FaPlus, FaTrash, FaCheckCircle, FaHourglassHalf, FaBriefcase, FaClipboardList, FaTag, FaUserShield, FaUserClock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../../styles/portal.css';

const EmployeeDashboard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('personal'); // 'personal' or 'assigned'
  
  // Form States
  const [todoForm, setTodoForm] = useState({ title: '', dueDate: '', frequency: 'One-time' });
  const [onboardText, setOnboardText] = useState('');
  const [onboardLink, setOnboardLink] = useState('');

  useEffect(() => {
    if (user?.status === 'Active') fetchTasks();
  }, [user]);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks/my-tasks');
      setTasks(res.data);
    } catch (err) { console.error("Failed to fetch tasks"); }
  };

  // --- ACTIONS ---
  const handleAddTodo = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks/personal', todoForm);
      fetchTasks();
      setTodoForm({ title: '', dueDate: '', frequency: 'One-time' }); 
      toast.success('Task added');
    } catch (err) { toast.error('Failed to add task'); }
  };

  const handleStatusUpdate = async (taskId, newStatus) => {
    try {
      await api.put(`/tasks/${taskId}/status`, { status: newStatus });
      fetchTasks();
      toast.success('Status updated');
    } catch (err) { toast.error('Update failed'); }
  };

  const handleDelete = async (taskId) => {
    if(!window.confirm("Delete this task?")) return;
    try {
      await api.delete(`/tasks/${taskId}`);
      fetchTasks();
      toast.success('Task deleted');
    } catch (err) { toast.error('Cannot delete admin tasks'); }
  };

  const submitOnboarding = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks/onboarding', { text: onboardText, link: onboardLink });
      toast.success("Submission received.");
    } catch (err) { toast.error("Error submitting."); }
  };

  // --- ONBOARDING VIEW (Same as before) ---
  if (user?.status === 'Pending' || user?.status === 'Rejected') {
    return (
      <div className="ept-wrapper ept-auth-container">
        <div className="ept-glass-card">
          <h2 className="ept-title">Onboarding Task</h2>
          <p className="ept-subtitle">
             {user.status === 'Rejected' ? <span style={{color: '#EF4444'}}>Submission rejected. Try again.</span> : "Complete to activate account."}
          </p>
          <div style={{background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px', marginBottom: '20px'}}>
            <strong>Task:</strong> Upload a sample project based on your role ({user.areaOfInterest}).
          </div>
          <form onSubmit={submitOnboarding}>
            <div className="ept-input-group">
              <label>Description</label>
              <textarea className="ept-input" rows="3" onChange={(e) => setOnboardText(e.target.value)}></textarea>
            </div>
            <div className="ept-input-group">
              <label>Project Link</label>
              <input className="ept-input" type="url" onChange={(e) => setOnboardLink(e.target.value)} required />
            </div>
            <button className="ept-btn">Submit for Review</button>
          </form>
        </div>
      </div>
    );
  }

  // --- MAIN DASHBOARD ---
  const personalTasks = tasks.filter(t => t.isPersonal);
  const assignedTasks = tasks.filter(t => !t.isPersonal);

  return (
    <PortalLayout>
      <h1 className="ept-title" style={{textAlign: 'left', marginBottom: '10px'}}>My Workspace</h1>
      <p style={{color: '#94A3B8', marginBottom: '30px'}}>Welcome back, {user?.name}</p>
      
      {/* STATS ROW */}
      <div className="ept-grid">
        <div className="ept-card" style={{borderLeft: '4px solid #06B6D4'}}>
          <h3><FaClipboardList /> Total Tasks</h3>
          <div className="value">{tasks.length}</div>
        </div>
        <div className="ept-card" style={{borderLeft: '4px solid #EAB308'}}>
          <h3><FaHourglassHalf /> Pending</h3>
          <div className="value" style={{color: '#EAB308'}}>{tasks.filter(t => t.status !== 'Completed').length}</div>
        </div>
        <div className="ept-card" style={{borderLeft: '4px solid #10B981'}}>
          <h3><FaCheckCircle /> Completed</h3>
          <div className="value" style={{color: '#10B981'}}>{tasks.filter(t => t.status === 'Completed').length}</div>
        </div>
      </div>

      {/* --- TABS --- */}
      <div style={{display: 'flex', gap: '20px', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
        <div 
          onClick={() => setActiveTab('personal')}
          style={{
            padding: '10px 20px', cursor: 'pointer', fontWeight: '600',
            borderBottom: activeTab === 'personal' ? '2px solid #06B6D4' : '2px solid transparent',
            color: activeTab === 'personal' ? '#06B6D4' : '#94A3B8'
          }}
        >
          <FaUserClock style={{marginRight: '8px'}}/> My To-Do List
        </div>
        <div 
          onClick={() => setActiveTab('assigned')}
          style={{
            padding: '10px 20px', cursor: 'pointer', fontWeight: '600',
            borderBottom: activeTab === 'assigned' ? '2px solid #06B6D4' : '2px solid transparent',
            color: activeTab === 'assigned' ? '#06B6D4' : '#94A3B8'
          }}
        >
          <FaUserShield style={{marginRight: '8px'}}/> Assigned Work
          {assignedTasks.filter(t => t.status !== 'Completed').length > 0 && (
            <span style={{marginLeft: '8px', background: '#EF4444', color: 'white', padding: '2px 6px', borderRadius: '10px', fontSize: '0.7rem'}}>
              {assignedTasks.filter(t => t.status !== 'Completed').length}
            </span>
          )}
        </div>
      </div>

      {/* --- TAB CONTENT AREA --- */}
      <div className="ept-card" style={{minHeight: '400px'}}>
        
        {/* === PERSONAL TAB === */}
        {activeTab === 'personal' && (
          <>
            {/* Wider Form Layout */}
            <form onSubmit={handleAddTodo} style={{
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '15px', 
              marginBottom: '30px',
              padding: '20px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '12px'
            }}>
              <div style={{gridColumn: 'span 2'}}>
                <label style={{display: 'block', marginBottom: '5px', color: '#94A3B8', fontSize: '0.8rem'}}>Task Title</label>
                <input 
                  className="ept-input" 
                  placeholder="What needs to be done?" 
                  value={todoForm.title}
                  onChange={(e) => setTodoForm({...todoForm, title: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '5px', color: '#94A3B8', fontSize: '0.8rem'}}>Frequency</label>
                <select
                  className="ept-input"
                  value={todoForm.frequency}
                  onChange={(e) => setTodoForm({...todoForm, frequency: e.target.value})}
                >
                  <option value="One-time">One-time</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>

              <div>
                <label style={{display: 'block', marginBottom: '5px', color: '#94A3B8', fontSize: '0.8rem'}}>Due Date</label>
                <input 
                  type="date"
                  className="ept-input" 
                  value={todoForm.dueDate}
                  onChange={(e) => setTodoForm({...todoForm, dueDate: e.target.value})}
                />
              </div>
              
              <div style={{display: 'flex', alignItems: 'end'}}>
                <button className="ept-btn" style={{height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <FaPlus style={{marginRight: '5px'}}/> Add Task
                </button>
              </div>
            </form>

            <div className="task-list">
              {personalTasks.map(task => (
                <div key={task._id} className={`task-item ${task.status === 'Completed' ? 'completed' : ''}`}>
                  <div style={{flex: 1}}>
                     <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                       <span style={{fontWeight: '600', fontSize: '1.05rem', textDecoration: task.status === 'Completed' ? 'line-through' : 'none'}}>
                         {task.title}
                       </span>
                       {task.frequency !== 'One-time' && (
                         <span style={{fontSize: '0.7rem', background: '#1E293B', border: '1px solid #334155', color: '#94A3B8', padding: '2px 8px', borderRadius: '12px'}}>
                           <FaTag style={{marginRight:'4px'}}/> {task.frequency}
                         </span>
                       )}
                     </div>
                     <div style={{fontSize: '0.85rem', color: '#64748B', marginTop: '4px'}}>
                       Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No Date'}
                     </div>
                  </div>
                  
                  <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                    <input 
                      type="checkbox" 
                      checked={task.status === 'Completed'} 
                      onChange={() => handleStatusUpdate(task._id, task.status === 'Completed' ? 'Pending' : 'Completed')}
                      style={{width: '20px', height: '20px', cursor: 'pointer', accentColor: '#10B981'}}
                    />
                    <FaTrash className="action-icon delete" onClick={() => handleDelete(task._id)} style={{color: '#94A3B8'}} />
                  </div>
                </div>
              ))}
              {personalTasks.length === 0 && <p style={{color: '#64748B', textAlign: 'center', padding: '40px'}}>No personal tasks yet. Add one above!</p>}
            </div>
          </>
        )}

        {/* === ASSIGNED TAB === */}
        {activeTab === 'assigned' && (
          <div className="task-list">
            {assignedTasks.map(task => (
              <div key={task._id} className="task-item assigned" style={{flexDirection: 'column', alignItems: 'stretch', gap: '15px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                   <div>
                     <div style={{fontWeight: '700', fontSize: '1.2rem', color: '#F8FAFC'}}>{task.title}</div>
                     <div style={{fontSize: '0.85rem', color: '#06B6D4', marginTop: '4px'}}>Due: {new Date(task.dueDate).toLocaleDateString()}</div>
                   </div>
                   <span className={`ept-status st-${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span>
                </div>

                <div style={{background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '8px', color: '#CBD5E1', lineHeight: '1.5'}}>
                  {task.description}
                </div>
                
                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
                  <span style={{fontSize: '0.9rem', color: '#94A3B8'}}>Update Status:</span>
                  <select 
                    className="ept-input" 
                    style={{width: 'auto', padding: '8px 15px'}}
                    value={task.status}
                    onChange={(e) => handleStatusUpdate(task._id, e.target.value)}
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
            ))}
            {assignedTasks.length === 0 && <p style={{color: '#64748B', textAlign: 'center', padding: '40px'}}>No work assigned from Admin yet.</p>}
          </div>
        )}
      </div>

      <ChatWidget user={user} />
    </PortalLayout>
  );
};

export default EmployeeDashboard;