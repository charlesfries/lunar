import Route from '@ember/routing/route';

export default Route.extend({
	model({ name }) {
		let applicationController = this.controllerFor('application');
		applicationController.set('currentSubreddit', name)
	}
});
