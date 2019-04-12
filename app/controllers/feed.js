import Controller from '@ember/controller';

export default Controller.extend({
	currentFeed: '[feed]',
	actions: {
		goToPost(name, id) {
			this.transitionToRoute('subreddit.post', name, id);
		}
	}
});
