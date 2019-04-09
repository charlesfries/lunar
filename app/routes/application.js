import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import nprogress from 'nprogress'

export default Route.extend({
	reddit: service(),
	
	authenticatedUser: 'charlesfries', // @TODO
	
	model() {
		return this.reddit.api.getMe()
			.then(data => {
				// console.log('Me', data);
				return data;
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
