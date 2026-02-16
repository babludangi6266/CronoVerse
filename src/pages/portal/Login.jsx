// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import { Link } from 'react-router-dom';
// import '../../styles/portal.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await login(email, password);
//     if (!result.success) setError(result.message);
//   };

//   return (
//     <div className="ept-wrapper ept-auth-container">
//       <div className="ept-glass-card">
//         <h2 className="ept-title">Welcome Back</h2>
//         <p className="ept-subtitle">Access the Lexa Employee Portal</p>
        
//         {error && <div style={{color: '#EF4444', marginBottom: '15px'}}>{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="ept-input-group">
//             <label>Email Address</label>
//             <input className="ept-input" type="email" onChange={(e) => setEmail(e.target.value)} required />
//           </div>
//           <div className="ept-input-group">
//             <label>Password</label>
//             <input className="ept-input" type="password" onChange={(e) => setPassword(e.target.value)} required />
//           </div>
//           <button className="ept-btn">Sign In</button>
//         </form>
        
//         <p style={{textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: '#94A3B8'}}>
//           New Employee? <Link to="/portal/register" style={{color: '#06B6D4'}}>Register Here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

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