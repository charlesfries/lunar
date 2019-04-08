import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	userSubreddits: ['apple', 'bitcoin', 'cringe', 'roadcam', 'technology', 'videos'],
	
	currentSubreddit: 'all',
	formattedCurrentSubreddit: computed('currentSubreddit', function() {
		return 'r/' + this.currentSubreddit;
	}),
	
	actions: {
		goTo(name) {
			console.log('goTo', name);
			this.transitionToRoute('subreddit', name);
		}
	}
});
