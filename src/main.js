import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

axios.defaults.baseURL = 'http://localhost:8888/api';

import '@/assets/styles/tailwind.css';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
