import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	model() {
		let { name } = this.paramsFor('subreddit');
		return this.reddit.api.getSubreddit(name).getHot();
	}
});
