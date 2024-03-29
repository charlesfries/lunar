import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
	reddit: service(),
	notifications: service('notification-messages'),
	
	classNames: ['post-score'],
	
	isUpvoted: computed('model.likes', function() {
		return this.model.likes !== null && this.model.likes;
	}),
	
	isDownvoted: computed('model.likes', function() {
		return this.model.likes !== null && !this.model.likes;
	}),
	
	actions: {
		upvote() {
			if (!this.get('isUpvoted')) {
				this.reddit.api.getSubmission(this.model.id).upvote()
					.then(() => {
						this.set('model.likes', true);
						this.notifications.success('Upvoted.');
					})
					.catch(() => {
						this.notifications.error('Error.');
					});
			} else {
				this.reddit.api.getSubmission(this.model.id).unvote()
					.then(() => {
						this.set('model.likes', null);
						this.notifications.success('Undid upvote.');
					})
					.catch(() => {
						this.notifications.error('Error.');
					});
			}
		},
		downvote() {
			if (!this.get('isDownvoted')) {
				this.reddit.api.getSubmission(this.model.id).downvote()
					.then(() => {
						this.set('model.likes', false);
						this.notifications.success('Downvoted.');
					})
					.catch(() => {
						this.notifications.error('Error.');
					});
			} else {
				this.reddit.api.getSubmission(this.model.id).unvote()
					.then(() => {
						this.set('model.likes', null);
						this.notifications.success('Undid downvote.');
					})
					.catch(() => {
						this.notifications.error('Error.');
					});
			}
		}
	}
});
