import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

const axiosInstance = axios.create({});

Vue.prototype.$http = axiosInstance;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
