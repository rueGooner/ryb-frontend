import axios from 'axios';

const defaultState = () => ({
  user: '',
  token: ''
});

export const state = defaultState();

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  updateValue: (state, payload) => {
    state.value = payload
  }
}

export const actions = {
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
