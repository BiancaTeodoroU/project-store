import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001', // A porta que você configurou no seu main.ts
  withCredentials: true, // Importante para o CORS que você configurou!
});