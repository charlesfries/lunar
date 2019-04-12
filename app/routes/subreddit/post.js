import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	
	async model({ id }) {
		let controller = this.controllerFor('application');
		controller.set('currentPost', id);
		
		let subredditController = this.controllerFor('subreddit');
		subredditController.set('currentPost', id);
		
		
		// setTimeout(() => {
		// 
		// 
		// 	this.reddit.api.getSubmission(id).expandReplies({limit: Infinity, depth: Infinity})
		// 		.then(data => {
		// 			console.log('SUCCESS', data);
		// 			return data;
		// 		})
		// 		.catch(e => {
		// 			console.log('FAIL', e)
		// 		})
		// }, 5000);
		
		
		
		
		return this.reddit.api.getSubmission(id).fetch()
			.then(data => {
				data.author = Object.assign({}, data.author);
				data.comments = [];
				return data;
			});
	},
	
	setupController(controller, model) {
		controller.set('model', model);
		let { id } = this.paramsFor('subreddit.post');
		
		controller.set('commentsLoading', true);
		
		this.reddit.api.getSubmission(id).fetch()
			.then(data => {
				data.author = Object.assign({}, data.author);
				
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
						comment.comments = unwrapReplies(comment);
					});
				
				controller.set('model.comments', data.comments);
				controller.set('commentsLoading', false);
			});
	}
});
