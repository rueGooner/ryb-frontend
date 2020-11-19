import axios from 'axios';
import router from '../../router/';

const defaultState = () => ({
  user: '',
  token: ''
});

const state = defaultState();

const getters = {
}

const mutations = {
  SET_USER: (state, user) => {
    state.user = user
  },

  SET_TOKEN: (state, token) => {
    state.token = token;
  }
}

const actions = {
  async handleLogin({ commit, dispatch }, user) {
    commit('DISPLAY_LOADING', true, { root: true });
    try {
      const { data } = await axios.post('login', user);
      await commit('SET_USER', data.user);
      await commit('SET_TOKEN', data.token);
      dispatch('handleNotification', {
        message: [data.message],
        type: 'success'
      });
      router.push('/')
    } catch (error) {
      console.log('ERROR @ LOGIN', error.response);
      dispatch('handleNotification', {
        message: error.response.data.errors,
        type: 'error'
      });
    } finally {
      dispatch('isLoading', false);
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};
