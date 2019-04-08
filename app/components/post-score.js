import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	reddit: service(),
	actions: {
		upvote() {
			this.reddit.api.getSubmission(this.model.id).upvote()
				.then(data => {
					console.log(data);
				});
		},
		downvote() {
			this.reddit.api.getSubmission(this.model.id).downvote()
				.then(data => {
					console.log(data);
				});
		}
	}
});
