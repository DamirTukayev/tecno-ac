import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios';
import config from '../public/config.json'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$config = config

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
