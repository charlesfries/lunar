import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	beforeModel() {
		let controller = this.controllerFor('subreddit');
		controller.set('currentPost', null);
	},
	model() {
		let { name } = this.paramsFor('subreddit');
		return this.reddit.api.getSubreddit(name).getHot()
			.then(data => {
				return data.map(post => {
					post.author = Object.assign({}, post.author);
					return post;
				});
			});
	}
});
