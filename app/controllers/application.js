import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	reddit: service(),
	
	isFirstLaunch: true,
	authenticatedUser: null,
	subreddits: null,
	
	currentFeed: null,
	currentSubreddit: null,
	currentPost: null,
	
	init() {
		this._super(...arguments);
		this.set('authenticatedUser', 'charlesfries'); // @TODO
		this.set('subreddits', {
			favorites: ['Android', 'apple', 'bitcoin', 'CombatFootage', 'cringe', 'HailCorporate', 'HipHopHeads', 'howardstern', 'roadcam', 'technology', 'teslamotors', 'videos', 'wallstreetbets', 'worldnews'],
			subscriptions: ['Android', 'apple', 'bitcoin', 'CombatFootage', 'cringe', 'HailCorporate', 'HipHopHeads', 'howardstern', 'roadcam', 'technology', 'videos']
		});
		
		
		
		// setTimeout(() => {
		// 	let launchedBefore = localStorage.get('launchedBefore');
		// 	this.set('launchedBefore', !isFirstLaunch);
		// }, 3000);
	},
	actions: {
		goToRoute(routeName) {
			this.set('currentFeed', routeName);
			this.set('currentSubreddit', null);
			this.set('currentPost', null);
			this.transitionToRoute(routeName);
		},
		goToSubreddit(name) {
			this.set('currentFeed', null);
			this.set('currentSubreddit', name);
			this.set('currentPost', null);
			this.transitionToRoute('subreddit', name);
		}
	}
});
