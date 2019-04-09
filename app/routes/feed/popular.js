import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	model() {
		console.log('pop')
		return this.reddit.api.getHot()
			.then(data => {
				return data.map(post => {
					post.author = Object.assign({}, post.author);
					return post;
				});
			});
	}
});
