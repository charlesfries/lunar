import Controller, { inject } from '@ember/controller';

export default Controller.extend({
	parent: inject('application'),
	actions: {
		goToPost(name, id) {
			this.transitionToRoute('subreddit.post', name, id);
		}
	}
});
