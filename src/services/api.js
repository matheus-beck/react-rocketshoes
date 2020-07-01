import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/matheus-beck/react-rocketshoes',
});

export default api;
