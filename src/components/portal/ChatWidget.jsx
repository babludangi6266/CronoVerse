import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import api from '../../api/axios'; // Import your axios instance
import { FaPaperPlane, FaComments, FaTimes } from 'react-icons/fa';

const ChatWidget = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socketRef = useRef();
  const scrollRef = useRef(); // To auto-scroll to bottom

  // 1. Fetch History & Connect Socket when Chat Opens
  useEffect(() => {
    if (isOpen) {
      // Connect Socket
      socketRef.current = io('http://localhost:5000'); // Check your port
      socketRef.current.emit('join_community');

      // Load History from Database
      const fetchHistory = async () => {
        try {
          const res = await api.get('/chat/history');
          // Format DB messages to match Socket format
          const formattedHistory = res.data.map(msg => ({
            senderId: msg.sender?._id || msg.sender, // Handle populated/unpopulated
            senderName: msg.sender?.name || "Unknown",
            message: msg.message,
            createdAt: msg.createdAt
          }));
          setMessages(formattedHistory);
        } catch (err) {
          console.error("Failed to load chat history");
        }
      };
      fetchHistory();

      // Listen for New Messages
      socketRef.current.on('receive_message', (data) => {
        setMessages((prev) => [...prev, data]);
      });
    }

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, [isOpen]);

  // 2. Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const msgData = { 
      senderId: user._id || user.id, 
      senderName: user.name || user.email, 
      message: input,
      createdAt: new Date().toISOString()
    };

    socketRef.current.emit('send_message', msgData);
    // Optimistic UI update is handled by the socket broadcast 'receive_message' usually,
    // but to feel instant, you can append it here if you filter duplicates.
    // For simplicity, we wait for the socket to echo it back (standard practice).
    
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div 
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed', bottom: '30px', right: '30px',
            width: '60px', height: '60px', background: '#06B6D4',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: '1.5rem', boxShadow: '0 10px 20px rgba(6,182,212,0.4)', zIndex: 999
          }}
        >
          <FaComments color="black" />
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="ept-chat-box">
          <div className="chat-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span>Community Chat</span>
            <FaTimes style={{cursor: 'pointer'}} onClick={() => setIsOpen(false)} />
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, i) => {
              const isMe = msg.senderId === (user._id || user.id);
              return (
                <div key={i} style={{
                  marginBottom: '12px', 
                  textAlign: isMe ? 'right' : 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMe ? 'flex-end' : 'flex-start'
                }}>
                  <span style={{fontSize: '0.7rem', color: '#94A3B8', marginBottom: '2px'}}>
                    {isMe ? 'You' : msg.senderName}
                  </span>
                  <div style={{
                    background: isMe ? '#06B6D4' : '#1E293B',
                    color: isMe ? 'black' : 'white',
                    padding: '8px 12px', 
                    borderRadius: '12px', 
                    borderTopRightRadius: isMe ? '0' : '12px',
                    borderTopLeftRadius: isMe ? '12px' : '0',
                    maxWidth: '85%',
                    wordWrap: 'break-word'
                  }}>
                    {msg.message}
                  </div>
                </div>
              );
            })}
            <div ref={scrollRef} />
          </div>

          <form className="chat-input-area" onSubmit={sendMessage}>
            <input 
              className="ept-input" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type a message..."
              style={{borderRadius: '20px'}}
            />
            <button type="submit" className="ept-btn" style={{width: 'auto', borderRadius: '50%', padding: '12px'}}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;