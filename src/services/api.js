import axios from 'axios';

const api = () =>
  axios.create({
    baseURL: 'https://desafio.mobfiq.com.br',
    timeout: 120000,
  });

export default api;
