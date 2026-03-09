import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axios';
import PortalLayout from '../../components/portal/PortalLayout';
import TaskCalendar from '../../components/portal/TaskCalendar';
import { toast } from 'react-toastify';

const CalendarPage = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      // If Admin, you might want to fetch ALL tasks. If Employee, just their tasks.
      const endpoint = user.role === 'Admin' ? '/tasks/all' : '/tasks/my-tasks';
      const res = await api.get(endpoint);
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks for calendar");
      toast.error("Failed to load calendar data.");
    }
  };

  return (
    <PortalLayout>
      <div style={{ marginBottom: '20px' }}>
        <h1 className="ept-title" style={{ textAlign: 'left', marginBottom: '5px' }}>Master Calendar</h1>
        <p style={{ color: '#94A3B8' }}>Track all your upcoming deadlines and project milestones.</p>
      </div>

      <div style={{ background: 'rgba(15, 23, 42, 0.4)', borderRadius: '16px', padding: '10px' }}>
        <TaskCalendar tasks={tasks} />
      </div>
    </PortalLayout>
  );
};

export default CalendarPage;