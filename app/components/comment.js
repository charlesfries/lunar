import Component from '@ember/component';

export default Component.extend({
	actions: {
		toggleCollapsed() {
			this.toggleProperty('model.collapsed');
		}
	}
});
