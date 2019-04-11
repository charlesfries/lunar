import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import nprogress from 'nprogress';

export default Route.extend({
	reddit: service(),
	
	model() {
		return this.reddit.api.getSubscriptions()
			.then(subreddits => {
				return subreddits.sort((a, b) => {
					return a.display_name.localeCompare(b.display_name);
				})
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
