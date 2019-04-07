import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import nprogress from 'nprogress'

export default Route.extend({
	reddit: service(),
	
	model() {
		// let res = this.reddit.api.getSubmission('2np694').body
		// 	.then((one) => {
		// 		console.log('Then')
		// 		console.log(res);
		// 	})
		// 	.catch((one) => {
		// 		console.log('Catch')
		// 		console.log(res);
		// 	});
		
		let res = this.reddit.api.getHot()
			.then((data) => {
				console.log(data);
				return data;
			});
		
		return res;
	},
	
	actions: {
		loading(transition) {
			nprogress.start();
			transition.finally(() => {
				nprogress.done();
			});
			return true;
		}
	}
});
