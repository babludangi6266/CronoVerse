

// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import api from '../../api/axios';
// import PortalLayout from '../../components/portal/PortalLayout';
// import ChatWidget from '../../components/portal/ChatWidget';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import { 
//   FaUserClock, FaTasks, FaCheckCircle, FaTimesCircle, 
//   FaPaperPlane, FaChartBar, FaChartPie , FaQuoteLeft , FaExternalLinkAlt , 
// } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import '../../styles/portal.css';
// import '../../styles/analytics.css'; // <--- NEW CSS IMPORT

// const AdminDashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0, pendingUsers: 0, completedTasks: 0 });
//   const [pendingUsers, setPendingUsers] = useState([]);
//   const [activeEmployees, setActiveEmployees] = useState([]);
  
//   // Analytics Data States
//   const [pipelineData, setPipelineData] = useState([]);
//   const [taskChartData, setTaskChartData] = useState([]);
  
//   const [taskForm, setTaskForm] = useState({ title: '', description: '', assignedTo: '', dueDate: '' });

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const statsRes = await api.get('/admin/reports');
//       setStats(statsRes.data);

//       const pendingRes = await api.get('/admin/users?status=Pending');
//       setPendingUsers(pendingRes.data);

//       const activeRes = await api.get('/admin/users?status=Active');
//       setActiveEmployees(activeRes.data);

//       // Fetch Clients for Revenue Pipeline Chart
//       const clientRes = await api.get('/clients');
//       calculatePipeline(clientRes.data);

//       // Fetch Tasks for Task Health Donut Chart
//       const tasksRes = await api.get('/tasks/all');
//       calculateTaskHealth(tasksRes.data);

//     } catch (err) {
//       console.error("Failed to load admin data", err);
//     }
//   };

//   // --- ANALYTICS CALCULATIONS ---
//   const calculatePipeline = (clients) => {
//     const pipeline = { 'Lead': 0, 'Negotiating': 0, 'Active Client': 0 };
//     clients.forEach(c => {
//       if (pipeline[c.status] !== undefined) {
//         pipeline[c.status] += (c.projectValue || 0);
//       }
//     });
    
//     setPipelineData([
//       { name: 'Leads', value: pipeline['Lead'], fill: '#94A3B8' },
//       { name: 'Negotiating', value: pipeline['Negotiating'], fill: '#EAB308' },
//       { name: 'Active', value: pipeline['Active Client'], fill: '#10B981' }
//     ]);
//   };

//   const calculateTaskHealth = (tasks) => {
//     const health = { 'Pending': 0, 'In Progress': 0, 'Completed': 0 };
//     tasks.forEach(t => {
//       if (health[t.status] !== undefined) health[t.status]++;
//     });

//     setTaskChartData([
//       { name: 'Pending', value: health['Pending'], color: '#EAB308' },
//       { name: 'In Progress', value: health['In Progress'], color: '#3B82F6' },
//       { name: 'Completed', value: health['Completed'], color: '#10B981' }
//     ]);
//   };

//   // ... keep handleReview and handleAssignTask the same ...
//   const handleReview = async (userId, action) => { /* ... existing code ... */ };
//   const handleAssignTask = async (e) => { /* ... existing code ... */ };

//   return (
//     <PortalLayout>
//       <h1 className="ept-title" style={{textAlign: 'left', marginBottom: '20px'}}>Command Center</h1>

//       {/* --- 1. NEW INTERACTIVE CHARTS --- */}
//       <div className="lexa-anl-grid">
        
