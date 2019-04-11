import Controller, { inject } from '@ember/controller';

export default Controller.extend({
	applicationController: inject('application'),
	actions: {
		goToPost(name, id) {
			this.set('currentPost', id);
			this.transitionToRoute('subreddit.post', name, id);
		}
	}
});
