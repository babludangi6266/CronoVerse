import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { FaPaperPlane, FaComments } from 'react-icons/fa';

const ChatWidget = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    if (!isOpen) return;
    
    // Connect to Backend Socket
    socketRef.current = io('http://localhost:5000');
    socketRef.current.emit('join_community');

    socketRef.current.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socketRef.current.disconnect();
  }, [isOpen]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const msgData = { senderId: user._id, senderName: user.name || user.email, message: input };
    socketRef.current.emit('send_message', msgData);
    setMessages((prev) => [...prev, msgData]); // Optimistic update
    setInput('');
  };

  return (
    <>
      {/* Trigger Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed', bottom: '30px', right: '30px',
          width: '60px', height: '60px', background: '#06B6D4',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', fontSize: '1.5rem', boxShadow: '0 10px 20px rgba(6,182,212,0.4)', zIndex: 100
        }}
      >
        <FaComments color="black" />
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="ept-chat-box">
          <div className="chat-header">Community Chat</div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} style={{marginBottom: '10px', textAlign: msg.senderId === user._id ? 'right' : 'left'}}>
                <span style={{fontSize: '0.7rem', color: '#94A3B8'}}>{msg.senderName}</span>
                <div style={{
                  background: msg.senderId === user._id ? '#06B6D4' : '#1E293B',
                  color: msg.senderId === user._id ? 'black' : 'white',
                  padding: '8px 12px', borderRadius: '12px', display: 'inline-block', maxWidth: '80%'
                }}>
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input-area">
            <input 
              className="ept-input" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="ept-btn" style={{width: 'auto'}}><FaPaperPlane /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;