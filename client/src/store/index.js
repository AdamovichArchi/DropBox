import Vue from 'vue'
import Vuex from 'vuex'

/** Views */
import auth from '@/views/auth-page/store/index';

Vue.use(Vuex)

export default new Vuex.Store({
	modules : {
		auth
	}
})
