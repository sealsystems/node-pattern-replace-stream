'use strict';

const stream = require('stream');
const util = require('util');

const Transform = stream.Transform;

const PatternReplaceStream = function(options) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!options.regexp) {
    throw new Error('Regepx is missing.');
  }

  Transform.call(this, options);

  this.regexp = options.regexp;
  this.replacement = options.replacement || '';
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
    const output = input.replace(this.regex, this.replacement);
    return callback(null, output);
  } catch (err) {
    return callback(err);
  }
};

module.exports = PatternReplaceStream;
