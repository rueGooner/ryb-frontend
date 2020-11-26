import axios from 'axios';
import VueCookie from 'vue-cookie';
import router from '@/router/';

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
    VueCookie.set('rmb', token, '10h');
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
      router.push('/dashboard')
    } catch (error) {
      if (error.message === 'Network Error') {
        dispatch('handleNotification', {
          message: ['There seems to be a problem connecting. Please try again later.'],
          type: 'error'
        });
      }
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
