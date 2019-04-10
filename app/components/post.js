import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['post'],
	classNameBindings: ['isActive:active'],
	
	isActive: computed('model.id', 'active', function() {
		return this.model.id === this.active;
	}),
	
	click() {
		let { subreddit_name_prefixed, id } = this.model;
		subreddit_name_prefixed = subreddit_name_prefixed.replace('r/', '');
		this.onSelection(subreddit_name_prefixed, id);
	}
});
