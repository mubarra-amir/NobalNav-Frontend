
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

// ── Request interceptor: attach JWT token automatically ──────────────────────
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('nn_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Response interceptor: handle 401 globally ────────────────────────────────
api.interceptors.response.use(
  (response) => response,           // pass through successful responses
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid — clear storage and redirect to login
      localStorage.removeItem('nn_token');
      localStorage.removeItem('nn_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);   // let the caller handle other errors
  }
);

export default api;