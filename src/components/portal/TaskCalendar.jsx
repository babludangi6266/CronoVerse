import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { FaUserTie, FaBriefcase, FaCheckCircle, FaClock, FaAlignLeft } from 'react-icons/fa';
import '../../styles/calendar.css';

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

// --- RICH HOVER REPORT COMPONENT ---
const CustomEvent = ({ event }) => {
  return (
    <div className="lexa-cal-event-wrapper">
      <div className="lexa-cal-event-title">{event.title}</div>
      
      {/* This report card appears on hover */}
      <div className="lexa-cal-hover-report">
        <div className="lexa-cal-report-header">Daily Work Report</div>
        
        {/* Employee Info */}
        <div className="lexa-cal-report-row">
          <FaUserTie style={{color: '#3B82F6'}}/> 
          <span style={{color: 'white', fontWeight: '600'}}>{event.assigneeName}</span>
        </div>
        <div className="lexa-cal-report-row">
          <FaBriefcase /> 
          <span style={{fontSize: '0.75rem'}}>{event.assigneeRole}</span>
        </div>

        <div className="lexa-cal-report-divider"></div>

        {/* Task Metrics */}
        <div className="lexa-cal-report-row">
          <FaCheckCircle style={{color: event.status === 'Completed' ? '#10B981' : '#EAB308'}}/> 
          <span>Status: <strong style={{color: 'white'}}>{event.status}</strong></span>
        </div>
        <div className="lexa-cal-report-row">
          <FaClock style={{color: '#06B6D4'}}/> 
          <span>Time Logged: <strong style={{color: 'white'}}>{event.timeLogged} Hrs</strong></span>
        </div>

        {/* Description Preview */}
        {event.desc && (
          <>
            <div className="lexa-cal-report-divider"></div>
            <div className="lexa-cal-report-row" style={{color: '#94A3B8', fontSize: '0.8rem'}}>
              <FaAlignLeft /> 
              <span style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                {event.desc}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const TaskCalendar = ({ tasks }) => {
  
  // Map API data into Calendar Events
  const events = tasks
    .filter(task => task.dueDate) 
    .map(task => {
      const startDate = new Date(task.dueDate);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = new Date(task.dueDate);
      endDate.setHours(23, 59, 59, 999);

      return {
        id: task._id,
        title: task.title,
        start: startDate,
        end: endDate,
        allDay: true,
        status: task.status,
        desc: task.description,
        timeLogged: task.timeLogged || 0,
        // Safely extract populated user data
        assigneeName: task.assignedTo?.name || (task.isPersonal ? 'Personal Task' : 'Unassigned'),
        assigneeRole: task.assignedTo?.areaOfInterest || 'Employee'
      };
    });

  const eventStyleGetter = (event) => {
    let backgroundColor = '#3B82F6'; // Default Blue
    if (event.status === 'Completed') backgroundColor = '#10B981'; // Green
    else if (event.status === 'Pending') backgroundColor = '#EAB308'; // Yellow

    const today = new Date();
    today.setHours(0,0,0,0);
    if (event.status !== 'Completed' && new Date(event.start) < today) {
      backgroundColor = '#EF4444'; // Red (Overdue)
    }

    return {
      style: {
        backgroundColor,
        color: '#020617', // Dark text on bright backgrounds
        border: 'none',
        borderRadius: '6px',
        display: 'block',
        overflow: 'visible' // CRITICAL: Allows the tooltip to overflow outside the calendar cell
      }
    };
  };

  return (
    <div className="lexa-crm-calendar-wrapper">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CustomEvent 
        }}
        views={['month', 'week', 'agenda']}
        defaultView="month"
      />
    </div>
  );
};

export default TaskCalendar;