//         {/* Revenue Pipeline Bar Chart */}
//         <div className="lexa-anl-card">
//           <h3 className="lexa-anl-title"><FaChartBar style={{color: '#06B6D4'}}/> Revenue Pipeline</h3>
//           <div className="lexa-anl-chart-wrapper">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={pipelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                 <XAxis dataKey="name" stroke="#94A3B8" />
//                 <YAxis stroke="#94A3B8" tickFormatter={(value) => `₹${value/1000}k`} />
//                 <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#020617', borderColor: '#06B6D4', borderRadius: '8px'}} formatter={(value) => `₹${value.toLocaleString()}`} />
//                 <Bar dataKey="value" radius={[6, 6, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Task Health Donut Chart */}
//         <div className="lexa-anl-card">
//           <h3 className="lexa-anl-title"><FaChartPie style={{color: '#06B6D4'}}/> Global Task Health</h3>
//           <div className="lexa-anl-chart-wrapper">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={taskChartData}
//                   cx="50%" cy="50%"
//                   innerRadius={70} outerRadius={100}
//                   paddingAngle={5}
//                   dataKey="value"
//                   stroke="none"
//                 >
//                   {taskChartData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Tooltip contentStyle={{backgroundColor: '#020617', borderColor: '#06B6D4', borderRadius: '8px'}} />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* --- 2. EXISTING STATS GRID --- */}
//       <div className="ept-grid" style={{marginBottom: '30px'}}>
//         <div className="ept-card">
//           <h3>Total Workforce</h3>
//           <div className="value">{stats.totalUsers}</div>
//         </div>
//         <div className="ept-card" style={{borderColor: '#EAB308'}}>
//           <h3>Pending Approvals</h3>
//           <div className="value" style={{color: '#EAB308'}}>{stats.pendingUsers}</div>
//         </div>
//         <div className="ept-card" style={{borderColor: '#10B981'}}>
//           <h3>Active Members</h3>
//           <div className="value" style={{color: '#10B981'}}>{stats.activeUsers}</div>
//         </div>
//         <div className="ept-card" style={{borderColor: '#3B82F6'}}>
//           <h3>Tasks Completed</h3>
//           <div className="value" style={{color: '#3B82F6'}}>{stats.completedTasks}</div>
//         </div>
//       </div>

//       <div style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px', alignItems: 'start'}}>
        
//         {/* --- LEFT COL: PENDING APPROVALS --- */}
//         <div className="ept-card">
//           <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px'}}>
//             <h3 style={{margin: 0, display: 'flex', alignItems: 'center', gap: '10px'}}>
//               <FaUserClock size={18}/> Pending Onboarding ({pendingUsers.length})
//             </h3>
//           </div>

//           {pendingUsers.length === 0 ? (
//             <div style={{textAlign: 'center', padding: '40px', color: '#94A3B8', background: 'rgba(255,255,255,0.02)', borderRadius: '12px'}}>
//               <FaCheckCircle size={30} style={{marginBottom: '10px', opacity: 0.5}}/>
//               <p>All cleared! No pending approvals.</p>
//             </div>
//           ) : (
//             <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
//               {pendingUsers.map(user => (
//                 <div key={user._id} style={{
//                   background: 'rgba(30, 41, 59, 0.5)', 
//                   borderRadius: '16px', 
//                   border: '1px solid rgba(255,255,255,0.08)',
//                   overflow: 'hidden'
//                 }}>
//                   {/* Candidate Header */}
//                   <div style={{
//                     padding: '15px 20px', 
//                     background: 'rgba(0,0,0,0.2)', 
//                     display: 'flex', 
//                     justifyContent: 'space-between', 
//                     alignItems: 'center',
//                     borderBottom: '1px solid rgba(255,255,255,0.05)'
//                   }}>
//                     <div>
//                       <h4 style={{margin: 0, color: '#F8FAFC', fontSize: '1rem'}}>{user.name || user.email}</h4>
//                       <div style={{fontSize: '0.8rem', color: '#06B6D4', marginTop: '2px'}}>{user.areaOfInterest}</div>
//                     </div>
//                     <span style={{
//                       padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600',
//                       background: user.type === 'Full-Time' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(236, 72, 153, 0.15)',
//                       color: user.type === 'Full-Time' ? '#60A5FA' : '#F472B6'
//                     }}>
//                       {user.type}
//                     </span>
//                   </div>
                  
//                   {/* Submission Content */}
//                   <div style={{padding: '20px'}}>
//                     <div style={{marginBottom: '15px'}}>
//                       <label style={{fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px', display: 'block'}}>Submission Note</label>
//                       <div style={{
//                         background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', 
//                         color: '#CBD5E1', fontSize: '0.9rem', lineHeight: '1.5', display: 'flex', gap: '10px'
//                       }}>
//                         <FaQuoteLeft size={14} color="#475569" style={{minWidth: '14px'}}/>
//                         {user.onboardingSubmission?.text || "No description provided."}
//                       </div>
//                     </div>

//                     {user.onboardingSubmission?.link && (
//                        <div style={{marginBottom: '20px'}}>
//                          <label style={{fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px', display: 'block'}}>Project Link</label>
//                          <a 
//                            href={user.onboardingSubmission.link} 
//                            target="_blank" 
//                            rel="noreferrer" 
//                            style={{
//                              display: 'inline-flex', alignItems: 'center', gap: '8px',
//                              background: 'rgba(6, 182, 212, 0.1)', color: '#22D3EE',
//                              padding: '8px 14px', borderRadius: '8px', textDecoration: 'none',
//                              fontSize: '0.9rem', fontWeight: '500', transition: '0.2s'
//                            }}
//                            onMouseOver={(e) => e.target.style.background = 'rgba(6, 182, 212, 0.2)'}
//                            onMouseOut={(e) => e.target.style.background = 'rgba(6, 182, 212, 0.1)'}
//                          >
//                            <FaExternalLinkAlt size={12}/> View Submission
//                          </a>
//                        </div>
//                     )}

