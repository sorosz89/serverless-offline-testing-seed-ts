import axios from 'axios';
export const server = axios.create({
  baseURL: `http://localhost:${process.env.SLS_PORT}/`,
});
