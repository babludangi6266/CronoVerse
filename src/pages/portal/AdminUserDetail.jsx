import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/axios';
import PortalLayout from '../../components/portal/PortalLayout';
import '../../styles/portal.css';

const AdminUserDetail = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Fetch User's Tasks
    api.get(`/tasks/user/${id}`).then(res => setTasks(res.data));
    // Fetch User Info (Optional, or pass via state)
    // For now, we assume tasks return assignedTo info or we just list tasks
  }, [id]);

  return (
    <PortalLayout>
      <h1 className="ept-title" style={{textAlign: 'left'}}>User Activity Log</h1>
      
      <div className="ept-grid">
         <div className="ept-card">
           <h3>Total Tasks</h3>
           <div className="value">{tasks.length}</div>
         </div>
         <div className="ept-card">
           <h3>Completion Rate</h3>
           <div className="value" style={{color: '#10B981'}}>
             {tasks.length > 0 ? Math.round((tasks.filter(t => t.status === 'Completed').length / tasks.length) * 100) : 0}%
           </div>
         </div>
      </div>

      <div className="ept-card">
        <h3>Task History</h3>
        <table className="ept-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Created At</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>
                   {task.isPersonal ? <span style={{color: '#94A3B8'}}>Personal To-Do</span> : <span style={{color: '#06B6D4'}}>Admin Assigned</span>}
                </td>
                <td>{new Date(task.createdAt).toLocaleDateString()}</td>
                <td>
                  <span className={`ept-status st-${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span>
                </td>
              </tr>
            ))}
            {tasks.length === 0 && <tr><td colSpan="4" style={{textAlign: 'center'}}>No activity found.</td></tr>}
          </tbody>
        </table>
      </div>
    </PortalLayout>
  );
};

export default AdminUserDetail;