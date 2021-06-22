'use strict';

const { Transform } = require('stream');

class PatternReplaceStream extends Transform {
  constructor(options) {
    super(options);

    if (!options) {
      throw new Error('Options are missing.');
    }
    if (!options.regexp) {
      throw new Error('Regepx is missing.');
    }

    Transform.call(this, options);

    this.regexp = options.regexp;
    this.replacement = options.replacement || '';
    this.encoding = options.defaultEncoding || 'utf8';
  }

  _transform(chunk, encoding, callback) {
    if (!chunk) {
      // Null chunk received
      return callback(null);
    }

    try {
      const input = typeof chunk === 'string' ? chunk : chunk.toString(encoding == 'buffer' ? this.encoding : encoding);
      const output = input.replace(this.regexp, this.replacement);
      return callback(null, output);
    } catch (err) {
      return callback(err);
    }
  }
}

module.exports = PatternReplaceStream;
