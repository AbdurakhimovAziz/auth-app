import axios from 'axios';
import { getTokenFromStorage } from '../utils/token';

const axiosInstance = axios.create({
  baseURL: 'https://auth-express-server.onrender.com',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
