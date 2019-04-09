import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	model({ name }) {
		let controller = this.controllerFor('application');
		controller.set('currentSubreddit', name);
		
		return this.reddit.api.getSubreddit(name).getHot()
			.then(data => {
				return data.map(post => {
					post.author = Object.assign({}, post.author);
					return post;
				});
			});
		
		// return this.reddit.api.getSubreddit(name).fetch();
	}
});
