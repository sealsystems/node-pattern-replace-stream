# @sealsystems/pattern-replace-stream

Replaces pattern in a text stream.

**Please note:** This module only modifies one data chunk after another. Patterns that span multiple chunks will not be recognized!

## Installation

```shell
npm install @sealsystems/pattern-replace-stream
```

## Quick start

First you need to add a reference to @sealsystems/pattern-replace-stream within your application.

```javascript
const PatternReplaceStream = require('@sealsystems/pattern-replace-stream');
```

Now, you can create a filter stream and connect it with :

```javascript
const process = require('process');

const PatternReplaceStream = require('@sealsystems/pattern-replace-stream');

// Create stream to replace all occurences of 'a' with '1'
const stream = new PatternReplaceStream({ regexp: /a/g, replacement: '1' })

// Use pipe() to cennect it with input and output streams
process.stdin.pipe(stream).pipe(process.stdout);

// -> Any input via stdin will be modified and printed to stdout
```

If the encoding of incoming text is not specified, UTF-8 will be assumed by default. To change this default, use the option `defaultEncoding`:

```javascript
// Treat data as ASCII text by default
const stream = new PatternReplaceStream({ regexp: /a/g, replacement: '1', defaultEncoding: 'ascii' })
```
