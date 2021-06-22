'use strict';

const stream = require('stream');
const util = require('util');

const Transform = stream.Transform;

const PatternReplaceStream = function(options) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!options.pattern) {
    throw new Error('Pattern is missing.');
  }

  Transform.call(this, options);

  this.pattern = options.pattern;
  this.encoding = options.encoding || 'utf8';
};

util.inherits(PatternReplaceStream, Transform);

PatternReplaceStream.prototype._transform = function(chunk, encoding, callback) {
  if (!chunk) {
    // Null chunk received
    return callback(null, null);
  }

  try {
    const input = typeof chunk === 'string' ? chunk : chunk.toString(this.encoding);
    const output = input.replace(this.pattern.regex, this.pattern.replacement);
    return callback(null, output);
  } catch (err) {
    return callback(err);
  }
};

module.exports = PatternReplaceStream;
