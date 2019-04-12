import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	
	model({ name }) {
		let controller = this.controllerFor('application');
		controller.set('currentFeed', name);
		
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
			// api.r._get({uri: 'r/snoowrap/about/moderators'})
			// 	.then(data => {
			// 		console.log(data);
			// 		return data;
			// 	});
			return api.getHot()
				.then(data => {
					return data.map(post => {
						post.author = Object.assign({}, post.author);
						return post;
					});
				});
		} else {
			return api.getHot()
			// return api.getSubreddit('popular').fetch()
				.then(data => {
					return data.map(post => {
						post.author = Object.assign({}, post.author);
						return post;
					});
				});
		}
	}
});
