'use strict';

const assert = require('assertthat');

const PatternReplaceStream = require('../lib');

suite('PatternReplaceStream', () => {
  test('is an object.', async () => {
    assert.that(PatternReplaceStream).is.ofType('object');
  });
});
