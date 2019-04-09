import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// import { hash } from 'rsvp';

export default Route.extend({
	reddit: service(),
	model({ username }) {
		// let user = this.reddit.api.getUser(username);
		let submissions = this.reddit.api.getUser(username).getSubmissions();
		
		// return hash({
		// 	user: user,
		// 	submissions: submissions
		// });
		
		return submissions;
	}
});
