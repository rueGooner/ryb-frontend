import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'ryb',
  storage: window.localStorage,
  reducer: state => ({
    auth: state.auth,
    notifications: state.notifications,
    loading: state.loading,
  }),
});

export default new Vuex.Store({
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
