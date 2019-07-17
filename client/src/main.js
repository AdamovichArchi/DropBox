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

import SnackbarPlugin from './components/widgets/snackbar/snackbar.plugin';

Vue.use(Vuetify);
Vue.use(Vuelidate);

Vue.use(SnackbarPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
