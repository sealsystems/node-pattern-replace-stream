'use strict';

const assert = require('assertthat');

const PatternReplaceStream = require('../lib');

suite('PatternReplaceStream', () => {
  test('is a function.', async () => {
    assert.that(PatternReplaceStream).is.ofType('function');
  });
});
