import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import nprogress from 'nprogress';

export default Route.extend({
	reddit: service(),
	notifications: service('notification-messages'),
	
	model() {
		return this.reddit.api.getSubscriptions()
			.then(subreddits => {
				// console.log(subreddits)
				return subreddits.sort((a, b) => {
					return a.display_name.localeCompare(b.display_name);
				})
			})
			.catch(() => { this.notifications.error('Couldn\'t fetch subscriptions'); });
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
