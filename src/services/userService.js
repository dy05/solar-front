import axios from '@/utils/axios';

const moduleUrl = '/users/';

export default {
  getUsers(onSuccess, onError) {
    axios.get(moduleUrl).then(response => {
      console.log(response.data.users)
      console.log(response.data)
      onSuccess(response.data);
    }, error => {
      if (error.response.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
      onError(error.response.data);
    }).catch(error => {
      onError(error);
    });
  },

  addUser(payload, onSuccess, onError) {
    axios.post(moduleUrl, payload).then(response => {
      onSuccess(response.data);
    }, error => {
      if (error.response.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
      onError(error.response.data);
    }).catch(error => {
      onError(error);
    });
  },

  getCurrentUser(onSuccess, onError) {
    axios.get('/user').then(response => {
      onSuccess(response.data);
    }, error => {
      if (error.response.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
      onError(error.response.data);
    }).catch(error => {
      onError(error);
    });
  },

  getUser(id, onSuccess, onError) {
    axios.get(moduleUrl + id).then(response => {
      onSuccess(response.data);
    }, error => {
      if (error.response.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
      onError(error.response.data);
    }).catch(error => {
      onError(error);
    });
  },

  updateUser(payload, onSuccess, onError) {
    axios.put(moduleUrl + payload.id, payload).then(response => {
      onSuccess(response.data);
    }, error => {
      if (error.response.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
      onError(error.response.data);
    }).catch(error => {
      onError(error);
    });
  },

  deleteUser(id, onSuccess, onError) {
    axios.delete(moduleUrl + id).then((response) => {
      onSuccess(response.data);
    }, error => {
      if (error.response.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
      onError(error.response.data);
    }).catch((error) => {
      onError(error);
    });
  },

  restoreUser(id, onSuccess, onError) {
    axios.delete(moduleUrl + id + '/restore').then(response => {
      onSuccess(response.data);
    }, error => {
      if (error.response.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
      onError(error.response.data);
    }).catch(error => {
      onError(error);
    });
  },
}
