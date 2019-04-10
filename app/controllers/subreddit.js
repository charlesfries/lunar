import Controller from '@ember/controller';

export default Controller.extend({
	currentPost: null,
	actions: {
		goToPost(name, id) {
			this.set('currentPost', id);
			this.transitionToRoute('subreddit.post', name, id);
		}
	}
});