//                     {/* Actions */}
//                     <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px'}}>
//                       <button 
//                         onClick={() => handleReview(user._id, 'Reject')}
//                         className="ept-btn" 
//                         style={{
//                           background: 'transparent', border: '1px solid #EF4444', color: '#EF4444', 
//                           display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'
//                         }}
//                       >
//                         <FaTimesCircle /> Reject
//                       </button>
//                       <button 
//                         onClick={() => handleReview(user._id, 'Approve')}
//                         className="ept-btn" 
//                         style={{
//                           background: '#10B981', color: 'white', 
//                           display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'
//                         }}
//                       >
//                         <FaCheckCircle /> Approve Candidate
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* --- RIGHT COL: ASSIGN TASK --- */}
//         <div className="ept-card" style={{position: 'sticky', top: '20px'}}>
//           <h3><FaTasks /> Assign New Task</h3>
//           <p style={{fontSize: '0.85rem', color: '#94A3B8', marginBottom: '20px'}}>Assign work to active employees.</p>
          
//           <form onSubmit={handleAssignTask}>
//             <div className="ept-input-group">
//               <label>Task Title</label>
//               <input 
//                 className="ept-input" 
//                 value={taskForm.title}
//                 onChange={(e) => setTaskForm({...taskForm, title: e.target.value})}
//                 placeholder="e.g. Design Homepage Mockup"
//                 required 
//               />
//             </div>
            
//             <div className="ept-input-group">
//               <label>Assign To</label>
//               <select 
//                 className="ept-input"
//                 value={taskForm.assignedTo}
//                 onChange={(e) => setTaskForm({...taskForm, assignedTo: e.target.value})}
//                 required
//               >
//                 <option value="">Select Employee</option>
//                 {activeEmployees.map(emp => (
//                   <option key={emp._id} value={emp._id}>{emp.name || emp.email} — {emp.areaOfInterest}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="ept-input-group">
//               <label>Due Date</label>
//               <input 
//                 type="date" 
//                 className="ept-input"
//                 value={taskForm.dueDate}
//                 onChange={(e) => setTaskForm({...taskForm, dueDate: e.target.value})}
//                 required
//               />
//             </div>

//             <div className="ept-input-group">
//               <label>Description</label>
//               <textarea 
//                 className="ept-input" 
//                 rows="3"
//                 value={taskForm.description}
//                 onChange={(e) => setTaskForm({...taskForm, description: e.target.value})}
//                 placeholder="Brief details about the task..."
//               ></textarea>
//             </div>

//             <button className="ept-btn">
//               <FaPaperPlane style={{marginRight: '8px'}} /> Assign Task
//             </button>
//           </form>
//         </div>

