import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('feed', function() {
        this.route('home');
        this.route('popular');
        this.route('all');
    });
    this.route('subreddit', { path: '/r/:name' });
    this.route('user', { path: '/u/:username' });
});

export default Router;
