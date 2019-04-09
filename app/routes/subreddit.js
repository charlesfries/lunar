import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	model({ name }) {
		let applicationController = this.controllerFor('application');
		applicationController.set('currentSubreddit', name);
		
		return this.reddit.api.getSubreddit(name).fetch();
	}
});
