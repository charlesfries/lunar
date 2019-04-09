import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
	reddit: service(),
	
	// defaultSubreddits: ['Home', 'Popular', 'All'],
	authenticatedUser: null,
	subreddits: null,
	currentSubreddit: null,
	
	init() {
		this._super(...arguments);
		this.set('authenticatedUser', 'charlesfries'); // @TODO
		this.set('userSubreddits', ['apple', 'bitcoin', 'cringe', 'roadcam', 'technology', 'videos']);
		this.set('currentSubreddit', 'all');
		
		this.set('subreddits', {
			// feeds: ['Home', 'Popular', 'All'],
			favorites: ['apple', 'bitcoin', 'cringe', 'roadcam', 'technology', 'videos'],
			subscriptions: ['apple', 'bitcoin', 'cringe', 'roadcam', 'technology', 'videos']
		});
	},
	
	formattedCurrentSubreddit: computed('currentSubreddit', function() {
		return 'r/' + this.currentSubreddit;
	}),
	
	actions: {
		goToRoute(routeName) {
			this.transitionToRoute(routeName);
		},
		goToSubreddit(name) {
			console.log('goToSubreddit', name)
			this.transitionToRoute('subreddit', name);
		}
	}
});
