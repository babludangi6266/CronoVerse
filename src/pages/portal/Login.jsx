
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import '../../styles/portal.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await login(email, password);
    
    setIsLoading(false);
    if (result.success) {
      toast.success("Welcome back!");
    } else {
      toast.error(result.message || "Invalid credentials");
    }
  };

  return (
    <div className="ept-wrapper ept-auth-container">
      <motion.div 
        className="ept-glass-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="ept-logo-mark">LEXA</div>
        <h2 className="ept-title">Portal Access</h2>
        <p className="ept-subtitle">Enter your credentials to continue</p>
        
        <form onSubmit={handleSubmit}>
          <div className="ept-input-group">
            <label>Email Address</label>
            <input 
              className="ept-input" 
              type="email" 
              placeholder="you@company.com"
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="ept-input-group">
            <label>Password</label>
            <input 
              className="ept-input" 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <button className="ept-btn" disabled={isLoading}>
            {isLoading ? <ClipLoader color="#fff" size={20} /> : "Sign In"}
          </button>
        </form>
        
        <div className="ept-auth-footer">
          New Talent? <Link to="/portal/register">Apply & Register</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;