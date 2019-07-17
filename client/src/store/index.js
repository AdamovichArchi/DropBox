import Vue  from 'vue'
import Vuex from 'vuex'

/** Views */
import auth 		from '@/views/auth-page/store/index';
import registration from '@/views/registration-page/store/index';
import snackbar 	from '@/components/widgets/snackbar/store/index';

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth,
		registration,
		snackbar
	}
})
