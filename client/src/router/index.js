import Vue    from 'vue';
import Router from 'vue-router';

import store from '@/store/index';


/** Other application pages */
const AuthPage = () => import(/* webpackChunkName: "auth-page" */ '@/views/auth-page/AuthPage.vue');
// const MainPage = () => import(/* webpackChunkName: "main-page" */ '@/views/main-page/MainPage.vue');

Vue.use(Router);

const routes = [
	// {
	// 	path      : '/Dropbox', 
	// 	name      : 'mainPage',
	// 	component : MainPage,
	// 	meta      : {
	// 		appName: 'DropBox'
	// 	},
	// 	async beforeEnter(to, from, next) {
	// 		try {
	// 			await store.dispatch('auth/readState');

	// 			return next();
	// 		}
	// 		catch (errors) {
	// 			return next('/sign-in');
	// 		}
	// 	},
	// 	children: [	
	// 		...companies,
	// 		...locations,
	// 		...partsClassification,
	// 		...reports,
	// 		...storekeeper,
	// 		...transport,
	// 		...typer,
	// 		...users,
	// 		...settings,
	// 		...workingShifts,
	// 		...companyProfile
	// 	]   
	// },
	{
		path      : '/sign-in',
		name      : 'authPage',
		component : AuthPage
	},
	// {
	// 	path     : '*',
	// 	redirect : '/shop'
	// }
];

export default new Router({
	mode: 'history',
	routes
});