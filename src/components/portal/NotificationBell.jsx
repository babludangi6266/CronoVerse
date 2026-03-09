import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import io from 'socket.io-client';
import api from '../../api/axios';
import { FaBell, FaTasks, FaInfoCircle, FaCheckDouble } from 'react-icons/fa';
import '../../styles/notifications.css';

const NotificationBell = () => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const socketRef = useRef();
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!user) return;

    // 1. Fetch existing notifications
    const fetchNotifs = async () => {
      try {
        const res = await api.get('/notifications');
        setNotifications(res.data);
      } catch (err) {
        console.error("Failed to load notifications");
      }
    };
    fetchNotifs();

    // 2. Connect to Socket and Register User Room
    socketRef.current = io('https://cronoverse-backend.onrender.com/api'); // Ensure correct URL
    socketRef.current.emit('register_user', user._id || user.id);

    // 3. Listen for new real-time alerts
    socketRef.current.on('new_notification', (notif) => {
      // Play a subtle sound (Optional)
      // new Audio('/sounds/ping.mp3').play().catch(e => console.log('Audio blocked'));
      
      setNotifications((prev) => [notif, ...prev]);
    });

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, [user]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpen = async () => {
    setIsOpen(!isOpen);
    
    const unreadCount = notifications.filter(n => !n.isRead).length;
    if (!isOpen && unreadCount > 0) {
      // Mark as read in DB
      try {
        await api.put('/notifications/read');
        // Update locally
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
      } catch(err) { console.error("Failed to mark as read"); }
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  if (!user) return null;

  return (
    <div className="lexa-notif-wrapper" ref={dropdownRef}>
      
      <div className="lexa-notif-bell" onClick={handleOpen}>
        <FaBell />
        {unreadCount > 0 && (
          <div className="lexa-notif-badge">{unreadCount}</div>
        )}
      </div>

      {isOpen && (
        <div className="lexa-notif-dropdown">
          <div className="lexa-notif-header">
            <span>Notifications</span>
            <FaCheckDouble style={{color: '#64748B', fontSize: '0.9rem'}} title="All marked as read" />
          </div>

          <div className="lexa-notif-body">
            {notifications.length === 0 ? (
              <p style={{color: '#64748B', textAlign: 'center', padding: '30px 20px'}}>You're all caught up!</p>
            ) : (
              notifications.map((notif, index) => (
                <div key={index} className={`lexa-notif-item ${!notif.isRead ? 'unread' : ''}`}>
                  <div className="lexa-notif-icon">
                    {notif.type === 'task_assigned' ? <FaTasks /> : <FaInfoCircle />}
                  </div>
                  <div>
                    <div className="lexa-notif-text">{notif.message}</div>
                    <div className="lexa-notif-time">
                      {new Date(notif.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {new Date(notif.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;