import React, { useState } from 'react';
import { FaTimes, FaBuilding, FaUserTie, FaEnvelope, FaPhoneAlt, FaDollarSign, FaHistory, FaPlus } from 'react-icons/fa';
import '../../styles/client-drawer.css';

const ClientDetailDrawer = ({ client, isOpen, onClose, onAddLog }) => {
  const [newLog, setNewLog] = useState('');

  if (!isOpen || !client) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newLog.trim()) return;
    onAddLog(client._id, newLog);
    setNewLog('');
  };

  return (
    <>
      <div className="lexa-cd-overlay" onClick={onClose}></div>
      <div className="lexa-cd-drawer">
        
        <div className="lexa-cd-header">
          <div>
            <h2 className="lexa-cd-company">{client.companyName}</h2>
            <span className="lexa-cd-status-pill">{client.status}</span>
          </div>
          <button className="lexa-cd-close" onClick={onClose}><FaTimes /></button>
        </div>

        <div className="lexa-cd-body">
          <div className="lexa-cd-info-grid">
            <div className="lexa-cd-info-item">
              <span className="lexa-cd-info-label">Contact Person</span>
              <span className="lexa-cd-info-value"><FaUserTie style={{color:'#06B6D4'}}/> {client.contactPerson}</span>
            </div>
            <div className="lexa-cd-info-item">
              <span className="lexa-cd-info-label">Est. Value</span>
              <span className="lexa-cd-info-value" style={{color: '#10B981'}}><FaDollarSign/> {client.projectValue?.toLocaleString()}</span>
            </div>
            <div className="lexa-cd-info-item">
              <span className="lexa-cd-info-label">Email</span>
              <span className="lexa-cd-info-value"><FaEnvelope style={{color:'#06B6D4'}}/> {client.email}</span>
            </div>
            <div className="lexa-cd-info-item">
              <span className="lexa-cd-info-label">Phone</span>
              <span className="lexa-cd-info-value"><FaPhoneAlt style={{color:'#06B6D4'}}/> {client.phone || 'N/A'}</span>
            </div>
          </div>

          <div className="lexa-cd-log-area">
            <h3 className="lexa-cd-log-title"><FaHistory /> Interaction History</h3>
            
            {/* Render Notes/Logs */}
            {client.notes && client.notes.length > 0 ? (
              client.notes.map((note, idx) => (
                <div key={idx} className="lexa-cd-log-box">
                  <div className="lexa-cd-log-meta">
                    <strong>Logged by {note.addedByName || 'Admin'}</strong>
                    <span>{new Date(note.createdAt).toLocaleString([], {hour: '2-digit', minute:'2-digit', month:'short', day:'numeric'})}</span>
                  </div>
                  <p className="lexa-cd-log-text">{note.text}</p>
                </div>
              ))
            ) : (
              <p style={{color: '#64748B', fontStyle: 'italic', marginBottom: '20px'}}>No interactions logged yet.</p>
            )}

            {/* Add New Log Form */}
            <form className="lexa-cd-input-wrapper" onSubmit={handleSubmit}>
              <textarea 
                placeholder="Log a call, email, or meeting note..." 
                value={newLog}
                onChange={(e) => setNewLog(e.target.value)}
              />
              <button className="lexa-cd-btn" type="submit" disabled={!newLog.trim()}>
                <FaPlus /> Save Log
              </button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default ClientDetailDrawer;