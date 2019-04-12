import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	beforeModel() {
		let controller = this.controllerFor('application');
		controller.set('currentFeed', 'home');
	},
	model({ name }) {
		let api = this.reddit.api;
		
		
		if (name === 'home') {
			return api.getHot()
				.then(data => {
					return data.map(post => {
						post.author = Object.assign({}, post.author);
						return post;
					});
				});
		} else if (name === 'popular') {
			return api.getHot()
				.then(data => {
					return data.map(post => {
						post.author = Object.assign({}, post.author);
						return post;
					});
				});
		} else {
			return api.getHot()
				.then(data => {
					return data.map(post => {
						post.author = Object.assign({}, post.author);
						return post;
					});
				});
		}
	}
});
