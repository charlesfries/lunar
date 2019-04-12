import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	
	model() {
		let { name } = this.paramsFor('subreddit');
		
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
