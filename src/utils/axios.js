import Axios from 'axios';

// import data from "./store/data";

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
    const token = localStorage.getItem('authToken');

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
