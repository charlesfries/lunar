import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	model({ id }) {
		return this.reddit.api.getSubmission(id).fetch()
			.then(data => {
				console.log(data.comments[0]);
				return data;
			});
	}
});
