import Route from '@ember/routing/route';

export default Route.extend({
	model({ name }) {
		let controller = this.controllerFor('application');
		controller.set('currentFeed', name);
	}
});
