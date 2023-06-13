import Axios from 'axios';
import store from '../store';

let axios = Axios.create({
  headers: {
    'Accept': 'application/json',
    'Accept-Type': 'application/json',
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:8000/api',
})

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(
  (config) => {
    const token = store.getters['users/token'];

    if (token && config?.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
