import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	notifications: service('notification-messages'),
	
	model({ name }) {
		let controller = this.controllerFor('application');
		controller.set('currentSubreddit', name);
		
		// if (this.controller && this.controller.get('model')) {
		// 	return this.controller.get('model');
		// }
		
		return this.reddit.api.getSubreddit(name).fetch()
			.catch(() => { this.notifications.error('Couldn\'t fetch subreddit'); });
	}
});
