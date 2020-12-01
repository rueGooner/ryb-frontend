import axios from 'axios';

const defaultState = () => ({
  barbershops: [],
});

const state = defaultState();

const getters = {
  allshops: state => state.barbershops.length > 0 ? state.barbershops : [],
  suggestions: state => state.barbershops.map(a => a.name)
};

const mutations = {
  SET_SHOPS: (state, shops) => {
    state.barbershops = shops;
  },

  CLEAR_SEARCH: (state) => {
    Object.assign(state, defaultState())
  }
}

const actions = {
  async fetchShops({ commit }, shopName) {
    try {
      const query = {
        params: {
          search: shopName
        }
      };

      const { data } = await axios.get('shops', query);
      commit('SET_SHOPS', data.shops);
    } catch (error) {
      console.log('ERROR', error);
    }
  },

  clearSearch({ commit }) {
    commit('CLEAR_SEARCH');
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};
