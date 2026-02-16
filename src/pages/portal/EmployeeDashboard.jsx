import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axios';
import PortalLayout from '../../components/portal/PortalLayout';
import ChatWidget from '../../components/portal/ChatWidget';
import { FaPlus, FaTrash, FaCheckCircle, FaHourglassHalf, FaBriefcase, FaClipboardList } from 'react-icons/fa';
import '../../styles/portal.css';

const EmployeeDashboard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  
  // Form States
  const [todoForm, setTodoForm] = useState({ title: '', dueDate: '', frequency: 'One-time' });
  const [onboardText, setOnboardText] = useState('');
  const [onboardLink, setOnboardLink] = useState('');

  useEffect(() => {
    if (user?.status === 'Active') {
      fetchTasks();
    }
  }, [user]);

  const fetchTasks = async () => {
    const res = await api.get('/tasks/my-tasks');
    setTasks(res.data);
  };

  // --- ACTIONS ---
  const handleAddTodo = async (e) => {
  e.preventDefault();
  try {
    await api.post('/tasks/personal', todoForm);
    fetchTasks();
    setTodoForm({ title: '', dueDate: '', frequency: 'One-time' }); // Reset with default
  } catch (err) { alert('Failed to add task'); }
};

  const handleStatusUpdate = async (taskId, newStatus) => {
    try {
      await api.put(`/tasks/${taskId}/status`, { status: newStatus });
      fetchTasks();
    } catch (err) { toast.error('Update failed'); }
  };

  const handleDelete = async (taskId) => {
    if(!window.confirm("Delete this task?")) return;
    try {
      await api.delete(`/tasks/${taskId}`);
      fetchTasks();
    } catch (err) { toast.error('Cannot delete admin assigned tasks'); }
  };

  const submitOnboarding = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks/onboarding', { text: onboardText, link: onboardLink });
      toast.success("Submission received. We will notify you in 24 hours.");
    } catch (err) { toast.error("Error submitting."); }
  };

  // --- ONBOARDING VIEW ---
  if (user?.status === 'Pending' || user?.status === 'Rejected') {
    return (
      <div className="ept-wrapper ept-auth-container">
        <div className="ept-glass-card">
          <h2 className="ept-title">Onboarding Task</h2>
          <p className="ept-subtitle">
             {user.status === 'Rejected' ? <span style={{color: '#EF4444'}}>Previous submission rejected. Please try again.</span> : "Please complete this task to activate your account."}
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
              <label>Project Link (Drive/Github)</label>
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
      <h1 className="ept-title" style={{textAlign: 'left'}}>My Workspace</h1>
      
      {/* STATS */}
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

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start'}}>
        
        {/* --- LEFT: PERSONAL TO-DO --- */}
        <div className="ept-card">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
            <h3>My To-Do List</h3>
            <span style={{fontSize: '0.8rem', color: '#94A3B8'}}>Private</span>
          </div>

          {/* Add Task Form */}
          <form onSubmit={handleAddTodo} style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
            <input 
              className="ept-input" 
              placeholder="New Task..." 
              value={todoForm.title}
              onChange={(e) => setTodoForm({...todoForm, title: e.target.value})}
              required
            />
            <input 
              type="date"
              className="ept-input" 
              style={{width: '140px'}}
              value={todoForm.dueDate}
              onChange={(e) => setTodoForm({...todoForm, dueDate: e.target.value})}
            />
            <button className="ept-btn" style={{width: 'auto', padding: '10px 15px'}}><FaPlus /></button>
          </form>

          {/* List */}
          <div className="task-list">
            {personalTasks.map(task => (
              <div key={task._id} className={`task-item ${task.status === 'Completed' ? 'completed' : ''}`}>
                <div style={{flex: 1}}>
                   <div style={{fontWeight: '600', textDecoration: task.status === 'Completed' ? 'line-through' : 'none'}}>{task.title}</div>
                   <div style={{fontSize: '0.8rem', color: '#64748B'}}>Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No Date'}</div>
                </div>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  <input 
                    type="checkbox" 
                    checked={task.status === 'Completed'} 
                    onChange={() => handleStatusUpdate(task._id, task.status === 'Completed' ? 'Pending' : 'Completed')}
                    style={{width: '18px', height: '18px', cursor: 'pointer'}}
                  />
                  <FaTrash className="action-icon delete" onClick={() => handleDelete(task._id)} />
                </div>
              </div>
            ))}
            {personalTasks.length === 0 && <p style={{color: '#64748B', textAlign: 'center'}}>No personal tasks.</p>}
          </div>
        </div>

        {/* --- RIGHT: ADMIN ASSIGNED TASKS --- */}
     <div className="ept-card">
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
    <h3>My To-Do List</h3>
    <span style={{fontSize: '0.8rem', color: '#94A3B8'}}>Private</span>
  </div>

  {/* UPDATED FORM */}
  <form onSubmit={handleAddTodo} style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr auto', gap: '10px', marginBottom: '20px'}}>
    
    <input 
      className="ept-input" 
      placeholder="New Task..." 
      value={todoForm.title}
      onChange={(e) => setTodoForm({...todoForm, title: e.target.value})}
      required
    />
    
    {/* NEW FREQUENCY SELECT */}
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

    <input 
      type="date"
      className="ept-input" 
      value={todoForm.dueDate}
      onChange={(e) => setTodoForm({...todoForm, dueDate: e.target.value})}
    />
    
    <button className="ept-btn" style={{padding: '10px 15px'}}><FaPlus /></button>
  </form>

  {/* List (Update to show frequency tag) */}
  <div className="task-list">
    {personalTasks.map(task => (
      <div key={task._id} className={`task-item ${task.status === 'Completed' ? 'completed' : ''}`}>
        <div style={{flex: 1}}>
           <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
             <span style={{fontWeight: '600', textDecoration: task.status === 'Completed' ? 'line-through' : 'none'}}>
               {task.title}
             </span>
             {/* Show Tag if not One-time */}
             {task.frequency !== 'One-time' && (
               <span style={{fontSize: '0.65rem', background: '#334155', padding: '2px 6px', borderRadius: '4px'}}>
                 {task.frequency}
               </span>
             )}
           </div>
           <div style={{fontSize: '0.8rem', color: '#64748B'}}>Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No Date'}</div>
        </div>
        {/* ... checkboxes and delete button remain same ... */}
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
           <input 
             type="checkbox" 
             checked={task.status === 'Completed'} 
             onChange={() => handleStatusUpdate(task._id, task.status === 'Completed' ? 'Pending' : 'Completed')}
             style={{width: '18px', height: '18px', cursor: 'pointer'}}
           />
           <FaTrash className="action-icon delete" onClick={() => handleDelete(task._id)} />
        </div>
      </div>
    ))}
  </div>
</div>

      </div>

      <ChatWidget user={user} />
    </PortalLayout>
  );
};

export default EmployeeDashboard;