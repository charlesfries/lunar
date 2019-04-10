import Component from '@ember/component';

export default Component.extend({
	classNames: ['comment'],
	actions: {
		toggleCollapsed() {
			this.toggleProperty('model.collapsed');
		}
	}
});
