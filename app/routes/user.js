import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// import { hash } from 'rsvp';

export default Route.extend({
	reddit: service(),
	
	model({ username }) {
		return this.reddit.api.getUser(username).getSubmissions()
			.then(data => {
				return JSON.parse(JSON.stringify(data));
			});
	},
	
	setupController(controller, model) {
		controller.set('model', model);
		let { username } = this.paramsFor('user');
		controller.set('username', username);
		
		// let user = this.reddit.api.getUser(username);
		// let submissions = this.reddit.api.getUser('spez').getSubmissions().then()
			// .then(data => {
			// 	console.log(data)
			// 	return data;
			// })
			// .catch(data => {
			// 	console.log('nope')
			// });
		
		// return hash({
		// 	user: user,
		// 	submissions: submissions
		// });
	}
});
