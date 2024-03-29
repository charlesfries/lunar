import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('feed', { path: '/feed/:name' });
    this.route('subreddit', { path: '/r/:name' }, function() {
			this.route('new');
      this.route('post', { path: '/:id' });
			this.route('create');
    });
    this.route('user', { path: '/u/:username' });
});

export default Router;
