import React, { useState } from 'react';
import { FaTimes, FaPaperPlane, FaUserCircle, FaClock } from 'react-icons/fa';
import '../../styles/task-drawer.css';

const TaskDetailDrawer = ({ task, isOpen, onClose, onAddNote, currentUser }) => {
  const [newNote, setNewNote] = useState('');

  const [hoursToLog, setHoursToLog] = useState('');
  if (!isOpen || !task) return null;

  const handleSendNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    onAddNote(task._id, newNote);
    setNewNote('');
  };

  return (
    <>
      {/* Background Overlay */}
      <div className="lexa-sys-overlay" onClick={onClose}></div>

      {/* Slide-out Drawer */}
      <div className="lexa-sys-drawer">
        
        {/* Header */}
        <div className="lexa-sys-drawer-header">
          <div>
            <span className={`lexa-sys-badge status-${task.status.replace(' ', '-').toLowerCase()}`}>
              {task.status}
            </span>
            <span className="lexa-sys-drawer-id">#TASK-{task._id.slice(-4).toUpperCase()}</span>
          </div>
          <button className="lexa-sys-close-btn" onClick={onClose}><FaTimes /></button>
        </div>

        {/* Content Body */}
        <div className="lexa-sys-drawer-body">
          <h2 className="lexa-sys-task-title">{task.title}</h2>
          
        <div className="lexa-sys-meta-grid">
            <div className="meta-item">
              <label>Assignee</label>
              <p><FaUserCircle /> {task.assignedToName || 'Unassigned'}</p>
            </div>
            <div className="meta-item">
              <label>Due Date</label>
              <p><FaClock /> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No Deadline'}</p>
            </div>
            {/* NEW: Time Tracked Display */}
            <div className="meta-item" style={{ gridColumn: 'span 2', background: 'rgba(6, 182, 212, 0.05)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(6, 182, 212, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <label style={{color: '#06B6D4'}}>Total Time Logged</label>
                <p style={{fontSize: '1.2rem', fontWeight: '700', color: '#F8FAFC'}}>{task.timeLogged || 0} <span style={{fontSize: '0.8rem', color: '#94A3B8'}}>Hours</span></p>
              </div>
              
              {/* Time Logging Input */}
              <div style={{display: 'flex', gap: '8px'}}>
                <input 
                  type="number" 
                  min="0.5" step="0.5" 
                  placeholder="Hrs" 
                  value={hoursToLog}
                  onChange={(e) => setHoursToLog(e.target.value)}
                  style={{ width: '60px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '6px', padding: '5px', textAlign: 'center' }}
                />
                <button 
                  onClick={async () => {
                    if(!hoursToLog) return;
                    try {
                      const res = await api.post(`/tasks/${task._id}/log-time`, { hours: hoursToLog });
                      // Call a function passed via props to update the local state instantly
                      if(onAddNote) onAddNote(task._id, `Logged ${hoursToLog} hours.`); // Trick to refresh drawer via parent
                      setHoursToLog('');
                    } catch(err) { console.error(err); }
                  }}
                  style={{ background: '#06B6D4', color: '#020617', border: 'none', borderRadius: '6px', padding: '5px 12px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  Log Time
                </button>
              </div>
            </div>
          </div>

          <div className="lexa-sys-desc-box">
            <label>Description</label>
            <p>{task.description || "No description provided."}</p>
          </div>

          {/* Activity & Notes Section */}
          <div className="lexa-sys-notes-section">
            <h3>Activity & Notes</h3>
            
            <div className="lexa-sys-notes-list">
              {task.notes && task.notes.length > 0 ? (
                task.notes.map((note, idx) => (
                  <div key={idx} className={`lexa-sys-note-item ${note.addedBy === currentUser.id ? 'my-note' : ''}`}>
                    <div className="note-avatar">{note.addedByName ? note.addedByName.charAt(0) : 'U'}</div>
                    <div className="note-content">
                      <div className="note-header">
                        <strong>{note.addedByName || 'User'}</strong>
                        <span>{new Date(note.createdAt).toLocaleString([], {hour: '2-digit', minute:'2-digit', month:'short', day:'numeric'})}</span>
                      </div>
                      <p className="note-text">{note.text}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="lexa-sys-no-notes">No notes added yet.</p>
              )}
            </div>

            {/* Add Note Form */}
            <form className="lexa-sys-note-input-area" onSubmit={handleSendNote}>
              <input 
                type="text" 
                placeholder="Add an update or note..." 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              />
              <button type="submit" disabled={!newNote.trim()}><FaPaperPlane /></button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetailDrawer;