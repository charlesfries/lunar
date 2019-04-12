import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | subreddit/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:subreddit/new');
    assert.ok(route);
  });
});
