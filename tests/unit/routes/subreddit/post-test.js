import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | subreddit/post', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:subreddit/post');
    assert.ok(route);
  });
});
