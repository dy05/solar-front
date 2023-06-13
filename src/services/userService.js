import axios from '@/utils/axios';

const moduleUrl = '/users/';

export default {
  logout(payload, onSuccess, onError) {
    return axios.post('/logout').then(response => {
      onSuccess(response.data);
      return Promise.resolve(response)
    }, error => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },

  login(payload, onSuccess, onError) {
    return axios.post('/auth/login', payload).then(response => {
      onSuccess(response.data);
      return Promise.resolve(response)
    }, error => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },

  register(payload, onSuccess, onError) {
    return axios.post('/auth/register', payload).then(response => {
      onSuccess(response.data);
      return Promise.resolve(response)
    }, error => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },

  getUsers(onSuccess, onError) {
    return axios.get(moduleUrl).then(response => {
      onSuccess(response.data);
      return Promise.resolve(response)
    }, error => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },

  createUser(payload, onSuccess, onError) {
    return axios.post(moduleUrl, payload).then(response => {
      onSuccess(response.data);
      return Promise.resolve(response)
    }, error => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },

  getCurrentUser(onSuccess, onError) {
    return axios.get('/user').then(response => {
      onSuccess(response.data);
      return Promise.resolve(response)
    }, error => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },

  getUser(id, onSuccess, onError) {
    return axios.get(moduleUrl + id).then(response => {
      onSuccess(response.data);
      return Promise.resolve(response)
    }, error => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },

  updateUser(payload, onSuccess, onError) {
    return axios.put(moduleUrl + payload.id, payload).then(response => {
      onSuccess(response.data);
      return Promise.resolve(response)
    }, error => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },

  deleteUser(id, onSuccess, onError) {
    return axios.delete(moduleUrl + id).then(response => {
      onSuccess(response.data);
      return Promise.resolve(response)
    }).catch((error) => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },

  restoreUser(id, onSuccess, onError) {
    return axios.delete(moduleUrl + id + '/restore').then(response => {
      onSuccess(response.data);
      return Promise.resolve(response);
    }, error => {
      if (typeof (onError) === 'function') {
        onError(error);
      }
      return Promise.reject(error.response);
    });
  },
}
