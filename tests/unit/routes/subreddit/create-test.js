import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | subreddit/create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:subreddit/create');
    assert.ok(route);
  });
});
