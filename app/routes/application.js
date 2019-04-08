import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import nprogress from 'nprogress'

export default Route.extend({
	reddit: service(),
	
	authenticatedUser: 'charlesfries', // @TODO
	
	model() {
// 		return new Promise((resolve, reject) => {
//   let wait = setTimeout(() => {
//     clearTimout(wait);
//     reject('Promise A win!');
//   }, 20000)
// });
		return this.reddit.api.getMe()
			.then(res => {
				// console.log(res);
				return res;
			});
	},
	
	actions: {
		loading(transition) {
			nprogress.start();
			transition.finally(() => {
				nprogress.done();
			});
			return true;
		}
	}
});
