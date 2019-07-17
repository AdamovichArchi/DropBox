import Vue    from 'vue';
import Router from 'vue-router';

import store from '@/store/index';


/** Other application pages */
const AuthPage         = () => import(/* webpackChunkName: "auth-page" */ '@/views/auth-page/AuthPage.vue');
const RegistrationPage = () => import(/* webpackChunkName: "auth-page" */ '@/views/registration-page/RegistrationPage.vue');
const MainPage 		   = () => import(/* webpackChunkName: "main-page" */ '@/views/main-page/MainPage.vue');

Vue.use(Router);

const routes = [
	{
		path      : '/dropbox', 
		name      : 'mainPage',
		component : MainPage,
		meta      : {
			appName: 'DropBox'
		},
		beforeEnter(to, from, next) {
			try {
				let user 	    = JSON.parse(localStorage.getItem('user'));
				let currentTime = Date.now();
				let endTime     = new Date(user.exp * 1000);
				let validDate   = (currentTime <= endTime);
				
				if (user.token && user.token.length > 0 && validDate) {
					return next();
				}

				next('/sign-in')
			}
			catch (errors) {
				return next('/sign-in');
			}
		},
		children: [	
			// ...companies,
		]   
	},
	{
		path      : '/sign-in',
		name      : 'authPage',
		component : AuthPage
	},
	{
		path      : '/registration',
		name      : 'registrationPage',
		component : RegistrationPage
	},
	{
		path     : '*',
		redirect : '/dropbox'
	}
];

export default new Router({
	mode: 'history',
	routes
});