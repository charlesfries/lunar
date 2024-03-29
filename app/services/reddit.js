import Service from '@ember/service';
import snoowrap from 'snoowrap';

export default Service.extend({
	
	init() {
		this._super(...arguments);
		// const r = new snoowrap({
		// 	userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-en) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4',
		// 	clientId: 'BTI2fSpBFOOYVA',
		// 	clientSecret: 'yjF2HwFxVxU2O767oJ-0XZky6Pw',
		// 	refreshToken: 'put your refresh token here'
		// });
		const api = new snoowrap({
			userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-en) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4',
			clientId: '',
			clientSecret: '',
			username: '',
			password: ''
		});
		this.set('api', api);
	}
});
