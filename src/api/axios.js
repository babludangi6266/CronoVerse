import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cronoverse-backend.onrender.com/api', // Matches your Backend Port
});

// Automatically add Token to headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('lexa_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;