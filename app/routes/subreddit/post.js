import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	
	model({ id }) {
		let controller = this.controllerFor('application');
		controller.set('currentPost', id);
		
		let controller1 = this.controllerFor('subreddit');
		controller1.set('currentPost', id);
		
		return this.reddit.api.getSubmission(id).fetch()
			.then(data => {
				
				data.author = Object.assign({}, data.author)
				// console.log('Post', data);
				
				function unwrapReplies(root) {
					return root.replies
						.map(reply => {
							reply.replies = unwrapReplies(reply);
							reply.author = Object.assign({}, reply.author);
							return reply
						});
				}
				
				data.comments
					.map(comment => {
						comment.author = Object.assign({}, comment.author);
						comment.comments = unwrapReplies(comment)
					});
				
				return data;
			});
	}
});
