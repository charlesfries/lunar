import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
	reddit: service(),
	
	authenticatedUser: 'charlesfries', // @TODO
	
	// defaultSubreddits: ['Home', 'Popular', 'All'],
	userSubreddits: ['apple', 'bitcoin', 'cringe', 'roadcam', 'technology', 'videos'],
	currentSubreddit: 'all',
	
	formattedCurrentSubreddit: computed('currentSubreddit', function() {
		return 'r/' + this.currentSubreddit;
	}),
	
	actions: {
		onTransition(routeName) {
			this.transitionToRoute(routeName);
		},
		goTo(name) {
			this.transitionToRoute('subreddit', name);
		}
	}
});
