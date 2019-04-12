import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('feed', { path: '/feed/:name' });
    this.route('subreddit', { path: '/r/:name' }, function() {
      this.route('post', { path: '/:id' }, function() {});
      this.route('create');

      this.route('index', { path: '/' }, function() {});
      this.route('new');
    });
    this.route('user', { path: '/u/:username' });
});

export default Router;
