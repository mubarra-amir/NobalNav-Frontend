const BASE = 'http://localhost:5000/api';

export const api = async (path, options = {}) => {
  const token = localStorage.getItem('nn_token');
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};