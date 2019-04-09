import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	model() {
		return this.reddit.api.getSubreddit('all').getHot()
			.then(data => {
				return data.map(post => {
					post.author = Object.assign({}, post.author);
					return post;
				});
			});
	}
});
