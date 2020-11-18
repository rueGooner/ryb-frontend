import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import modules from './modules';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'ryb',
  storage: window.localStorage,
  reducer: state => ({
    auth: state.auth,
  }),
});

export default new Vuex.Store({
  modules,
  plugins: [vuexLocalStorage.plugin]
})
