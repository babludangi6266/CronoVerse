import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('lexa_token');
    const storedUser = localStorage.getItem('lexa_user');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('lexa_token', res.data.token);
      localStorage.setItem('lexa_user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      
      // Redirect based on role
      if (res.data.user.role === 'Admin') navigate('/portal/admin');
      else navigate('/portal/employee');
      
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Login failed" };
    }
  };

  const logout = () => {
    localStorage.removeItem('lexa_token');
    localStorage.removeItem('lexa_user');
    setUser(null);
    navigate('/portal/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};