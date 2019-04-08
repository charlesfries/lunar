import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	model() {
		return this.reddit.api.getHot()
			.then(data => {
				console.log(data[1]);
				return data;
			});
	}
});
