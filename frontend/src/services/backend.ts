import axios from 'axios';

export const backend = axios.create({
  baseURL: import.meta.env.VITE_HERO_API_BASE_URL,
  timeout: 1000,
});
