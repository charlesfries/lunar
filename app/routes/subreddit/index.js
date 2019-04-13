import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	notifications: service('notification-messages'),
	
	model() {
		let { name } = this.paramsFor('subreddit');
		
		// if (this.controller && this.controller.get('model')) {
		// 	return this.controller.get('model');
		// }
		
		return this.reddit.api.getSubreddit(name).getHot()
			.then(posts => {
				return posts.map(post => {
					post.author = Object.assign({}, post.author);
					return post;
				});
			})
			.catch(() => { this.notifications.error('Couldn\'t fetch hot'); });
	}
});
