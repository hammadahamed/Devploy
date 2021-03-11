import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home', function(hooks) {   //NO I18N
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home');
    assert.ok(route);
  });
});
