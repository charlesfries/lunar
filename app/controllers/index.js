import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		goToPost(name, id) {
			console.log('Went', name, id);
			this.transitionToRoute('subreddit.post', name, id);
		}
	}
});
