


import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { FaBriefcase, FaUser, FaLock, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../../styles/portal.css';

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', password: '', 
    city: '', state: '', type: 'Full-Time', 
    areaOfInterest: 'Social Media Content Creator (On-Camera)',
    submissionText: '', submissionLink: ''
  });

  // Dynamic Assessment Tasks based on Role
  const assessmentTasks = {
    'Social Media Content Creator (On-Camera)': "Create 2 LinkedIn posts explaining why fast software delivery matters for businesses.",
    'Business Development Executive': "Draft a simple outreach message to a startup founder explaining LEXA’s value in under 150 words.",
    'Video Editor': "Edit a 30–60 sec video explaining a tech concept (sample provided or self-shot).",
    'Content Writer / Strategist': "Write a 300-word LinkedIn article positioning LEXA as a delivery-first tech company.",
    'Full-Stack Web Developer': "Build a simple feature/module (e.g., a Todo List with API) with clean logic and documentation.",
    'Mobile App Developer (Android/iOS)': "Build a small functional screen or flow (Android/iOS) based on a real use case."
  };

  const [currentTask, setCurrentTask] = useState(assessmentTasks[formData.areaOfInterest]);

  // Update task when role changes
  useEffect(() => {
    setCurrentTask(assessmentTasks[formData.areaOfInterest]);
  }, [formData.areaOfInterest]);

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post('/auth/register', formData);
      toast.success("Application Submitted Successfully!");
      
      // Delay redirect slightly for UX
      setTimeout(() => {
        navigate('/'); // Redirect to Homepage as requested
      }, 2000);
      
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed.');
      setIsLoading(false);
    }
  };

  return (
    <div className="ept-wrapper ept-auth-container">
      <motion.div 
        className="ept-glass-card ept-register-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="register-header">
          <h2 className="ept-title">Join the Revolution</h2>
          <p className="ept-subtitle">Complete your profile and assessment to apply.</p>
        </div>

        <form onSubmit={handleSubmit} className="register-grid">
          
          {/* --- SECTION 1: PERSONAL DETAILS --- */}
          <div className="form-section-label"><FaUser /> Personal Details</div>
          
          <div className="ept-input-group">
            <label>Full Name</label>
            <input className="ept-input" name="name" onChange={handleChange} required placeholder="Ex. Rajesh Kumar" />
          </div>

          <div className="ept-input-group">
            <label>Email Address</label>
            <input className="ept-input" name="email" type="email" onChange={handleChange} required />
          </div>

          <div className="ept-input-group">
            <label>Mobile Number</label>
            <input className="ept-input" name="phone" type="tel" onChange={handleChange} required placeholder="+91..." />
          </div>

          <div className="ept-input-group">
            <label>Password</label>
            <input className="ept-input" name="password" type="password" onChange={handleChange} required />
          </div>

          <div className="ept-input-group">
            <label>City</label>
            <input className="ept-input" name="city" onChange={handleChange} required />
          </div>
          
          <div className="ept-input-group">
            <label>State</label>
            <input className="ept-input" name="state" onChange={handleChange} required />
          </div>

          {/* --- SECTION 2: ROLE & ASSESSMENT --- */}
          <div className="form-section-label" style={{marginTop: '20px'}}><FaBriefcase /> Role Selection</div>

          <div className="ept-input-group full-width">
            <label>Select Your Role</label>
            <select className="ept-input" name="areaOfInterest" onChange={handleChange} value={formData.areaOfInterest}>
              {Object.keys(assessmentTasks).map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>

          <div className="ept-input-group">
             <label>Employment Type</label>
             <select className="ept-input" name="type" onChange={handleChange}>
               <option>Full-Time</option>
               <option>Part-Time</option>
             </select>
          </div>

          {/* --- DYNAMIC ASSESSMENT BOX --- */}
          <AnimatePresence mode='wait'>
            <motion.div 
              key={formData.areaOfInterest}
              className="assessment-box full-width"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="task-header">
                 <strong>🚀 Your Assessment Task</strong>
              </div>
              <p className="task-desc">{currentTask}</p>
              
              <div className="task-inputs">
                <div className="ept-input-group">
                   <label>Short Description / Approach</label>
                   <textarea 
                      className="ept-input" 
                      name="submissionText" 
                      rows="3" 
                      placeholder="Briefly explain your work..."
                      onChange={handleChange}
                   ></textarea>
                </div>
                <div className="ept-input-group">
                   <label>Work Link (Google Drive / GitHub / Portfolio)</label>
                   <input 
                      className="ept-input" 
                      name="submissionLink" 
                      type="url" 
                      placeholder="https://..."
                      onChange={handleChange}
                      required
                   />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="full-width" style={{marginTop: '10px'}}>
            <button className="ept-btn" disabled={isLoading}>
              {isLoading ? <ClipLoader color="#fff" size={20} /> : <><FaPaperPlane style={{marginRight: '8px'}}/> Submit Application</>}
            </button>
          </div>

        </form>
        
        <div className="ept-auth-footer">
          Already registered? <Link to="/portal/login">Login Here</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;