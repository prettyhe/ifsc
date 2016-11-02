var ifsc = require('./../../src/node/index');

var assert = require('assert');

assert.equal(true, ifsc.validate('JAKA0AALLAH'));
assert.equal(true, ifsc.validate('KARB0000214'));
assert.equal(false, ifsc.validate('KARB0000226'));

