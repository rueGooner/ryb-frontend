import axios from 'axios';

const defaultState = () => ({
  user: '',
  token: ''
});

const state = defaultState();

const getters = {
}

const mutations = {
  updateValue: (state, payload) => {
    state.value = payload
  }
}

const actions = {
  async handleLogin({ commit }, user) {
    try {
      const loginAttempt = await axios.post('login', user);
      console.log('LOGIN ATTEMPT', loginAttempt);
      await commit('SET_USER', loginAttempt.user);
    } catch (error) {
      console.log('ERROR @ LOGIN', error.response);
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};
