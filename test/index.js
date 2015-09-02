"use strict";

var path = require('path');
var generate = require('markdown-it-testgen');

describe('Lazy ATX headers', function() {
  var md = require('markdown-it')().use(require('../'));
  generate(path.join(__dirname, 'fixtures'), md);
});
