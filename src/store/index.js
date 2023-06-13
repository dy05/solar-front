import Vuex from 'vuex';
import users from '../store/modules/users';
import createPersistedState  from 'vuex-plugin-persistedstate';

export default new Vuex.Store({
  modules: {
    users,
  },
  plugins: [createPersistedState()],
})
