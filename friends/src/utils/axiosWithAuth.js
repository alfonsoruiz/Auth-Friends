import axios from 'axios';

// Build a module that creates a new instance of the axios object
// - baseURl (/api/lgoin)
// - headers object => authorization header with token

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: token
    }
  });
};
