import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	reddit: service(),
	
	authenticatedUser: null,
	
	currentFeed: null,
	currentSubreddit: null,
	currentPost: null,
	
	init() {
		this._super(...arguments);
		
		this.set('authenticatedUser', 'charlesfries'); // @TODO
		this.showIntroduction();
	},
	
	showIntroduction() {
		let launchedBefore = localStorage.getItem('launchedBefore');
		if (!launchedBefore) {
			localStorage.setItem('launchedBefore', true);
			setTimeout(() => {
				$('#welcomeModal').modal('show');
			}, 3000);
		}
	},
	
	actions: {
		goToFeed(name) {
			this.setProperties({
				currentFeed: name,
				currentSubreddit: null,
				currentPost: null
			});
			this.transitionToRoute('feed', name);
		},
		goToSubreddit(name) {
			this.setProperties({
				currentFeed: null,
				currentSubreddit: name,
				currentPost: null
			});
			this.transitionToRoute('subreddit', name);
		},
		showLogin() {
			$('#loginModal').modal('show');
		},
		popSubreddit() {
			this.setProperties({
				currentSubreddit: name,
				currentPost: name
			});
		},
		popPost() {
			this.set('currentPost', null);
		}
	}
});
