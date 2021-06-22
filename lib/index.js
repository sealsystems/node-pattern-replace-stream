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
  chunk.toString(this.encoding || encoding);

  callback();
};

module.exports = PatternReplaceStream;
