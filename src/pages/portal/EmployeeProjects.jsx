import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import PortalLayout from '../../components/portal/PortalLayout';
import { FaBuilding, FaUserTie, FaEnvelope, FaCodeBranch } from 'react-icons/fa';

const EmployeeProjects = () => {
  const [activeClients, setActiveClients] = useState([]);

  useEffect(() => {
    api.get('/clients').then(res => setActiveClients(res.data)).catch(console.error);
  }, []);

  return (
    <PortalLayout>
      <div style={{marginBottom: '30px'}}>
        <h1 className="ept-title" style={{textAlign: 'left', margin: 0}}>Active Projects</h1>
        <p style={{color: '#94A3B8'}}>The companies we are currently building for.</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px'}}>
        {activeClients.map(client => (
          <div key={client._id} style={{
            background: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            borderRadius: '16px',
            padding: '25px',
            transition: '0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
              <div style={{width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#06B6D4', fontSize: '1.5rem'}}>
                <FaCodeBranch />
              </div>
              <div>
                <h3 style={{margin: '0 0 5px 0', color: 'white', fontSize: '1.2rem'}}>{client.companyName}</h3>
                <span style={{fontSize: '0.8rem', color: '#06B6D4', background: 'rgba(6,182,212,0.1)', padding: '2px 8px', borderRadius: '10px'}}>{client.industry}</span>
              </div>
            </div>

            <div style={{color: '#CBD5E1', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><FaUserTie style={{color: '#64748B'}}/> {client.contactPerson}</div>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><FaEnvelope style={{color: '#64748B'}}/> {client.email}</div>
            </div>
          </div>
        ))}
        {activeClients.length === 0 && <p style={{color: '#64748B'}}>No active projects right now.</p>}
      </div>
    </PortalLayout>
  );
};

export default EmployeeProjects;