//       </div>
//       <ChatWidget user={user} />
//     </PortalLayout>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axios';
import PortalLayout from '../../components/portal/PortalLayout';
import ChatWidget from '../../components/portal/ChatWidget';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { 
  FaUserClock, FaTasks, FaCheckCircle, FaTimesCircle, 
  FaPaperPlane, FaChartBar, FaChartPie, FaQuoteLeft, FaExternalLinkAlt 
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../../styles/portal.css';
import '../../styles/analytics.css';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0, pendingUsers: 0, completedTasks: 0 });
  const [pendingUsers, setPendingUsers] = useState([]);
  const [activeEmployees, setActiveEmployees] = useState([]);
  
  // Analytics Data States
  const [pipelineData, setPipelineData] = useState([]);
  const [taskChartData, setTaskChartData] = useState([]);
  
  const [taskForm, setTaskForm] = useState({ title: '', description: '', assignedTo: '', dueDate: '' });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const statsRes = await api.get('/admin/reports');
      setStats(statsRes.data);

      const pendingRes = await api.get('/admin/users?status=Pending');
      setPendingUsers(pendingRes.data);

      const activeRes = await api.get('/admin/users?status=Active');
      setActiveEmployees(activeRes.data);

      // Fetch Clients for Revenue Pipeline Chart
      const clientRes = await api.get('/clients');
      calculatePipeline(clientRes.data);

      // Fetch Tasks for Task Health Donut Chart
      const tasksRes = await api.get('/tasks/all');
      calculateTaskHealth(tasksRes.data);

    } catch (err) {
      console.error("Failed to load admin data", err);
    }
  };

  // --- ANALYTICS CALCULATIONS ---
  const calculatePipeline = (clients) => {
    const pipeline = { 'Lead': 0, 'Negotiating': 0, 'Active Client': 0 };
    clients.forEach(c => {
      if (pipeline[c.status] !== undefined) {
        pipeline[c.status] += (c.projectValue || 0);
      }
    });
    
    setPipelineData([
      { name: 'Leads', value: pipeline['Lead'], fill: '#94A3B8' },
      { name: 'Negotiating', value: pipeline['Negotiating'], fill: '#EAB308' },
      { name: 'Active', value: pipeline['Active Client'], fill: '#10B981' }
    ]);
  };

  const calculateTaskHealth = (tasks) => {
    const health = { 'Pending': 0, 'In Progress': 0, 'Completed': 0 };
    tasks.forEach(t => {
      if (health[t.status] !== undefined) health[t.status]++;
    });

    setTaskChartData([
      { name: 'Pending', value: health['Pending'], color: '#EAB308' },
      { name: 'In Progress', value: health['In Progress'], color: '#3B82F6' },
      { name: 'Completed', value: health['Completed'], color: '#10B981' }
    ]);
  };

  // --- RESTORED LOGIC ---
  const handleReview = async (userId, action) => {
    if(!window.confirm(`Are you sure you want to ${action} this candidate?`)) return;
    try {
      await api.post('/admin/review', { userId, action });
      toast.success(`User ${action}d successfully`);
      fetchDashboardData(); // Refresh lists and charts instantly
    } catch (err) {
      toast.error("Action failed");
    }
  };

  // --- RESTORED LOGIC ---
  const handleAssignTask = async (e) => {
    e.preventDefault(); // THIS PREVENTS THE PAGE REFRESH!
    try {
      await api.post('/tasks/assign', taskForm);
      toast.success('Task Assigned Successfully!');
      setTaskForm({ title: '', description: '', assignedTo: '', dueDate: '' }); 
      fetchDashboardData(); // Refresh the stats
    } catch (err) {
      toast.error('Failed to assign task');
    }
  };

  return (
    <PortalLayout>
      <h1 className="ept-title" style={{textAlign: 'left', marginBottom: '20px'}}>Command Center</h1>

      {/* --- 1. NEW INTERACTIVE CHARTS --- */}
      <div className="lexa-anl-grid">
        {/* Revenue Pipeline Bar Chart */}
        <div className="lexa-anl-card">
          <h3 className="lexa-anl-title"><FaChartBar style={{color: '#06B6D4'}}/> Revenue Pipeline</h3>
          <div className="lexa-anl-chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" tickFormatter={(value) => `₹${value/1000}k`} />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#020617', borderColor: '#06B6D4', borderRadius: '8px'}} formatter={(value) => `₹${value.toLocaleString()}`} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Task Health Donut Chart */}
        <div className="lexa-anl-card">
          <h3 className="lexa-anl-title"><FaChartPie style={{color: '#06B6D4'}}/> Global Task Health</h3>
          <div className="lexa-anl-chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskChartData}
                  cx="50%" cy="50%"
                  innerRadius={70} outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {taskChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{backgroundColor: '#020617', borderColor: '#06B6D4', borderRadius: '8px'}} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* --- 2. EXISTING STATS GRID --- */}
      <div className="ept-grid" style={{marginBottom: '30px'}}>
        <div className="ept-card">
          <h3>Total Workforce</h3>
          <div className="value">{stats.totalUsers}</div>
        </div>
        <div className="ept-card" style={{borderColor: '#EAB308'}}>
          <h3>Pending Approvals</h3>
          <div className="value" style={{color: '#EAB308'}}>{stats.pendingUsers}</div>
        </div>
        <div className="ept-card" style={{borderColor: '#10B981'}}>
          <h3>Active Members</h3>
          <div className="value" style={{color: '#10B981'}}>{stats.activeUsers}</div>
        </div>
        <div className="ept-card" style={{borderColor: '#3B82F6'}}>
          <h3>Tasks Completed</h3>
          <div className="value" style={{color: '#3B82F6'}}>{stats.completedTasks}</div>
        </div>
      </div>

      {/* --- 3. BOTTOM SECTION (Approvals & Assign Task) --- */}
      <div style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px', alignItems: 'start'}}>
        
        {/* Pending Approvals */}
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
                    padding: '15px 20px', background: 'rgba(0,0,0,0.2)', display: 'flex', 
                    justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)'
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
                           href={user.onboardingSubmission.link} target="_blank" rel="noreferrer" 
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

        {/* Assign Task Form */}
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

            <button type="submit" className="ept-btn">
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