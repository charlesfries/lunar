import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	defaultSubreddits: ['Home', 'Popular', 'All'],
	userSubreddits: ['apple', 'bitcoin', 'cringe', 'roadcam', 'technology', 'videos'],
	currentSubreddit: 'all',
	
	formattedCurrentSubreddit: computed('currentSubreddit', function() {
		return 'r/' + this.currentSubreddit;
	}),
	
	actions: {
		goTo(name) {
			this.transitionToRoute('subreddit', name);
		}
	}
});
