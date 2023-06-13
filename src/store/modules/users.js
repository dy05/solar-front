import userService from "@/services/userService";

const state = {
  authToken: null,
  authUser: null,
  currentUser: null,
  users: [],
  projects: [],
}

const mutations = {
  SET_AUTH_TOKEN(state, token = null) {
    state.authToken = token
  },
  SET_AUTH_USER(state, user) {
    state.authUser = user
  },
  SET_USERS(state, users) {
    state.data = users
  },
  SET_USER(state, user) {
    state.currentUser = user
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
}

const getters = {
  token(state) {
    return state.authToken;
  },
  users(state) {
    return state.data;
  },
  projects(state) {
    return state.projects;
  },
  activeProjects(state) {
    return state.projects.filter((item) => ! item.report_at);
  },
  archivedProjects(state) {
    return state.projects.filter((item) => item.report_at);
  },
  authUser(state) {
    return state.authUser;
  },
  currentUser(state) {
    return state.currentUser;
  }
}

const actions = {
  logout({commit}, payload) {
    return userService.logout(payload, (data) => {
      commit('SET_AUTH_TOKEN', null);
      commit('SET_AUTH_USER', null);
      window.location.href = '/login'
    }, () => {})
  },
  login({commit}, payload) {
    return userService.login(payload, (data) => {
      commit('SET_AUTH_TOKEN', data.token);
      commit('SET_AUTH_USER', data.data);
      window.location.href = '/dashboard'
    }, () => {})
  },
  register({commit}, payload) {
    return userService.register(payload, (data) => {
      commit('SET_AUTH_USER', data.data);
      if (data?.token) {
        commit('SET_AUTH_TOKEN', data.token);
        window.location.href = '/dashboard'
      }
    }, () => {})
  },
  createUser({commit}, payload) {
    return userService.create(payload, (data) => {
      window.location.href = '/users'
    }, () => {})
  },
  fetchAuthUser({commit}) {
    return userService.getCurrentUser((data) => {
      commit('SET_AUTH_USER', data.data)
    }, (error) => {
      console.log("Fetch Auth User error: " + error)
    })
  },
  updateUser({commit}, user) {
    return userService.updateUser(user, (data) => {
      commit('SET_USER', data.data)
    }, (error) => {
      console.log("Update Auth User error: " + error)
    })
  },
  deleteUser({commit}, userId) {
    return userService.deleteUser(userId, () => {}, () => {
      console.log("Delete User error: " + userId)
    });
  },
  fetchCurrentUser({commit}, userId) {
    return userService.getUser(userId, (data) => {
      commit('SET_USER', data)
    }, (error) => {
      console.log("Fetch Current User error: " + error)
    });
  },
  fetchAllUsers({commit}) {
    return userService.getUsers((data) => {
      commit('SET_USERS', data.data)
    }, (error) => {
      console.log("Fetch All Users error: " + error)
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
