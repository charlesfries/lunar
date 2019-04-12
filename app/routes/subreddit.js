import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	
	model({ name }) {
		this.set('name', name);
		let controller = this.controllerFor('application');
		controller.set('currentSubreddit', name);
		
		return this.reddit.api.getSubreddit(this.name).fetch()
			.catch(() => { this.notifications.error('Couldn\'t fetch subreddit'); });
		
		// return this.reddit.api.getSubreddit(name).getNew()
		// 	.then(posts => {
		// 		return posts.map(post => {
		// 			post.author = Object.assign({}, post.author);
		// 			return post;
		// 		});
		// 	})
		// 	.catch(() => { this.notifications.error('Couldn\'t fetch subreddit'); });
	},
	
	setupController(controller, model) {
		controller.set('model', model);
		
		this.reddit.api.getSubreddit(this.name).fetch()
			.then(data => {
				controller.set('subredditInfo', data);
			})
			.catch(() => {});
	}
});
