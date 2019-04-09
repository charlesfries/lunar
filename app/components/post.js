import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['post'],
	classNameBindings: ['isActive:active'],
	
	isActive: computed('model.id', 'active', function() {
		return this.model.id === this.active;
	})
});
