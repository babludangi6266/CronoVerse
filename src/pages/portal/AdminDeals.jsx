import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import api from '../../api/axios';
import PortalLayout from '../../components/portal/PortalLayout';
import ClientDetailDrawer from '../../components/portal/ClientDetailDrawer';
import { toast } from 'react-toastify';
import { FaBuilding, FaUser, FaDollarSign, FaPlus } from 'react-icons/fa';
import '../../styles/deals.css';

const AdminDeals = () => {
  const [clients, setClients] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '', contactPerson: '', email: '', phone: '', industry: '', projectValue: ''
  });

  const [selectedClient, setSelectedClient] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const columnsList = ['Lead', 'Negotiating', 'Active Client', 'Past Client'];

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await api.get('/clients');
      setClients(res.data);
    } catch (err) {
      toast.error("Failed to load clients");
    }
  };

  const handleAddClient = async (e) => {
    e.preventDefault();
    try {
      await api.post('/clients', formData);
      toast.success("Lead added successfully!");
      setIsFormOpen(false);
      setFormData({ companyName: '', contactPerson: '', email: '', phone: '', industry: '', projectValue: '' });
      fetchClients();
    } catch (err) {
      toast.error("Failed to add lead.");
    }
  };

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;

    // Optimistic UI update
    const destStatus = destination.droppableId;
    setClients(prev => prev.map(c => c._id === draggableId ? { ...c, status: destStatus } : c));

    // Update DB
    try {
      await api.put(`/clients/${draggableId}/status`, { status: destStatus });
      toast.success(`Moved to ${destStatus}`);
    } catch (err) {
      fetchClients(); // Revert on failure
      toast.error("Failed to move deal");
    }
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setIsDrawerOpen(true);
  };

  const handleAddNote = async (clientId, text) => {
    try {
      const res = await api.post(`/clients/${clientId}/notes`, { text });
      setSelectedClient(res.data); // Optimistic Instant Update in Drawer
      fetchClients(); // Refresh background data
      toast.success("Log saved");
    } catch (err) {
      toast.error("Failed to save log");
    }
  };

  const getColClass = (title) => {
    if(title === 'Lead') return 'lexa-col-lead';
    if(title === 'Negotiating') return 'lexa-col-negotiating';
    if(title === 'Active Client') return 'lexa-col-active';
    return 'lexa-col-past';
  };

  return (
    <PortalLayout>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h1 className="ept-title" style={{ textAlign: 'left', margin: 0 }}>Client Pipeline</h1>
          <p style={{ color: '#94A3B8' }}>Manage leads and active software delivery projects.</p>
        </div>
        <button className="ept-btn" style={{ width: 'auto' }} onClick={() => setIsFormOpen(!isFormOpen)}>
          <FaPlus style={{ marginRight: '8px' }}/> Add New Lead
        </button>
      </div>

      {isFormOpen && (
        <form onSubmit={handleAddClient} className="ept-card" style={{ marginBottom: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div className="ept-input-group"><label>Company Name</label><input className="ept-input" required value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} /></div>
          <div className="ept-input-group"><label>Contact Person</label><input className="ept-input" required value={formData.contactPerson} onChange={e => setFormData({...formData, contactPerson: e.target.value})} /></div>
          <div className="ept-input-group"><label>Email</label><input type="email" className="ept-input" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
          <div className="ept-input-group"><label>Industry</label><input className="ept-input" placeholder="e.g. FinTech" value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})} /></div>
          <div className="ept-input-group"><label>Est. Project Value ($/₹)</label><input type="number" className="ept-input" value={formData.projectValue} onChange={e => setFormData({...formData, projectValue: e.target.value})} /></div>
          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end' }}>
            <button className="ept-btn" style={{ width: '200px' }}>Save Lead</button>
          </div>
        </form>
      )}

    <DragDropContext onDragEnd={onDragEnd}>
        <div className="lexa-deal-board-wrapper">
          {columnsList.map(colStatus => {
            const colClients = clients.filter(c => c.status === colStatus);
            return (
              <div key={colStatus} className="lexa-deal-column">
                <div className={`lexa-deal-col-header ${getColClass(colStatus)}`}>
                  <span>{colStatus}</span>
                  <span style={{background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem'}}>{colClients.length}</span>
                </div>

               <Droppable droppableId={colStatus}>
                  {(provided, snapshot) => (
                    <div 
                      className={`lexa-deal-drop-zone ${snapshot.isDraggingOver ? 'active-drag' : ''}`}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {colClients.map((client, index) => (
                        <Draggable key={client._id} draggableId={client._id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              className={`lexa-deal-card ${snapshot.isDragging ? 'dragging' : ''}`}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              onClick={() => handleClientClick(client)} // <--- 4. ADD ONCLICK TO CARD
                              style={{ cursor: 'pointer', ...provided.draggableProps.style }}
                            >

                              <div className="lexa-deal-company"><FaBuilding style={{color:'#64748B', marginRight:'5px', fontSize:'0.9rem'}}/> {client.companyName}</div>
                              <div className="lexa-deal-contact"><FaUser /> {client.contactPerson}</div>
                              
                              <div className="lexa-deal-footer">
                                <span className="lexa-deal-industry">{client.industry || 'Unknown'}</span>
                                <span className="lexa-deal-value"><FaDollarSign style={{fontSize:'0.8rem', position:'relative', top:'-1px'}}/>{client.projectValue?.toLocaleString() || '0'}</span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>
      <ClientDetailDrawer 
        client={selectedClient}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onAddLog={handleAddNote}
      />
    </PortalLayout>
  );
};

export default AdminDeals;