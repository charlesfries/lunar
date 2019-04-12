import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	
	model({ name }) {
		let controller = this.controllerFor('application');
		controller.set('currentSubreddit', name);
		
		return this.reddit.api.getSubreddit(name).fetch()
			.catch(() => { this.notifications.error('Couldn\'t fetch subreddit'); });
	}
});
