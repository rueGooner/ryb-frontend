const defaultState = () => ({
  loading: false,
});

const state = defaultState();

const getters = {
  isLoading: state => state.loading,
};

const mutations = {
  DISPLAY_LOADING: (state, loading) => {
    state.loading = loading;
  }
}

const actions = {
  isLoading({ commit }) {
    commit('DISPLAY_LOADING', true);
    setTimeout(() => {
      commit('DISPLAY_LOADING', false);
    }, 2500);
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};
