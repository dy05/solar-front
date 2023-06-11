import userService from "@/services/userService";

const state = {
  token: null,
  authUser: null,
  users: [],
  projects: [],
}

const mutations = {
  SET_AUTH_TOKEN(state, token) {
    state.token = token
  },
  SET_AUTH_USER(state, user) {
    state.authUser = user
  },
  SET_USERS(state, users) {
    console.log('mutations')
    console.log(state.users)
    console.log(users)
    console.log('users')
    console.log(state.users)
    state.users = users
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
}

const getters = {
  users(state) {
    return state.users;
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
  getAuthUser(state) {
    return state.authUser;
  },
  getAuthToken(state) {
    return state.token;
  },
}

const actions = {
  async fetchUser({commit}){
    userService.getCurrentUser((data) => {
      commit('SET_AUTH_USER', data.user)
      Promise.resolve(data);
    }, (error) => {
      console.log("Fetch User error: " + error)
      Promise.reject(error);
    })
  },
  async fetchAllUsers({commit}){
    userService.getUsers((data) => {
      commit('SET_USERS', data)
      Promise.resolve(data);
    }, (error) => {
      console.log("Fetch All Users error: " + error)
      Promise.reject(error);
    })
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
