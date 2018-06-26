import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | my-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it fires click when enabled', async function(assert) {
    assert.expect(1);
    this.set('disabled', false);
    this.set('clickHandler', () => {
      assert.notOk(this.disabled)
    });
    await render(hbs`
      {{#my-button disabled=disabled click=(action clickHandler)}}
        <svg viewBox="0 0 16 16" width="16" height="16">
          <circle cx="8" cy="8" r="6" stroke="red" fill="yellow" />
        </svg>
      {{/my-button}}
    `);
    await click('svg');
    this.set('disabled', true);
    await click('svg');
  });
});
