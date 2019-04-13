import Service from '@ember/service';
import snoowrap from 'snoowrap';
import config from './../config/environment';

export default Service.extend({
	
	init() {
		this._super(...arguments);
		let { reddit } = config.APP;
		const api = new snoowrap({
			userAgent: reddit.userAgent,
			clientId: reddit.clientId,
			clientSecret: reddit.clientSecret,
			refreshToken: reddit.refreshToken
		});
		this.set('api', api);
	}
});
