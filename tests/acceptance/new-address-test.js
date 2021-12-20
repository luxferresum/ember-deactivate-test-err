import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | new address', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /new-address', async function (assert) {
    await visit('/new-address');

    assert.strictEqual(currentURL(), '/new-address');
  });
});
