import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import api from '../../api/axios'; 
import { FaPaperPlane, FaComments, FaTimes, FaHashtag, FaUserCircle , FaBroom} from 'react-icons/fa';
import '../../styles/messenger.css';

const ChatWidget = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [directory, setDirectory] = useState([]); // List of users
  
  // State to track current room (defaults to community)
  const [activeRoom, setActiveRoom] = useState('community'); 
  const [activeChatName, setActiveChatName] = useState('Team Community'); 
  
  const socketRef = useRef();
  const scrollRef = useRef();

  // Generate a unique room ID for 1-on-1 chats regardless of who clicks who first
  const generateRoomId = (id1, id2) => {
    return [id1, id2].sort().join('_');
  };

  const handleClearChat = async () => {
  if (!window.confirm("Are you sure you want to clear all messages in this conversation? Everyone will lose access to this history.")) return;

  try {
    await api.delete(`/chat/clear/${activeRoom}`);
    setMessages([]); // Clear locally for Admin
    socketRef.current.emit('clear_chat_event', activeRoom); // Tell the server to clear it for the Employee instantly
  } catch (err) {
    console.error("Failed to clear chat");
  }
};

  useEffect(() => {
    if (isOpen) {
      // 1. Connect Socket
      socketRef.current = io('https://cronoverse-backend.onrender.com/api'); 

      // 2. Fetch User Directory for the Sidebar
      const fetchDirectory = async () => {
        try {
          const res = await api.get('/chat/users');
          setDirectory(res.data);
        } catch (err) { console.error("Failed to load users"); }
      };
      fetchDirectory();

      // Listen for incoming messages globally
      socketRef.current.on('receive_message', (data) => {
        // Only append to screen if the message belongs to the room we are currently looking at
        if (data.room === activeRoom) {
          setMessages((prev) => [...prev, data]);
        }
      });

      socketRef.current.on('chat_was_cleared', (clearedRoom) => {
     // If the user is currently looking at the room that was cleared, empty the screen
     setActiveRoom((currentActive) => {
       if (currentActive === clearedRoom) {
         setMessages([]);
       }
       return currentActive;
     });
   });
    }

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, [isOpen]);

  // Re-run this effect whenever the active room changes
  useEffect(() => {
    if (isOpen && socketRef.current) {
      // 1. Join the new socket room
      socketRef.current.emit('join_room', activeRoom);

      // 2. Fetch History for this specific room
      const fetchHistory = async () => {
        try {
          const res = await api.get(`/chat/history?room=${activeRoom}`);
          const formattedHistory = res.data.map(msg => ({
            senderId: msg.sender?._id || msg.sender,
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
    }
  }, [activeRoom, isOpen]);

  // Auto-scroll to bottom
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
      room: activeRoom, // Attach the room ID so backend knows where to route it
      createdAt: new Date().toISOString()
    };

    socketRef.current.emit('send_message', msgData);
    setInput('');
  };

  const switchChat = (roomType, targetUser = null) => {
    if (roomType === 'community') {
      setActiveRoom('community');
      setActiveChatName('Team Community');
    } else if (targetUser) {
      const roomId = generateRoomId(user._id || user.id, targetUser._id);
      setActiveRoom(roomId);
      setActiveChatName(targetUser.name);
    }
  };

  

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <div className="lexa-msg-fab" onClick={() => setIsOpen(true)}>
          <FaComments />
        </div>
      )}

      {/* Professional Slack-like Messenger */}
      {isOpen && (
        <div className="lexa-msg-overlay">
          
          {/* --- LEFT SIDEBAR --- */}
          <div className="lexa-msg-sidebar">
            <div className="lexa-msg-sidebar-header">
              Messages
            </div>

            <div className="lexa-msg-section-title">Channels</div>
            <div 
              className={`lexa-msg-contact ${activeRoom === 'community' ? 'active' : ''}`}
              onClick={() => switchChat('community')}
            >
              <FaHashtag /> Team Community
            </div>

            <div className="lexa-msg-section-title">Direct Messages</div>
            <div style={{overflowY: 'auto', flexGrow: 1}}>
              {directory.map(contact => {
                const roomId = generateRoomId(user._id || user.id, contact._id);
                return (
                  <div 
                    key={contact._id} 
                    className={`lexa-msg-contact ${activeRoom === roomId ? 'active' : ''}`}
                    onClick={() => switchChat('dm', contact)}
                  >
                    <div className="lexa-msg-status-dot"></div>
                    <span style={{overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{contact.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- RIGHT CHAT AREA --- */}
          <div className="lexa-msg-chat-area">
           <div className="lexa-msg-chat-header">
           <h3>
             {activeRoom === 'community' ? <FaHashtag style={{color: '#94A3B8'}}/> : <FaUserCircle style={{color: '#06B6D4'}}/>}
             {activeChatName}
           </h3>
           <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
             {user.role === 'Admin' && (
               <button 
                 onClick={handleClearChat}
                 style={{ background: 'transparent', border: 'none', color: '#EAB308', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', fontWeight: 'bold' }}
                 title="Clear Chat History"
               >
                 <FaBroom /> Clear
               </button>
             )}
             <FaTimes className="lexa-msg-close" onClick={() => setIsOpen(false)} />
           </div>
         </div>
            
            <div className="lexa-msg-history">
              {messages.map((msg, i) => {
                const isMe = msg.senderId === (user._id || user.id);
                return (
                  <div key={i} className={`lexa-msg-bubble-wrapper ${isMe ? 'me' : 'other'}`}>
                    <div className="lexa-msg-meta">
                      {isMe ? 'You' : msg.senderName} • {new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                    <div className="lexa-msg-bubble">
                      {msg.message}
                    </div>
                  </div>
                );
              })}
              <div ref={scrollRef} />
            </div>

            <form className="lexa-msg-input-area" onSubmit={sendMessage}>
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder={`Message ${activeChatName}...`}
              />
              <button type="submit" className="lexa-msg-send-btn" disabled={!input.trim()}>
                <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatWidget;