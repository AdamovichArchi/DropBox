import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'

/** Libraries styles */
import 'vuetify/dist/vuetify.min.css';

/** General styles */
import './assets/styles/global.css';

import App from './App.vue'

import router from './router/index';
import store  from './store/index';

Vue.use(Vuetify)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
