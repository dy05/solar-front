import Vuex from 'vuex';
import users from '@/store/modules/users';

export default new Vuex.Store({
  modules: {
    users,
  },
  strict: false,
})
