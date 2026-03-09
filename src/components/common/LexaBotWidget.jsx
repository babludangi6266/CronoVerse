import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import api from '../../api/axios';
import '../../styles/lexabot.css';

const LexaBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false); // <-- NEW STATE
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: "Hi there! 👋 I am Lexa AI. How can I help you with your software and digital needs today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  // --- NEW: Trigger Greeting Bubble After 3 Seconds ---
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only pop up if the user hasn't already opened the chat
      if (!isOpen) {
        setShowGreeting(true);
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Auto scroll to the newest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // --- NEW: Handler to open chat and hide greeting ---
  const handleOpenChat = () => {
    setIsOpen(true);
    setShowGreeting(false); // Hide the bubble permanently once opened
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    
    const newMessages = [...messages, { sender: 'user', text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const historyToPass = newMessages.slice(1, -1); 
      const res = await api.post('/bot/ask', { message: userMsg, history: historyToPass });
      setMessages(prev => [...prev, { sender: 'bot', text: res.data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: "I'm currently experiencing a network interruption. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 1. The Welcome Greeting Bubble */}
      {!isOpen && showGreeting && (
        <div className="lexabot-greeting" onClick={handleOpenChat}>
          <span>👋 Hey! I am Lexa AI. Want to build something great?</span>
          <FaTimes 
            className="lexabot-greeting-close" 
            onClick={(e) => { 
              e.stopPropagation(); // Prevents click from opening the chat
              setShowGreeting(false); // Just dismisses the bubble
            }} 
          />
        </div>
      )}

      {/* 2. Floating Action Button */}
      {!isOpen && (
        <div className="lexabot-fab" onClick={handleOpenChat}>
          <FaRobot />
        </div>
      )}

      {/* 3. Main Chat Window */}
      {isOpen && (
        <div className="lexabot-window">
          
          <div className="lexabot-header">
            <div className="lexabot-title">
              <div className="lexabot-avatar"><FaRobot size={18}/></div>
              <div>
                <div>Lexa AI</div>
                <div className="lexabot-status">Online</div>
              </div>
            </div>
            <button className="lexabot-close" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="lexabot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`lexabot-bubble ${msg.sender}`}>
                <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            ))}
            
            {isLoading && (
              <div className="lexabot-bubble bot">
                <div className="lexabot-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          <form className="lexabot-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" disabled={!input.trim() || isLoading}>
              <FaPaperPlane size={14} style={{ position: 'relative', left: '-2px', top: '1px' }}/>
            </button>
          </form>

        </div>
      )}
    </>
  );
};

export default LexaBotWidget;