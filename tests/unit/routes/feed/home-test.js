import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | feed/home', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:feed/home');
    assert.ok(route);
  });
});
