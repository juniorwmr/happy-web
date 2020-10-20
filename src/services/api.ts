import { getToken } from './auth';

import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers['authorization'] = `Bearer ${token}`;
    config.headers['cache-control'] = `no-cache`;
  }
  return config;
});
